import { Routes, Route } from 'react-router-dom'
import { Layout } from 'src/components/Layout'
import { IndexPage } from 'src/pages'
import { CounterPage } from 'src/pages/Counter'
import { Providers } from 'src/providers'

export const App = () => (
	<Providers>
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<IndexPage />} />
				<Route path='counter' element={<CounterPage />} />
			</Route>
		</Routes>
	</Providers>
)
