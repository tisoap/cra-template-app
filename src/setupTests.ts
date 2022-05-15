import '@testing-library/jest-dom/extend-expect'
import 'jest-extended'

global.matchMedia = function (query: string) {
	return {
		matches: false,
		media: query,
		onchange: null,
		addListener: jest.fn(),
		removeListener: jest.fn(),
		addEventListener: jest.fn(),
		removeEventListener: jest.fn(),
		dispatchEvent: jest.fn()
	}
}
