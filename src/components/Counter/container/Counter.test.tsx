import { fireEvent, screen, waitFor } from '@testing-library/react'
import { apiClient } from 'src/client'
import { renderWithProviders } from 'src/utils/test-utils'
import { Counter } from './Counter.container'

describe('Counter Container', () => {
	test('Increments sync', () => {
		renderWithProviders(<Counter />)
		const input = screen.getByLabelText('Set increment amount')

		fireEvent.click(screen.getByLabelText('Increment value'))
		fireEvent.click(screen.getByText('Add If Odd'))
		fireEvent.click(screen.getByLabelText('Decrement value'))
		fireEvent.change(input, { target: { value: '5' } })
		fireEvent.click(screen.getByText('Add Amount'))

		expect(screen.getByText('7')).toBeInTheDocument()
	})

	test('Increments async', async () => {
		renderWithProviders(<Counter />)
		expect(screen.getByText('0')).toBeInTheDocument()

		const spy = jest.spyOn(apiClient, 'fetchCount')
		spy.mockReturnValue(Promise.resolve({ data: 5 }))

		const input = screen.getByLabelText('Set increment amount')
		fireEvent.change(input, { target: { value: '5' } })
		fireEvent.click(screen.getByText('Add Async'))

		await waitFor(() => {
			expect(screen.getByText('5')).toBeInTheDocument()
		})
	})
})
