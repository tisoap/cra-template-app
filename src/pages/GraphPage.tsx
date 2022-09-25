import { Center, Heading, Box } from '@chakra-ui/react'
import { Graph } from 'src/components'

export const GraphPage = () => {
	return (
		<Center height='100%' flexDirection='column'>
			<Heading>Graph</Heading>
			<Box
				height='550px'
				width='100%'
				border='1px solid black'
				marginTop='10px'
			>
				<Graph />
			</Box>
		</Center>
	)
}
