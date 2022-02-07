import {
	Button,
	Text,
	HStack,
	Input,
	Box,
	Wrap,
	WrapItem
} from '@chakra-ui/react'
import { useState } from 'react'

export interface CounterProps {
	count: number
	onIncrement: () => void
	onDecrement: () => void
	onIncrementByAmount: (amount: number) => void
	onIncrementAsync: (amount: number) => void
	onIncrementIfOdd: (amount: number) => void
}

export const CounterPresentation = ({
	count,
	onDecrement,
	onIncrement,
	onIncrementAsync,
	onIncrementByAmount,
	onIncrementIfOdd
}: CounterProps) => {
	const [incrementAmount, setIncrementAmount] = useState('2')
	const incrementValue = Number(incrementAmount) || 0

	return (
		<Box width='100%'>
			<HStack justifyContent='center'>
				<Button
					size='lg'
					aria-label='Decrement value'
					onClick={() => onDecrement()}
				>
					-
				</Button>
				<Text as='span' fontSize='78px' px={4}>
					{count}
				</Text>
				<Button
					size='lg'
					aria-label='Increment value'
					onClick={() => onIncrement()}
				>
					+
				</Button>
			</HStack>
			<HStack justifyContent='center' spacing={4}>
				<Input
					type='number'
					width='64px'
					fontSize='3xl'
					textAlign='center'
					p={1}
					mr={2}
					aria-label='Set increment amount'
					value={incrementAmount}
					onChange={(event) => setIncrementAmount(event.target.value)}
				/>
				<Wrap spacing={2}>
					<WrapItem>
						<Button
							size='lg'
							onClick={() => onIncrementByAmount(incrementValue)}
						>
							Add Amount
						</Button>
					</WrapItem>
					<WrapItem>
						<Button size='lg' onClick={() => onIncrementAsync(incrementValue)}>
							Add Async
						</Button>
					</WrapItem>
					<WrapItem>
						<Button size='lg' onClick={() => onIncrementIfOdd(incrementValue)}>
							Add If Odd
						</Button>
					</WrapItem>
				</Wrap>
			</HStack>
		</Box>
	)
}
