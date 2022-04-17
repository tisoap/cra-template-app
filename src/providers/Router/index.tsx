import { BrowserRouter } from 'react-router-dom'
import type { ReactNode } from 'react'

export const RouterProvider = ({ children }: { children: ReactNode }) => {
	return <BrowserRouter>{children}</BrowserRouter>
}
