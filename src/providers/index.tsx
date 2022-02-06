import { StrictMode } from 'react'
import { StoreProvider } from './Store'
import { ThemeProvider } from './Theme'
import type { FunctionComponent } from 'react'

export const Providers: FunctionComponent = ({ children }) => {
	return (
		<StrictMode>
			<StoreProvider>
				<ThemeProvider>{children}</ThemeProvider>
			</StoreProvider>
		</StrictMode>
	)
}
