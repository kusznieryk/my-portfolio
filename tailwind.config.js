module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        animation:{
          'fade': 'fade 400ms ease forwards',
          'fadein': 'fade-in 400ms ease  forwards 800ms',
            'navbar': 'navbar 400ms ease forwards'
          },
        keyframes: {
              fade: {
                'from':  {opacity: '1'},
                'to': { opacity:'0'}
            },
              fadein:{
                  'from': { opacity: '0'},
                  'to': { opacity:'1'}
            },
            navbar:{
                'from': {transform: 'translateY(-100%)'},
                'to': {transform:'translateY(0)'}
            }
          }
    },
    fontFamily: {
      title: ['Gothic A1', 'sans-serif'],
      main: ['Noto Sans', 'sans-serif'],
    },
    colors: {
      text: '#D0D0D0',
      bg: '#0E0E16',
      navbar: '#0E1524',
      prim: '#E94560',
      sec: '#0F3460',
    },
  },
  variants: {
    extend: {
      borderStyle: ['hover', 'focus'],
    },
  },
  plugins: [],
};
