import * as React from 'react'
import { useForm } from 'react-hook-form'

import { themeDecorator } from '../../story-layout/src/index'
import { chakra, HStack, Switch } from '../src/index'

export default {
  title: 'Switch',
  decorators: [themeDecorator],
  parameters: {
    layout: 'centered'
  }
}

export const Base = () => <Switch colorScheme="green" />

export const Disabled = () => (
  <Switch isDisabled size="md" colorScheme="blue" margin="20px" />
)

export const Readonly = () => (
  <Switch isReadOnly size="md" colorScheme="blue" margin="20px" />
)

export const Invalid = () => (
  <Switch isInvalid size="md" colorScheme="blue" margin="20px" />
)

export const Usage = () => (
  <chakra.div display="flex" justifyContent="center" alignItems="center">
    <chakra.label htmlFor="email-alerts" mr="16px">
      Enable email alerts?
    </chakra.label>
    <Switch colorScheme="green" id="email-alerts" />
  </chakra.div>
)

export const Sizes = () => {
  return (
    <HStack>
      <Switch size="sm" colorScheme="green" />
      <Switch size="md" colorScheme="green" />
      <Switch size="lg" colorScheme="green" />
    </HStack>
  )
}

export const Controlled = () => {
  const [checked, setChecked] = React.useState(true)

  return (
    <>
      {checked ? 'Checked' : 'Unchecked'}
      <Switch
        isChecked={checked}
        colorScheme="blue"
        onChange={e => setChecked(e.target.checked)}
      />
    </>
  )
}

export const WithReactHookForm = () => {
  const defaultValues = {
    name: 'Hello',
    boolean: true,
    test: true
  }

  const { handleSubmit, register } = useForm({
    defaultValues
  })

  function onSubmit(values) {
    alert(JSON.stringify(values, null, 2))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="name" {...register('name', { required: true })} />
      {/* <input type="checkbox" name="boolean" ref={register} /> */}
      <Switch {...register('boolean', { required: true })} />
      <button type="submit">Submit</button>
    </form>
  )
}
