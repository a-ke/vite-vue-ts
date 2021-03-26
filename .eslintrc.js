module.exports = {
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	extends: [
		'plugin:vue/vue3-recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'plugin:prettier/recommended'
	],
	rules: {
		'import/extensions': [
			'off',
			'always',
			{
				js: 'never',
				vue: 'never'
			}
		],
		'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
		'prefer-destructuring': 'off',
		'no-param-reassign': 'off',
		'no-underscore-dangle': 'off',
		'func-names': 'off',
		'no-console': 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'prettier/prettier': 'error',
		'template-curly-spacing': ['error', 'never'],
		'function-paren-newline': 'off'
	}
};
