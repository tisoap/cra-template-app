import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './theme'
import type { ReactNode } from 'react'

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	return (
		<ChakraProvider theme={theme} resetCSS>
			{children}
		</ChakraProvider>
	)
}

export { theme }
