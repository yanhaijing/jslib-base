import config from './rollup.config';

// ES output
config.output.format = 'es';
config.output.file = 'dist/index.esm.js';

export default config;
