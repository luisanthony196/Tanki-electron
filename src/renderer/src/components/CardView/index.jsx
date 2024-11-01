import { Box } from '@mui/material'
import { Title } from '../Shared/Title'

function CardView({ deck }) {
  return (
    <Box>
      <Title title={deck.name} subtitle="Nada que decir" />
    </Box>
  )
}

export default CardView
