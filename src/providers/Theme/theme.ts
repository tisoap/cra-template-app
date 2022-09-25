import { extendTheme } from '@chakra-ui/react'

const semanticTokens = {
	colors: {
		background: {
			default: 'gray.50',
			_dark: 'gray.800'
		},
		foreground: {
			default: 'white',
			_dark: 'gray.700'
		},
		brand: {
			default: 'blue.500',
			_dark: 'blue.700'
		}
	}
}

const styles = {
	global: {
		'html, body, #__next, #root': {
			height: '100%',
			width: '100%',
			minWidth: '320px',
			minHeight: '400px',
			bg: 'background',
			padding: 0,
			margin: 0
		}
	}
}

export const theme = extendTheme({ styles, semanticTokens })
