import { EventRepeat, Moving, Style } from '@mui/icons-material'
import { CardContent, Typography } from '@mui/material'

const boxStyle = {
  display: 'flex',
  placeItems: 'center',
  gap: '0.8rem'
}

const getDate = (stringDate) => {
  const objectDate = new Date(stringDate)
  const today = new Date()

  if (objectDate.toDateString() == today.toDateString()) return 'Hoy'
  else if (objectDate.toDateString() === new Date(today.getTime() - 86400000).toDateString())
    return 'Ayer'
  else return stringDate ? objectDate.toLocaleDateString() : null
}

export function CustomCardContent({ deck, styles }) {
  return (
    <CardContent>
      <Typography gutterBottom variant="h6" style={styles}>
        {deck.name}
      </Typography>
      <div style={{ display: 'grid' }}>
        <div style={boxStyle}>
          <Style color="primary" />
          <p>{deck.statistics?.cardsCount}</p>
        </div>
        <div style={boxStyle}>
          <Moving color="error" />
          <p>{deck.statistics?.difficulty?.toFixed(2) || 0}</p>
        </div>
        <div style={{ ...boxStyle, gridColumn: '1 / span 2' }}>
          <EventRepeat color="info" />
          <p>{getDate(deck.statistics?.lastReview) || 'Sin registros'}</p>
        </div>
      </div>
    </CardContent>
  )
}
