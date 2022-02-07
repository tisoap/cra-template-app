import {
	decrement,
	increment,
	incrementByAmount,
	incrementAsync,
	incrementIfOdd,
	selectCount
} from 'src/ducks/Counter'
import { useAppSelector, useAppDispatch } from 'src/hooks/redux'
import { CounterPresentation } from '../presentation/Counter.presentation'

export const Counter = () => {
	const count = useAppSelector(selectCount)
	const dispatch = useAppDispatch()

	return (
		<CounterPresentation
			count={count}
			onDecrement={() => dispatch(decrement())}
			onIncrement={() => dispatch(increment())}
			onIncrementByAmount={(value) => dispatch(incrementByAmount(value))}
			onIncrementAsync={(value) => dispatch(incrementAsync(value))}
			onIncrementIfOdd={(value) => dispatch(incrementIfOdd(value))}
		/>
	)
}
