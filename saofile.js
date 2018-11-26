const superb = require('superb');

module.exports = {
  prompts() {
    return [
      {
        name: 'name',
        message: 'What is the name of the new project',
        default: this.outFolder,
        filter: val => val.toLowerCase()
      },
      {
        name: 'description',
        message: 'How would you descripe the new project',
        default: `my ${superb.random()} project`
      },
      {
        name: 'username',
        message: 'What is your GitHub username',
        default: this.gitUser.username || this.gitUser.name,
        filter: val => val.toLowerCase(),
        store: true
      },
      {
        name: 'email',
        message: 'What is your email?',
        default: this.gitUser.email,
        store: true
      },
      {
        name: 'compiler',
        type: 'list',
        message: 'What compiler would you like to use?',
        default: 'ES6(Babel7)',
        choices: ['ES6(Babel7)', 'TypeScript'],
        filter: val => ({
          useBabel: val === 'ES6(Babel7)',
          useTypescript: val === 'TypeScript',
          suffix: val === 'ES6(Babel7)' ? 'js' : 'ts'
        }),
        store: true
      },
      {
        name: 'useJsmini',
        message: 'Use @jsmini?',
        type: 'confirm'
      }
    ]
  },
  actions: [
    {
      type: 'add',
      files: '**',
      filters: {
        '**/*.ts': 'compiler.useTypescript',
        'tsconfig.json': 'compiler.useTypescript',
        'tslint.json': 'compiler.useTypescript',
        'src/*.js': 'compiler.useBabel',
        '.babelrc': 'compiler.useBabel'
      }
    }
  ],
  async completed() {
    this.gitInit()
    // await this.npmInstall()
    // this.showProjectTips()
  }
};
