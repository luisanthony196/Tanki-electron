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
          main: '#5bc0be'
        },
        secondary: {
          main: '#3a506b'
        },
        info: {
          main: '#b8a8db'
        },
        success: {
          main: '#4b9f72'
        },
        error: {
          main: '#f44336'
        },
        text: {
          primary: '#ffffff',
          secondary: '#5bc0be'
        },
        background: {
          default: '#0b132b',
          paper: '#1c2541'
        }
      }
    }
  }
})

export default theme
