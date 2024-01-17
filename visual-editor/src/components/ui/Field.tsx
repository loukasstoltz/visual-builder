import type { ReactNode } from 'react'
import { Label } from './Label'
import { Tooltip } from './Tooltip'
import styled from '@emotion/styled'
import { Input } from 'src/components/ui'

type Option = {
  value: string
  label: string
}

type FieldProps = {
  label?: ReactNode
  help?: ReactNode
  options?: Option[]
  tooltip?: ReactNode
  icon?: ReactNode
} & JSX.IntrinsicElements['input'] &
  JSX.IntrinsicElements['textarea'] &
  JSX.IntrinsicElements['select']

export function Field({
  children,
  label,
  help,
  type = 'text',
  options,
  tooltip,
  icon,
  ...props
}: FieldProps) {
  if (!children) {
    if (options) {
      children = (
        <Select {...props}>
          {options.map((option: Option, key) => {
            return (
              <option value={option.value} key={key}>
                {option.label}
              </option>
            )
          })}
        </Select>
      )
    } else if (['text', 'number'].includes(type)) {
      children = <Input type={type} {...props} />
    } else if (type === 'textarea') {
      children = <Input as="textarea" {...props} />
    } else {
      throw new Error('Cannot render this type of field : ' + type)
    }
  }

  if (tooltip) {
    children = <Tooltip content={tooltip}>{children}</Tooltip>
  }

  return (
    <div>
      {label && <Label htmlFor={props.id}>{label}</Label>}
      <Wrapper>
        {children}
        {icon && <Icon>{icon}</Icon>}
      </Wrapper>
      {help && <HelpMessage>{help}</HelpMessage>}
    </div>
  )
}

const Select = Input.withComponent('select')

const HelpMessage = styled.div({
  fontStyle: 'italic',
  marginTop: '.5em',
  fontSize: '.8em',
})

const Wrapper = styled.div({
  position: 'relative',
})

const Icon = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  bottom: 0,
  color: 'var(--ve-field-border)',
  cursor: 'pointer',
  height: '100%',
  position: 'absolute',
  right: 0,
  top: 0,
  width: 40,
})
