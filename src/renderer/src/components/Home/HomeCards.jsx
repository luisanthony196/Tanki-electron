import { ArrowForwardIos, Info } from '@mui/icons-material'
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  IconButton,
  Stack,
  Typography
} from '@mui/material'

const twoLineTitle = {
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
}

const oneLineText = {
  height: '3em',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
}

export const HorizontalDeckList = ({ filterDeckList, handleInfo, handlePractice }) => {
  return (
    <Stack
      direction="row"
      spacing={2}
      className="scroll_enabled"
      sx={{ px: 4, py: 2, width: '100%', overflowX: 'scroll', scrollbarGutter: 'auto' }}
    >
      {filterDeckList.map((deck) => (
        <Card
          key={deck.id}
          variant="outlined"
          sx={{ borderRadius: 4, width: '12rem', minWidth: '12rem' }}
        >
          <CardActionArea onClick={() => handleInfo(deck)}>
            <CardContent>
              <Typography gutterBottom variant="h6" color="success" style={twoLineTitle}>
                {deck.name}
              </Typography>
              <p>{deck.statistics?.cardsCount} cartas</p>
              <p>Difficultad: {deck.statistics?.difficulty}</p>
              <p>Ultima revision: {deck.statistics?.lastReview}</p>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <IconButton color="primary" onClick={() => handleInfo(deck)}>
              <Info />
            </IconButton>
            <Button
              variant="contained"
              size="small"
              color="success"
              onClick={() => handlePractice(deck)}
              endIcon={<ArrowForwardIos />}
            >
              Estudiar
            </Button>
          </CardActions>
        </Card>
      ))}
    </Stack>
  )
}

// <CompleteDeckCard
//   key={deck.id}
//   title={deck.name}
//   handleClick={() => handleClick(deck.id)}
//   subtitle={deck.resume || deck.description?.slice(0, 80)}
//   styles={{ minWidth: '10rem', width: '10rem' }}
// />
