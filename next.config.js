module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/latest' : '',
  webpack: (config) => {
    config.output.publicPath = `/latest${config.publicPath}`;
    return config;
  }
}
