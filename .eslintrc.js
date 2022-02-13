module.exports = {
	parserOptions: {
		project: ['./tsconfig.json']
	},
	plugins: ['prettier', 'testcafe', 'storybook'],
	extends: [
		'@tisoap/eslint-config-ts-react',
		'plugin:prettier/recommended',
		'plugin:testcafe/recommended',
		'plugin:storybook/recommended'
	],
	rules: {
		'prettier/prettier': ['error', {}, { usePrettierrc: true }]
	}
}
