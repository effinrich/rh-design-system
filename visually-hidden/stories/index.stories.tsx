import * as React from 'react'

import { themeDecorator } from '../../story-layout/src/index'
import { VisuallyHidden, VisuallyHiddenInput } from '../src/index'

export default {
  title: 'Visually Hidden',
  decorators: [themeDecorator],
  parameters: {
    layout: 'centered'
  }
}

export const HiddenSpan = () => (
  <VisuallyHidden>This is visually hidden</VisuallyHidden>
)

export const HiddenInput = () => (
  <VisuallyHiddenInput
    defaultChecked
    onChange={event => {
      console.log(event.target.checked)
    }}
  />
)
