import getConfig from 'next/config';

const { publicRuntimeConfig: config } = getConfig();

export const {
  assetPrefix,
} = config;
