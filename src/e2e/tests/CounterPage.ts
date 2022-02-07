import { Selector, test, fixture } from 'testcafe'
import { TEST_URL } from '../constants'

fixture`Counter Page`.page`${TEST_URL}/counter`

test('Async add two', async (t) => {
	const counter = Selector('span').innerText
	const addAsync = Selector('button').withExactText('Add Async')

	await t.expect(counter).eql('0').click(addAsync).expect(counter).eql('2')
})
