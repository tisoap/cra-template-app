import { StrictMode } from 'react'
import { RouterProvider } from './Router'
import { StoreProvider } from './Store'
import { ThemeProvider } from './Theme'
import type { FunctionComponent } from 'react'

export const Providers: FunctionComponent = ({ children }) => {
	return (
		<StrictMode>
			<RouterProvider>
				<StoreProvider>
					<ThemeProvider>{children}</ThemeProvider>
				</StoreProvider>
			</RouterProvider>
		</StrictMode>
	)
}
