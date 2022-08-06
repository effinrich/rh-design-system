import * as React from 'react'
import {
  ChakraProvider,
  ColorModeScript,
  extendTheme,
  ThemeConfig,
  useColorMode
} from '@chakra-ui/react'
import {
  CoreLayout,
  StylesheetSwitch
} from '@divriots/dockit-react/mdx-layout-core'
import { ColorScheme } from '@divriots/dockit-react/mdx-layout-core/dist/StylesheetSwitch'
import { MDXProvider } from '@mdx-js/react'

import { components } from './components'
import { Logo } from './Logo'

import './style.css'

import { theme } from '~/theme'

// Extend default Chakra theme
const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: false
}

const fullTheme = extendTheme({ ...theme, config })

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <StylesheetSwitch
      colorScheme={colorMode as 'dark' | 'light'}
      onSwitch={() => toggleColorMode()}
    />
  )
}

const ThemeProviderLayout = props => (
  <>
    <ColorModeScript initialColorMode="system" />
    <MDXProvider components={components}>
      <ChakraProvider theme={fullTheme}>
        <CoreLayout
          stylesheetSwitch={<ColorModeSwitch />}
          logo={
            <div style={{ width: '8rem' }}>
              <Logo />
            </div>
          }
          {...props}
        />
      </ChakraProvider>
    </MDXProvider>
  </>
)

export default ThemeProviderLayout
