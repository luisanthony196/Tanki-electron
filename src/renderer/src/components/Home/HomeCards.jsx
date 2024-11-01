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
import { CustomCardContent } from '../Shared/CustomCardContent'

const twoLineTitle = {
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
            <CustomCardContent deck={deck} styles={twoLineTitle} />
          </CardActionArea>
          <CardActions sx={{ justifyContent: 'center' }}>
            <Button
              variant="text"
              size="small"
              color="secondary"
              sx={{ width: '90%' }}
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
