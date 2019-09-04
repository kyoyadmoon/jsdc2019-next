const merge = require('lodash/merge');

const env = process.env.NODE_ENV || 'development';

const config = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/jsdc2019-next' : '',
};

try {
  merge(config, require('./' + env));
} catch (err) {
  console.log('Failed to load config:', env);
}

module.exports = config;
