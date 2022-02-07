import { BrowserRouter } from 'react-router-dom'
import type { FunctionComponent } from 'react'

export const RouterProvider: FunctionComponent = ({ children }) => {
	return <BrowserRouter>{children}</BrowserRouter>
}
