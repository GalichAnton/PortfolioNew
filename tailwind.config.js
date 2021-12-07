module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'mainFont': ['Source Sans Pro'],
    },
    boxShadow: {
      "custom-light": " 0 0 10px #313131",
      "custom-dark": "5px 5px 10px #0a0c0e , -5px -5px 10px #14161c",
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
        myLightGrey: {
          DEFAULT: '#E0EAFC',
        },
        myLightBlue: {
          DEFAULT: '#CFDEF3',
        },
        myLightMode1: {
          DEFAULT: '#C9D6FF',
        },
        myLightMode2: {
          DEFAULT: '#E2E2E2',
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
    extend: {
      boxShadow: ['dark']
    },
  },
  plugins: [],
}
