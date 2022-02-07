import { Routes, Route } from 'react-router-dom'
import { IndexPage } from 'src/pages'
import { CounterPage } from 'src/pages/Counter'
import { Providers } from 'src/providers'

export const App = () => (
	<Providers>
		<Routes>
			<Route path='/'>
				<Route index element={<IndexPage />} />
				<Route path='counter' element={<CounterPage />} />
			</Route>
		</Routes>
	</Providers>
)
