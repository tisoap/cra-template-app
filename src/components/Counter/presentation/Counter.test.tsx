import { fireEvent, screen } from '@testing-library/react'
import { renderConcurrently } from 'src/utils/test-utils'
import { CounterPresentation } from './Counter.presentation'

describe('Counter Presentation', () => {
	const addAmountLabel = 'Add Amount'

	const props = {
		count: 0,
		onIncrement: jest.fn(),
		onDecrement: jest.fn(),
		onIncrementByAmount: jest.fn(),
		onIncrementAsync: jest.fn(),
		onIncrementIfOdd: jest.fn()
	}

	test('Renders count', async () => {
		renderConcurrently(<CounterPresentation {...props} count={2} />)
		expect(screen.getByText('2')).toBeInTheDocument()
	})

	test('Calls onIncrement', async () => {
		const increment = jest.fn()
		renderConcurrently(
			<CounterPresentation {...props} onIncrement={increment} />
		)
		fireEvent.click(screen.getByLabelText('Increment value'))
		expect(increment).toHaveBeenCalled()
	})

	test('Calls onDecrement', async () => {
		const decrement = jest.fn()
		renderConcurrently(
			<CounterPresentation {...props} onDecrement={decrement} />
		)
		fireEvent.click(screen.getByLabelText('Decrement value'))
		expect(decrement).toHaveBeenCalled()
	})

	test('Calls onIncrementByAmount', async () => {
		const incrementByAmount = jest.fn()
		renderConcurrently(
			<CounterPresentation {...props} onIncrementByAmount={incrementByAmount} />
		)
		fireEvent.click(screen.getByText(addAmountLabel))
		expect(incrementByAmount).toHaveBeenCalled()
	})

	test('Calls onIncrementAsync', async () => {
		const incrementAsync = jest.fn()
		renderConcurrently(
			<CounterPresentation {...props} onIncrementAsync={incrementAsync} />
		)
		fireEvent.click(screen.getByText('Add Async'))
		expect(incrementAsync).toHaveBeenCalled()
	})

	test('Calls onIncrementIfOdd', async () => {
		const incrementIfOdd = jest.fn()
		renderConcurrently(
			<CounterPresentation {...props} onIncrementIfOdd={incrementIfOdd} />
		)
		fireEvent.click(screen.getByText('Add If Odd'))
		expect(incrementIfOdd).toHaveBeenCalled()
	})

	test('Changes increment amount', async () => {
		const incrementByAmount = jest.fn()
		renderConcurrently(
			<CounterPresentation {...props} onIncrementByAmount={incrementByAmount} />
		)
		const input: HTMLInputElement = screen.getByLabelText(
			'Set increment amount'
		)
		fireEvent.change(input, { target: { value: '5' } })
		fireEvent.click(screen.getByText(addAmountLabel))
		expect(incrementByAmount).toHaveBeenCalledWith(5)
	})

	test('Adds zero if increment is not a valid number', async () => {
		const incrementByAmount = jest.fn()
		renderConcurrently(
			<CounterPresentation {...props} onIncrementByAmount={incrementByAmount} />
		)
		const input: HTMLInputElement = screen.getByLabelText(
			'Set increment amount'
		)
		fireEvent.change(input, { target: { value: 'abc' } })
		fireEvent.click(screen.getByText(addAmountLabel))
		expect(incrementByAmount).toHaveBeenCalledWith(0)
	})
})
