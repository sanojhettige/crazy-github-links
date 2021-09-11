const { colors: defaultColors } = require('tailwindcss/defaultTheme')

const colors = {
  ...defaultColors,
  ...{
    'custom-green':'#66bb6a',
    primary: {
      50: '#f4f4f5', 
      100: '#e8e9eb', 
      200: '#c6c9ce', 
      300: '#a3a8b0', 
      400: '#5f6774', 
      500: 'var(--color-primary)', 
      600: '#172233', 
      700: '#141d2b', 
      800: '#101722', 
      900: '#0d131c'
    },
    secondary: {
      50: '#f7fbff', 
      100: '#eef6ff', 
      200: '#d5e9ff', 
      300: '#bcdbff', 
      400: '#8ac1ff', 
      500: '#8ac1ff', 
      600: '#4f95e6', 
      700: '#427dbf', 
      800: '#356499', 
      900: '#2b517d'
    },
    github: {
      50: '#f3f3f3', 
      100: '#e8e8e8', 
      200: '#c5c5c5', 
      300: '#a2a1a1', 
      400: '#5d5b5b', 
      500: '#171515', 
      600: '#151313', 
      700: '#111010', 
      800: '#0e0d0d', 
      900: '#0b0a0a'
    },
    'slate-gray': {
      50: '#f7f9f9', 
      100: '#eff2f3', 
      200: '#d7dfe2', 
      300: '#bfcbd1', 
      400: '#90a4ae', 
      500: '#607d8b', 
      600: '#56717d', 
      700: '#485e68', 
      800: '#3a4b53', 
      900: '#2f3d44'
  },
  shark: {
    50: '#f4f4f4', 
    100: '#e9e9e9', 
    200: '#c8c8c8', 
    300: '#a6a6a6', 
    400: '#646464', 
    500: '#212121', 
    600: '#1e1e1e', 
    700: '#191919', 
    800: '#141414', 
    900: '#101010'
},
'sunset-orange': {
  50: '#fef6f5', 
  100: '#feeceb', 
  200: '#fcd0cd', 
  300: '#fbb4af', 
  400: '#f77b72', 
  500: '#f44336', 
  600: '#dc3c31', 
  700: '#b73229', 
  800: '#922820', 
  900: '#78211a'
},
bubbles: {
50: '#fdffff', 
100: '#fcfeff', 
200: '#f7fdfe', 
300: '#f3fcfd', 
400: '#e9f9fc', 
500: '#e0f7fa', 
600: '#cadee1', 
700: '#a8b9bc', 
800: '#869496', 
900: '#6e797b'
}
  },
}

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: colors
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
