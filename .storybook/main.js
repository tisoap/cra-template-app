const path = require('path')

module.exports = {
	stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/preset-create-react-app',
		'@chakra-ui/storybook-addon'
	],
	framework: '@storybook/react',
	core: {
		builder: 'webpack5'
	},
	typescript: {
		check: true
	},
	webpackFinal: async (config) => {
		// Enable absolute path imports
		config.resolve.modules.push(path.resolve(__dirname, '../'))
		return config
	}
}
