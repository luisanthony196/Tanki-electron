import { createTheme } from '@mui/material'
import { lightBlue } from '@mui/material/colors'

const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#0d47a1'
        },
        secondary: {
          main: lightBlue[500]
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: '#5266ff'
        },
        secondary: {
          main: '#ff8c6d'
        },
        info: {
          main: lightBlue[500]
        },
        success: {
          main: '#6bbaa2'
        },
        error: {
          main: '#ff579f'
        },
        text: {
          primary: '#e4e5e7',
          secondary: '#94959e'
        },
        background: {
          default: '#060813',
          paper: '#000000',
          accent: '#1b2c32'
        },
        zippy: {
          border: '#20233c'
        }
      }
    }
  }
})

export default theme
