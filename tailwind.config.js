/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          primary: {
            dark: '#191B21',
            light: '#EFF2F8',
          },
          secondary: {
            dark: '#1F2025',
            light: '#DCE3F1',
          },
          metal: {
            dark: '#3F3F46',
            light: '#D4D4D8',
          }
        },
        on: {
          primary: {
            dark: '#D9E0EE',
            light: '#161320',
          },
          secondary: {
            dark: '#A09EB2',
            light: '#575268',
          },
          neutral: {
            dark: '#202036',
            light: '#EFF2F8',
          },
        },
        palette: {
          blue: {
            '50': '#f2f9fd',
            '100': '#e4f1fa',
            '200': '#c3e2f4',
            '300': '#8ecbeb',
            '400': '#51b0df',
            '500': '#2b97cc',
            '600': '#1e82ba', // default
            '700': '#18618c',
            '800': '#185274',
            '900': '#194661',
            '950': '#112c40',
          },
          cerulean: {
            '50': '#eff9ff',
            '100': '#def3ff',
            '200': '#b6e8ff',
            '300': '#75d8ff',
            '400': '#2cc6ff',
            '500': '#00a1e4', // default
            '600': '#008cd4',
            '700': '#006fab',
            '800': '#005d8d',
            '900': '#064e74',
            '950': '#04314d',
          },
          cyan: {
            '50': '#f0fdfa',
            '100': '#cbfcf2',
            '200': '#98f7e7',
            '300': '#58ebd7', // default
            '400': '#2bd6c4',
            '500': '#12baab',
            '600': '#0c958c',
            '700': '#0e7771',
            '800': '#105f5c',
            '900': '#124f4c',
            '950': '#042f2f',
          },
          turquoise: {
            '50': '#f0fdfa',
            '100': '#cbfcf2',
            '200': '#97f8e6',
            '300': '#5bedd7',
            '400': '#3adbc8', // default
            '500': '#10bcaa',
            '600': '#0a978c',
            '700': '#0d7871',
            '800': '#0f605c',
            '900': '#124f4b',
            '950': '#03302f',
          },
          green: {
            '50': '#f2fbf5',
            '100': '#e0f8e7',
            '200': '#c2f0d1',
            '300': '#93e2ae',
            '400': '#50c878', // default 
            '500': '#36b15f',
            '600': '#27924c',
            '700': '#22733d',
            '800': '#205b34',
            '900': '#1c4b2e',
            '950': '#0a2916',
          },
          moss: {
            '50': '#f3f6f5',
            '100': '#e1eae4',
            '200': '#c5d5cc',
            '300': '#a3bbae', // default
            '400': '#739483',
            '500': '#537665',
            '600': '#3e5d4f',
            '700': '#324a40',
            '800': '#293c34',
            '900': '#22322c',
            '950': '#131b18',
          },
          yellow: {
            '50': '#fffbeb',
            '100': '#fef2c7',
            '200': '#fce48b',
            '300': '#fbd04e',
            '400': '#fabc2a', // default
            '500': '#f49a0c',
            '600': '#d87307',
            '700': '#b3500a',
            '800': '#913e0f',
            '900': '#773310',
            '950': '#451903',
          },
          orange: {
            '50': '#fff7ed',
            '100': '#ffeed5',
            '200': '#fdd9ab',
            '300': '#fbb361', // default
            '400': '#f9963e',
            '500': '#f77818',
            '600': '#e85e0e',
            '700': '#c0460e',
            '800': '#993813',
            '900': '#7b3013',
            '950': '#421508',
          },
          red: {
            '50': '#fff0f4',
            '100': '#ffe2ea',
            '200': '#ffcada',
            '300': '#ff9fbc',
            '400': '#ff699a',
            '500': '#ff206e', // default
            '600': '#ed1168',
            '700': '#c80859',
            '800': '#a80951',
            '900': '#8f0c4b',
            '950': '#500125',
          },
          pink: {
            '50': '#fff1f2',
            '100': '#ffe4e6',
            '200': '#fdced3',
            '300': '#fca5af',
            '400': '#f9667a', // default
            '500': '#f2415d',
            '600': '#df1f47',
            '700': '#bc143c',
            '800': '#9d1439',
            '900': '#871436',
            '950': '#4b0618',
          },
          purple: {
            '50': '#f9f5ff',
            '100': '#efe7ff',
            '200': '#e2d3ff',
            '300': '#ccb0ff',
            '400': '#ad7eff',
            '500': '#9d65ff', // default
            '600': '#752af3',
            '700': '#631ad6',
            '800': '#561aaf',
            '900': '#48178c',
            '950': '#2d0269',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'display': ['var(--font-space-grotesk)', 'Helvetica', 'Arial', 'Open Sans'],
        'body': ['var(--font-dm-sans)', 'Helvetica', 'Arial', 'Open Sans'],
      },
    },
  },
  plugins: [],
}
