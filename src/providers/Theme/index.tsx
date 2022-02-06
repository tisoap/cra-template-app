import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './theme'
import type { FunctionComponent } from 'react'

export const ThemeProvider: FunctionComponent = ({ children }) => {
	return (
		<ChakraProvider theme={theme} resetCSS>
			{children}
		</ChakraProvider>
	)
}

export { theme }
