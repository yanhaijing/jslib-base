import fs from 'fs'
import { resolve, join, parse, isAbsolute, sep } from 'path'
import mkdirp from 'mkdirp'
import inquirer from 'inquirer'
import xdgBasedir from 'xdg-basedir'
import { name } from '../package.json'

const cwd = process.cwd()

export const createBuilder = yargs => {
	yargs
	.usage('\n jslib-base-cli [args]')
	.options({
		t: {
			alias: 'type',
			desc: '创建类型(支持 javascript 或 typescript)',
			type: 'string'
		}
	})
	.help()
	.argv
	;
}

export const createHandler = argv => {
	const promptItems = createPromptItems(argv)
	inquirer.prompt(promptItems).then(answers => {
		Object.keys(answers).forEach(key => {
			argv[key] = answers[key]
		})
		create(argv)
	})
}

const create = options => {
	if (typeof options !== 'object') {
		throw new Error('参数必须是一个JSON对象。')
	}

	options = Object.assign({}, options)

	const { type } = options

	const packageJsonContent = fs.readFileSync(join(__dirname, `./templates/${type}.package.json`), 'utf8')
	fs.writeFileSync('./package.json', packageJsonContent)

	const testContent = fs.readFileSync(join(__dirname, `./templates/${type}.test.js`), 'utf8')
	fs.writeFileSync('./test/test.js', testContent)

	console.log('创建结束。')
}

const createPromptItems = options => ([
	{
		message: '请选择需要创建的项目类型',
		default: 'js',
		type: 'list',
		choices: ['javascript', 'typescript'],
		name: 'type',
		when: !options.type
	}
])
