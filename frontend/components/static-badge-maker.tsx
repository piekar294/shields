import React, { useState, ChangeEvent } from 'react'
import { staticBadgeUrl } from '../../core/badge-urls/make-badge-url'
import {Badge, InlineInput} from './common'

type StateKey = 'label' | 'message' | 'color'
type State = Record<StateKey, string>

export default function StaticBadgeMaker({ baseUrl = document.location.href }) {
  const [values, setValues] = useState<State>({
    label: '',
    message: '',
    color: '',
  })

  const isValid = values.message && values.color

  function onChange({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setValues({
      ...values,
      [name]: value,
    })
  }

  function renderBadge() {
      const { label, message, color } = values

      const src = isValid ?
          staticBadgeUrl({
              baseUrl,
              label,
              message,
              color,
          })
          : staticBadgeUrl({
              baseUrl,
              label: 'preview',
              message: 'some parameters missing',
          })

      return <p>
          <Badge alt="preview badge" display="block" src={src}/>
      </p>
  }

  return (
      <div>
      <InlineInput
        name="label"
        onChange={onChange}
        placeholder="label"
        value={values.label}
      />
      <InlineInput
        name="message"
        onChange={onChange}
        placeholder="message"
        value={values.message}
      />
      <InlineInput
        list="default-colors"
        name="color"
        onChange={onChange}
        placeholder="color"
        value={values.color}
      />
      <datalist id="default-colors">
        <option value="brightgreen" />
        <option value="green" />
        <option value="yellowgreen" />
        <option value="yellow" />
        <option value="orange" />
        <option value="red" />
        <option value="lightgrey" />
        <option value="blue" />
      </datalist>

      {renderBadge()}
      </div>
  )
}
