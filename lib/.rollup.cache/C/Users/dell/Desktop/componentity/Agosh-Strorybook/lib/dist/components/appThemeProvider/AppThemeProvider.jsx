import { __assign } from 'tslib'
import React from 'react'
import { useTheme as useColorMode } from 'next-themes'
import { ThemeProvider } from 'styled-components'
import defaultAppTheme, { darkMode, lightMode } from '../../appTheme/theme'
import { GlobalStyle } from './AppThemeProvider.styles'
var Main = function (_a) {
  var children = _a.children
  // use useColorMode from 'next-themes' only for toggling, setting, and injecting the script
  var colorMode = useColorMode().resolvedTheme
  var colors = colorMode === 'dark' ? darkMode : lightMode
  var appTheme = __assign(__assign({}, defaultAppTheme), colors)
  return (
    <ThemeProvider theme={appTheme}>
      <>
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>
  )
}
export default React.memo(Main)
//# sourceMappingURL=AppThemeProvider.jsx.map
