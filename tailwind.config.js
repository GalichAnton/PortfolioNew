module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'mainFont': ['Source Sans Pro'],
    },
    extend: {
      colors: {
        myBlack: {
          DEFAULT: '#0f2027',
        },
        myDarkGrey: {
          DEFAULT: '#203a43',
        },
        myDarkBlue: {
          DEFAULT: '#2c5364',
        },
        contentBg1: {
          DEFAULT: '#BBD2C5',
        },
        contentBg2: {
          DEFAULT: '#536976',
        },
        buttonBg1:{
          DEFAULT: '#4568DC'
        },
        buttonBg2:{
          DEFAULT: '#B06AB3'
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
