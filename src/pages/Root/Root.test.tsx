import { render, screen } from '@testing-library/react'
import { Providers } from 'src/providers'
import { RootPage } from './index'

test('renders learn react link', () => {
	render(
		<Providers>
			<RootPage />
		</Providers>
	)

	expect(screen.getByText(/learn/i)).toBeInTheDocument()
})
