import { AutoStories, EventRepeat, MoreVert, RunningWithErrors, Style } from '@mui/icons-material'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Grid2,
  IconButton,
  LinearProgress,
  Menu,
  MenuItem,
  Stack,
  Typography
} from '@mui/material'
import dayjs from 'dayjs'
import { useState } from 'react'
import { menuOptions } from '../../constants/uiConstants'

// const twoLineTitle = {
//   display: '-webkit-box',
//   WebkitLineClamp: 2,
//   WebkitBoxOrient: 'vertical',
//   overflow: 'hidden',
//   textOverflow: 'ellipsis'
// }

const oneLineTitle = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
}

const boxStyle = {
  display: 'flex',
  placeItems: 'center',
  gap: '0.8rem',
  height: '2.2rem'
}

const getDifficult = (dif) => {
  if (dif === null) {
    return <Chip label="Indefinido" size="small" />
  } else if (dif < 2.5) {
    return <Chip label="Principiante" color="success" size="small" />
  } else if (dif < 5.0) {
    return <Chip label="Intermedio" color="info" size="small" />
  } else if (dif < 7.5) {
    return <Chip label="Avanzado" color="warning" size="small" />
  } else {
    return <Chip label="Experto" color="error" size="small" />
  }
}

export const RecentsDeckList = ({ filterDeckList, handleInfo, handlePractice }) => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleMenu = (option) => {
    setAnchorEl(null)
    console.log(option)
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  return (
    <Grid2 container spacing={2} sx={{ px: 4, py: 2 }}>
      {filterDeckList.map((deck) => (
        <Grid2 key={deck.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <Card key={deck.id} variant="outlined" sx={{ borderRadius: 4 }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ px: 2, pt: 2 }}
            >
              {getDifficult(deck.statistics?.difficulty)}
              <IconButton onClick={handleClick}>
                <MoreVert fontSize="small" />
              </IconButton>
              <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={() => setAnchorEl(null)}>
                <MenuItem
                  onClick={() => {
                    handleInfo(deck)
                    handleMenu()
                  }}
                >
                  {menuOptions.DETAIL}
                </MenuItem>
                <MenuItem onClick={() => handleMenu(menuOptions.STUDY)}>
                  {menuOptions.STUDY}
                </MenuItem>
                <MenuItem onClick={() => handleMenu(menuOptions.EDIT)}>{menuOptions.EDIT}</MenuItem>
              </Menu>
            </Stack>
            <CardContent sx={{ py: 0 }}>
              <Typography variant="h6" style={oneLineTitle} sx={{ mb: 0 }}>
                {deck.name}
              </Typography>
              <div style={boxStyle}>
                <Style sx={{ color: 'secondary.light' }} fontSize="small" />
                <Typography variant="body2">Cartas: {deck.statistics?.cardsCount}</Typography>
                <RunningWithErrors sx={{ color: 'primary.main' }} fontSize="small" />
                <Typography variant="body2">Vencidas: {deck.statistics?.totalDue}</Typography>
              </div>
              <LinearProgress
                sx={{ height: '1rem', borderRadius: '4px', my: 1 }}
                color="primary"
                variant="determinate"
                value={(deck.statistics?.totalDue / deck.statistics?.cardsCount) * 100}
              />
              <div style={boxStyle}>
                <EventRepeat sx={{ color: 'warning.main' }} fontSize="small" />
                <Typography variant="body2">
                  Ultima revision:{' '}
                  {deck.statistics?.lastReview
                    ? dayjs(deck.statistics?.lastReview).format('DD-MM-YY')
                    : '-- -- --'}
                </Typography>
              </div>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button
                variant="text"
                size="small"
                color="primary"
                sx={{ width: '90%' }}
                onClick={() => handlePractice(deck)}
                startIcon={<AutoStories />}
              >
                Estudiar
              </Button>
            </CardActions>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  )
}
