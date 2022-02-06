import { render } from 'react-dom'
import { Providers } from 'src/providers'
import App from './App'

render(
	<Providers>
		<App />
	</Providers>,
	document.getElementById('root')
)
