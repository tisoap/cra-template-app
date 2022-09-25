import { Routes, Route } from 'react-router-dom'
import { Layout } from 'src/components'
import { CounterPage, GraphPage, IndexPage } from 'src/pages'
import { Providers } from 'src/providers'

export const App = () => (
	<Providers>
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<IndexPage />} />
				<Route path='counter' element={<CounterPage />} />
				<Route path='graph' element={<GraphPage />} />
			</Route>
		</Routes>
	</Providers>
)
