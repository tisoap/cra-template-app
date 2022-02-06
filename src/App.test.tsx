import { render, screen } from '@testing-library/react'
import App from './App'
import { Providers } from './providers'

test('renders learn react link', () => {
	render(
		<Providers>
			<App />
		</Providers>
	)

	expect(screen.getByText(/learn/i)).toBeInTheDocument()
})
