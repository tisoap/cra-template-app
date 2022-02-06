import { render } from 'react-dom'
import { RootPage } from 'src/pages/Root'
import { Providers } from 'src/providers'

render(
	<Providers>
		<RootPage />
	</Providers>,
	document.getElementById('root')
)
