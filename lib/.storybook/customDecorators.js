import React from 'react'
import { AppThemeProvider } from '../src/components/appThemeProvider'
import { StoryPaper, ThemeToggler } from './storybook.styles'

import { useTheme } from '../src/appTheme'

const ThemeSwitch = ({ children }) => {
  const theme = useTheme()
  return (
    <StoryPaper>
      <ThemeToggler
        onClick={() => theme.setColorMode(theme.colorMode === 'light' ? 'dark' : 'light')}
      >
        Toggle Theme
      </ThemeToggler>
      {children}
    </StoryPaper>
  )
}

export const ThemeDecorator = ({ children }) => (
  <AppThemeProvider>
    <ThemeSwitch>{children}</ThemeSwitch>
  </AppThemeProvider>
)
