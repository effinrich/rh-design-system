import * as React from 'react'
import { MdSettings } from 'react-icons/md'

import { themeDecorator } from '../../story-layout/src/index'
import {
  AddIcon,
  Avatar,
  chakra,
  Tag,
  TagCloseButton,
  TagLabel,
  TagLeftIcon,
  TagRightIcon
} from '../src/index'

export default {
  title: 'Tag',
  decorators: [themeDecorator],
  parameters: {
    layout: 'centered'
  }
}

export const Basic = () => <Tag>Gray</Tag>

export const WithSizes = () => (
  <>
    <Tag size="sm">Gray</Tag>
    <Tag size="md">Gray</Tag>
    <Tag size="lg">Gray</Tag>
  </>
)

/**
 * Pass the `colorScheme` prop to use any color in the theme object to
 * change the background color of the tag component
 */

export const ColorSchemes = () => (
  <>
    <Tag size="sm" colorScheme="green">
      Gray
    </Tag>
    <Tag size="md" colorScheme="pink">
      Gray
    </Tag>
    <Tag size="lg" colorScheme="blue">
      Gray
    </Tag>
  </>
)

/**
 * The tag component can contain an Icon. This is done by using the `TagIcon` component.
 * Positioning the tag icon can be done by placing it before (left side)
 * or after (right side) the tag component
 */

export const WithLeftIcon = () => (
  <Tag colorScheme="cyan">
    <TagLeftIcon w="12px" h="12px" as={AddIcon} />
    <TagLabel>Green</TagLabel>
  </Tag>
)

export const WithRightIcon = () => (
  <>
    <Tag colorScheme="cyan">
      <TagLabel>Green</TagLabel>
      <TagRightIcon w="12px" h="12px" as={AddIcon} />
    </Tag>

    <Tag variant="solid" colorScheme="teal">
      <TagLabel>Teal</TagLabel>
      <TagRightIcon as={MdSettings} />
    </Tag>
  </>
)

/**
 * Use the `TagCloseButton` to apply a close button to the tag component.
 */

export const WithCloseButton = () => (
  <>
    <Tag variant="solid" size="sm" colorScheme="cyan">
      <TagLabel>Tab Label</TagLabel>
      <TagCloseButton />
    </Tag>

    <Tag variant="solid" size="md" colorScheme="cyan">
      <TagLabel>Tab Label</TagLabel>
      <TagCloseButton />
    </Tag>

    <Tag variant="solid" size="lg" colorScheme="cyan">
      <TagLabel>Tab Label</TagLabel>
      <TagCloseButton />
    </Tag>
  </>
)

/**
 * Tag component can contain a custom element. This is done by placing the custom element
 * within the tag component.
 */

export const WithCustomElement = () => (
  <Tag size="lg" colorScheme="red" borderRadius="full">
    <Avatar
      src="https://bit.ly/sage-adebayo"
      size="xs"
      name="Segun Adebayo"
      marginLeft={-1}
      marginRight={2}
    />
    <TagLabel>Segun</TagLabel>
    <TagCloseButton />
  </Tag>
)
