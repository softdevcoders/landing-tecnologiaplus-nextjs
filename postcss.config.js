module.exports = {
  plugins: {
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
      features: {
        'custom-properties': false,
      },
      // Usar la configuración de browserslist del package.json
      // Esto asegura que no se generen prefijos innecesarios
      browsers: undefined, // Usar browserslist del package.json
    },
  },
}; 