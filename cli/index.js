import yargs from 'yargs'
import { createBuilder, createHandler } from './create'
import pkg, { version } from '../package.json'
import updateNotifier from 'update-notifier'
import opn from 'opn'

const app = () => {
	return new Promise(
		resolve => {
			const argv = yargs
				.usage('\n jslib-base-cli <command> [args]')
				.command({
					command: ['toggleJsTs', '*'],
					builder: createBuilder,
					handler: createHandler,
				})
				.alias('h', 'help')
				.alias('v', 'version')
				.help()
				.version(version)
				.argv
			resolve()
		}, 
		reject => {}
	)
}

app().catch((err) => console.error('[错误]', err.message))
updateNotifier({ pkg }).notify()
