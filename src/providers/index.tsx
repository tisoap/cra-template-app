import { StrictMode } from 'react'
import { RouterProvider } from './Router'
import { StoreProvider } from './Store'
import { ThemeProvider } from './Theme'
import type { ReactNode } from 'react'

export const Providers = ({ children }: { children: ReactNode }) => {
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
