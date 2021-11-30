import create, { UseStore } from 'zustand'
import {
  EditorComponentData,
  EditorComponentDefinition,
  EditorComponentDefinitions,
} from 'src/types'
import { deepSet } from 'src/functions/object'
import { combine, devtools } from 'zustand/middleware'
import { insertItem } from 'src/functions/array'
import { uniqId } from 'src/functions/string'

import createContext from 'zustand/context'
import { ComponentChildren } from 'preact'
import { clamp } from './functions/number'

export enum PreviewModes {
  PHONE,
  DESKTOP,
}

type State = {
  data: EditorComponentData[]
  definitions: EditorComponentDefinitions
  hiddenCategories: string[]
  focusIndex: null | string
  previewMode: PreviewModes
  sidebarWidth: number,
  addBlockIndex: number|null,
}

const sidebarWidth = localStorage.getItem('veSidebarWidth')

const createStore = (
  data: EditorComponentData[] = [],
  definitions: EditorComponentDefinitions,
  hiddenCategories: string[] = []
) =>
  create(
    devtools(
      combine(
        {
          data,
          definitions,
          hiddenCategories,
          addBlockIndex: null,
          focusIndex: null,
          previewMode: PreviewModes.DESKTOP,
          sidebarWidth: clamp(
            sidebarWidth ? parseInt(sidebarWidth, 10) : 600,
            0,
            window.innerWidth - 375
          ),
        } as State,
        (set) => ({
          setSidebarWidth: function (width: number) {
            localStorage.setItem('veSidebarWidth', width.toString())
            set(() => ({
              sidebarWidth: width,
            }))
          },
          updateData: function (newData: any, path?: string) {
            return set((state) => ({
              data: deepSet(state.data, path, newData),
            }))
          },
          removeBloc: function (removedData: EditorComponentData) {
            if (confirm('Voulez vous vraiment supprimer ce bloc ?')) {
              return set(({ data }) => ({
                data: data.filter((d) => d !== removedData),
              }))
            }
          },
          insertData: function (
            name: string,
            index: number,
            extraData?: object
          ): EditorComponentData {
            const newData = {
              ...extraData,
              _name: name,
              _id: name + uniqId(),
            }
            set((state) => {
              return {
                data: insertItem(state.data, index, newData),
                focusIndex: newData._id,
              }
            })
            return newData
          },
          setFocusIndex: function (id: string) {
            set(() => ({ focusIndex: id }))
          },
          setAddBlockIndex: function (index: number|null) {
            set(() => ({ addBlockIndex: index }))
          },
          togglePreviewMode: function () {
            set(({ previewMode }) => ({
              previewMode:
                previewMode === PreviewModes.DESKTOP
                  ? PreviewModes.PHONE
                  : PreviewModes.DESKTOP,
            }))
          },
        })
      )
    )
  )

type Store = ReturnType<typeof createStore>
// Extrait le type de la donnée à l'intérieur d'un UseStore<T>
type StoreData<T extends UseStore<any>> = T extends UseStore<infer V>
  ? V
  : never

const { Provider, useStore } = createContext<StoreData<Store>>()

export function StoreProvider({
  children,
  data,
  definitions,
  hiddenCategories,
}: {
  children: ComponentChildren
  data: EditorComponentData[]
  definitions: EditorComponentDefinitions
  hiddenCategories: string[]
}) {
  return (
    <Provider
      createStore={() => createStore(data, definitions, hiddenCategories)}
    >
      {children}
    </Provider>
  )
}

export function useData() {
  return useStore((state) => state.data)
}

export function useUpdateData() {
  return useStore((state) => state.updateData)
}

export function useRemoveBloc() {
  return useStore((state) => state.removeBloc)
}

export function useInsertData() {
  return useStore((state) => state.insertData)
}

export function useFocusIndex() {
  return useStore((state) => state.focusIndex)
}

export function useDefinitions() {
  return useStore((state) => state.definitions)
}

export function useSetFocusIndex() {
  return useStore((state) => state.setFocusIndex)
}

export function useFieldFocused(id: string) {
  return useStore((state) => state.focusIndex === id)
}

export function usePreviewMode() {
  return useStore((state) => state.previewMode)
}

export function useTogglePreviewMode() {
  return useStore((state) => state.togglePreviewMode)
}

export function useSidebarWidth() {
  return useStore((state) => state.sidebarWidth)
}

export function useSetSidebarWidth() {
  return useStore((state) => state.setSidebarWidth)
}

export function useFieldDefinitions() {
  return useStore((state) => state.definitions)
}

export function useHiddenCategories() {
  return useStore((state) => state.hiddenCategories)
}

export function useFieldDefinition(
  name: string
): EditorComponentDefinition | undefined {
  return useStore((state) => state.definitions)[name]
}

export function useBlocSelectionVisible(): number|null {
  return useStore((state) => state.addBlockIndex) !== null
}

export function useSetBlockIndex(): Function {
  return useStore((state) => state.setAddBlockIndex)
}

export const store = useStore
