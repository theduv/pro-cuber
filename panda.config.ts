import { defineConfig } from '@pandacss/dev'
import colors from 'tailwindcss/colors'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          primary: {
            50: { value: colors.sky[50] },
            100: { value: colors.sky[100] },
            200: { value: colors.sky[200] },
            300: { value: colors.sky[300] },
            400: { value: colors.sky[400] },
            500: { value: colors.sky[500] }, // Default primary
            600: { value: colors.sky[600] },
            700: { value: colors.sky[700] },
            800: { value: colors.sky[800] },
            900: { value: colors.sky[900] },
          },
          secondary: {
            50: { value: colors.purple[50] },
            100: { value: colors.purple[100] },
            200: { value: colors.purple[200] },
            300: { value: colors.purple[300] },
            400: { value: colors.purple[400] },
            500: { value: colors.purple[500] }, // Default secondary
            600: { value: colors.purple[600] },
            700: { value: colors.purple[700] },
            800: { value: colors.purple[800] },
            900: { value: colors.purple[900] },
          },
          orange: {
            50: { value: colors.orange[50] },
            100: { value: colors.orange[100] },
            200: { value: colors.orange[200] },
            300: { value: colors.orange[300] },
            400: { value: colors.orange[400] },
            500: { value: colors.orange[500] }, // Default secondary
            600: { value: colors.orange[600] },
            700: { value: colors.orange[700] },
            800: { value: colors.orange[800] },
            900: { value: colors.orange[900] },
          },
          accent: {
            50: { value: colors.amber[50] },
            100: { value: colors.amber[100] },
            200: { value: colors.amber[200] },
            300: { value: colors.amber[300] },
            400: { value: colors.amber[400] },
            500: { value: colors.amber[500] }, // Default accent
            600: { value: colors.amber[600] },
            700: { value: colors.amber[700] },
            800: { value: colors.amber[800] },
            900: { value: colors.amber[900] },
          },
          neutral: {
            50: { value: colors.gray[50] },
            100: { value: colors.gray[100] },
            200: { value: colors.gray[200] },
            300: { value: colors.gray[300] },
            400: { value: colors.gray[400] },
            500: { value: colors.gray[500] }, // Default neutral
            600: { value: colors.gray[600] },
            700: { value: colors.gray[700] },
            800: { value: colors.gray[800] },
            900: { value: colors.gray[900] },
          },
          success: {
            50: { value: colors.green[50] },
            100: { value: colors.green[100] },
            200: { value: colors.green[200] },
            300: { value: colors.green[300] },
            400: { value: colors.green[400] },
            500: { value: colors.green[500] }, // Default success
            600: { value: colors.green[600] },
            700: { value: colors.green[700] },
            800: { value: colors.green[800] },
            900: { value: colors.green[900] },
          },
          error: {
            50: { value: colors.red[50] },
            100: { value: colors.red[100] },
            200: { value: colors.red[200] },
            300: { value: colors.red[300] },
            400: { value: colors.red[400] },
            500: { value: colors.red[500] }, // Default error
            600: { value: colors.red[600] },
            700: { value: colors.red[700] },
            800: { value: colors.red[800] },
            900: { value: colors.red[900] },
          },
          warning: {
            50: { value: colors.yellow[50] },
            100: { value: colors.yellow[100] },
            200: { value: colors.yellow[200] },
            300: { value: colors.yellow[300] },
            400: { value: colors.yellow[400] },
            500: { value: colors.yellow[500] }, // Default warning
            600: { value: colors.yellow[600] },
            700: { value: colors.yellow[700] },
            800: { value: colors.yellow[800] },
            900: { value: colors.yellow[900] },
          },
          info: {
            50: { value: colors.blue[50] },
            100: { value: colors.blue[100] },
            200: { value: colors.blue[200] },
            300: { value: colors.blue[300] },
            400: { value: colors.blue[400] },
            500: { value: colors.blue[500] }, // Default info
            600: { value: colors.blue[600] },
            700: { value: colors.blue[700] },
            800: { value: colors.blue[800] },
            900: { value: colors.blue[900] },
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
})
