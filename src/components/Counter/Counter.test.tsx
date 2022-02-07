import { fireEvent, render, screen } from '@testing-library/react'
import { CounterPresentation } from './Counter.presentation'

describe('Counter Presentation', () => {
	const props = {
		count: 0,
		onIncrement: jest.fn(),
		onDecrement: jest.fn(),
		onIncrementByAmount: jest.fn(),
		onIncrementAsync: jest.fn(),
		onIncrementIfOdd: jest.fn()
	}

	test('Renders count', () => {
		render(<CounterPresentation {...props} count={2} />)
		expect(screen.getByText('2')).toBeInTheDocument()
	})

	test('Calls onIncrement', () => {
		const increment = jest.fn()
		render(<CounterPresentation {...props} onIncrement={increment} />)
		fireEvent.click(screen.getByLabelText('Increment value'))
		expect(increment).toHaveBeenCalled()
	})

	test('Calls onDecrement', () => {
		const decrement = jest.fn()
		render(<CounterPresentation {...props} onDecrement={decrement} />)
		fireEvent.click(screen.getByLabelText('Decrement value'))
		expect(decrement).toHaveBeenCalled()
	})

	test('Calls onIncrementByAmount', () => {
		const incrementByAmount = jest.fn()
		render(
			<CounterPresentation {...props} onIncrementByAmount={incrementByAmount} />
		)
		fireEvent.click(screen.getByText('Add Amount'))
		expect(incrementByAmount).toHaveBeenCalled()
	})

	test('Calls onIncrementAsync', () => {
		const incrementAsync = jest.fn()
		render(<CounterPresentation {...props} onIncrementAsync={incrementAsync} />)
		fireEvent.click(screen.getByText('Add Async'))
		expect(incrementAsync).toHaveBeenCalled()
	})

	test('Calls onIncrementIfOdd', () => {
		const incrementIfOdd = jest.fn()
		render(<CounterPresentation {...props} onIncrementIfOdd={incrementIfOdd} />)
		fireEvent.click(screen.getByText('Add If Odd'))
		expect(incrementIfOdd).toHaveBeenCalled()
	})
})
