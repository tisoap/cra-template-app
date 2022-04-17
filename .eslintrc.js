module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			impliedStrict: true,
			jsx: true
		},
		project: ['./tsconfig.json']
	},
	settings: {
		react: {
			version: 'detect'
		},
		'import/resolver': {
			node: {
				paths: ['.']
			}
		}
	},
	env: {
		browser: true,
		node: true,
		jest: true
	},
	plugins: [
		'@shopify',
		'@typescript-eslint',
		'import',
		'jest-dom',
		'jsx-a11y',
		'prettier',
		'react-hooks',
		'react-prefer-function-component',
		'react',
		'sonarjs',
		'storybook',
		'testcafe',
		'testing-library',
		'unicorn'
	],
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:jest-dom/recommended',
		'plugin:testing-library/react',
		'plugin:sonarjs/recommended',
		'plugin:react-prefer-function-component/recommended',
		'plugin:prettier/recommended',
		'plugin:testcafe/recommended',
		'plugin:storybook/recommended'
	],
	rules: {
		'prettier/prettier': ['error', {}, { usePrettierrc: true }],
		// Disable
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/unbound-method': 'off',
		'react/display-name': 'off',
		'react/prop-types': 'off',
		'react/react-in-jsx-scope': 'off',
		// Enable
		'@shopify/jest/no-snapshots': 'error',
		'@shopify/jsx-no-complex-expressions': 'error',
		'@shopify/jsx-prefer-fragment-wrappers': 'error',
		'@shopify/prefer-early-return': 'error',
		'@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
		'@typescript-eslint/consistent-type-imports': 'error',
		'@typescript-eslint/no-explicit-any': 'error',
		'@typescript-eslint/no-unnecessary-condition': 'error',
		'array-callback-return': 'error',
		'max-depth': ['error', 3],
		'max-lines': ['error', { max: 300 }],
		'max-nested-callbacks': ['error', 3],
		'no-else-return': 'error',
		'no-nested-ternary': 'error',
		'no-unneeded-ternary': 'error',
		'prefer-template': 'error',
		'react-hooks/exhaustive-deps': 'error',
		'react/jsx-fragments': ['error', 'syntax'],
		'react/jsx-max-depth': ['error', { max: 5 }],
		'react/jsx-no-useless-fragment': 'error',
		'react/jsx-pascal-case': 'error',
		'react/no-array-index-key': 'error',
		'react/no-multi-comp': 'error',
		'react/self-closing-comp': 'error',
		'sonarjs/cognitive-complexity': ['error', 14],
		'sonarjs/elseif-without-else': 'error',
		'sonarjs/max-switch-cases': ['error', 10],
		'sonarjs/no-inverted-boolean-check': 'error',
		'unicorn/no-abusive-eslint-disable': 'error',
		// Sort imports
		'import/order': [
			'error',
			{
				groups: [
					'builtin',
					'external',
					'internal',
					'parent',
					'sibling',
					'index',
					'type',
					'object',
					'unknown'
				],
				'newlines-between': 'never',
				alphabetize: {
					order: 'asc',
					caseInsensitive: false
				}
			}
		]
	}
}
