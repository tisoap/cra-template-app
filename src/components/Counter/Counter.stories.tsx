import { CounterPresentation } from './Counter.presentation'
import type { CounterProps } from './Counter.presentation'
import type { Meta, Story } from '@storybook/react/types-6-0'

export default {
	title: 'Counter',
	component: CounterPresentation
} as Meta

const Template: Story<CounterProps> = (args) => (
	<CounterPresentation {...args} />
)

export const CounterExample = Template.bind({})
CounterExample.args = { count: 2 }
