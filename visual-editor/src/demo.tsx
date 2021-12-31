import {
  Alignment,
  Checkbox,
  EN,
  HTMLText,
  Number as NumberField,
  Range,
  Repeater,
  Row,
  Select,
  Tabs,
  Text,
  TextAlign,
  VisualEditor,
} from 'src/VisualEditor'
import {
  ButtonField,
  ButtonsField,
  ColorField,
  ContentField,
  ImageField,
  TitleField,
  WithStyles,
} from './shared'
import ReactDOM from 'react-dom'
import { TiptapEditor } from 'src/components/Editor/TiptapEditor/TiptapEditor'
import {
  QuillEditor,
  QuillEditorMode,
} from 'src/components/Editor/QuillEditor/QuillEditor'
import { useState } from 'react'
import styled from '@emotion/styled'

let editor = new VisualEditor({
  lang: EN,
})

editor.registerComponent('hero', {
  title: 'Hero',
  fields: WithStyles([TitleField(), ContentField(), ButtonsField()]),
})

editor.registerComponent('pricing', {
  title: 'Pricing',
  category: 'Commerce',
  fields: WithStyles([
    TitleField(),
    ContentField(),
    Repeater('prices', {
      min: 1,
      max: 5,
      collapsed: 'title',
      fields: [
        HTMLText('title', {
          label: 'Title',
          default: 'Pro',
          multiline: false,
        }),
        Text('price', { label: 'Price', default: '15€' }),
        Text('features', { label: 'Features', multiline: true }),
        ButtonField(),
      ],
    }),
  ]),
})

editor.registerComponent('icons-columns', {
  title: 'Icons columns',
  fields: WithStyles([
    Repeater('icons', {
      min: 1,
      max: 5,
      collapsed: 'title',
      fields: [
        Text('title', { label: 'Title', default: 'Featured title' }),
        ContentField(),
      ],
    }),
  ]),
})

editor.registerComponent('demo', {
  title: 'All field',
  fields: [
    Text('text', { label: 'Text' }),
    HTMLText('htmltext', { label: 'HTMLText' }),
    ContentField('htmltextarea'),
    NumberField('number', { label: 'Number' }),
    Checkbox('checkbox', { label: 'Checkbox' }),
    Checkbox('checkbox1', { label: 'Checkbox 1' }).when('checkbox', true),
    Checkbox('checkbox2', { label: 'Checkbox 2' }).when(
      'checkbox1',
      (v: boolean) => v
    ),
    ImageField(),
    ColorField('color', 'Colors'),
    Range('range', { min: 0, max: 100, label: 'Range' }),
    Select('select', {
      options: [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
      ],
      label: 'Select',
    }),
    Alignment('alignment', { vertical: true, label: 'Alignment' }),
    TextAlign('textalign', { vertical: true, label: 'TextAlign' }),
    Row([Text('text1'), Text('text2'), Text('text3')]),
    Tabs(
      {
        label: 'Content',
        fields: [Text('text4', { label: 'Content' })],
      },
      {
        label: 'Settings',
        fields: [Text('text5', { label: 'Settings' })],
      }
    ),
    Repeater('repeater', {
      label: 'Repeater',
      fields: [Text('text1'), Text('text2'), Text('text3')],
    }),
  ],
})

editor.registerComponent('text', {
  title: 'Formatted text',
  fields: [ContentField()],
})

editor.defineElement()
