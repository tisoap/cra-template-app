import { themes } from '@storybook/theming'

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	docs: { theme: themes.light },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/
		}
	}
}
