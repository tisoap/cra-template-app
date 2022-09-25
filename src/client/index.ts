import { delay } from 'src/utils'

// A mock function to mimic making an async request for data
const fetchCount = async (amount = 1) => {
	await delay(500)
	return { data: amount }
}

export const apiClient = {
	fetchCount
}
