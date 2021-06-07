module.exports = {
   purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
   darkMode: false, // or 'media' or 'class'
   theme: {
      backgroundColor: (theme) => ({
         ...theme('colors'),
         primary: '#0F0F0F',
         secondary: '#707070',
      }),
      extend: {
         textColor: {
            primary: '#18F890',
            secondary: '#5D19C2',
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
};
