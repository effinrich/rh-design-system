import * as React from 'react'

import { themeDecorator } from '../../story-layout/src/index'
import {
  Button,
  ButtonGroup,
  chakra,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  useInterval,
  usePopover
} from '../src/index'

export default {
  title: 'Menu',
  decorators: [themeDecorator],
  parameters: {
    layout: 'centered'
  }
}

function PopoverExample() {
  const { getTriggerProps, getPopoverProps, onClose } = usePopover()

  return (
    <>
      <button type="button" {...getTriggerProps()}>
        Open
      </button>
      <div
        {...getPopoverProps({
          style: {
            background: 'tomato',
            color: 'white',
            padding: 30
          }
        })}
      >
        This is the content <br />
        <button type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </>
  )
}

export const PopoverExample_ = () => <PopoverExample />

const Simple = () => (
  <Popover placement="right-start">
    <PopoverTrigger>
      <chakra.button mt="180px">Trigger</chakra.button>
    </PopoverTrigger>
    <PopoverContent>
      <PopoverArrow />
      <PopoverCloseButton />
      <PopoverHeader>Confirmation!</PopoverHeader>
      <PopoverBody>
        <p>Are you sure you want to have that milkshake?</p>
        <br />
        <button>Yes</button>
        <button>No</button>
      </PopoverBody>
    </PopoverContent>
  </Popover>
)

export const Simple_ = () => <Simple />

const Basic = () => (
  <>
    <Popover placement="top">
      <PopoverTrigger>
        <chakra.button>Welcome home</chakra.button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverHeader>Submit now</PopoverHeader>
        <PopoverBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </PopoverBody>
      </PopoverContent>
    </Popover>

    <Popover placement="bottom">
      <PopoverTrigger>
        <chakra.button>Welcome home</chakra.button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Submit now</PopoverHeader>
        <PopoverBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </PopoverBody>
      </PopoverContent>
    </Popover>

    <chakra.input />
  </>
)

export const Basic_ = () => <Basic />

function ControlledUsage() {
  const [isOpen, setIsOpen] = React.useState(false)
  const open = () => setIsOpen(!isOpen)
  const close = () => setIsOpen(false)
  return (
    <>
      <Button mr={5} onClick={open}>
        Trigger
      </Button>
      <Popover
        returnFocusOnClose={false}
        isOpen={isOpen}
        onClose={close}
        placement="right"
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <Button colorScheme="pink">Popover Target</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader fontWeight="semibold">Confirmation</PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            Are you sure you want to continue with your action?
          </PopoverBody>
          <PopoverFooter d="flex" justifyContent="flex-end">
            <ButtonGroup size="sm">
              <Button variant="outline">Cancel</Button>
              <Button colorScheme="red">Apply</Button>
            </ButtonGroup>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    </>
  )
}

const Interval = () => {
  const [value, setValue] = React.useState(0)
  useInterval(() => setValue(v => v + 1), 1000)
  return (
    <span style={{ fontWeight: 'bold', color: 'tomato', padding: 4 }}>
      {value}
    </span>
  )
}

export const ControlledUsage_ = () => <ControlledUsage />

function WithLazyPopover() {
  return (
    <Popover isLazy>
      <PopoverTrigger>
        <Button colorScheme="pink">Popover Target</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverBody>
          Are you sure you want to continue with your action?
          <p>
            Timer: <Interval />
          </p>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export const WithLazyPopover_ = () => <WithLazyPopover />

export function WithLazyPopoverMounted() {
  return (
    <Popover isLazy lazyBehavior="keepMounted">
      <PopoverTrigger>
        <Button colorScheme="pink">Popover Target</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverBody>
          Are you sure you want to continue with your action?
          <p>
            Timer: <Interval />
          </p>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}
