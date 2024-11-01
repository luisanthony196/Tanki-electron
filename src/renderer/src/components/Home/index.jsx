import { Box, Button, Stack, Typography } from '@mui/material'
import { Title } from '../Shared/Title'
import './index.css'
import { getCardsByDeck, getHomeData } from '../../services/mainService'
import { HorizontalDeckList } from './HomeCards'
import { useEffect, useState } from 'react'

function Home({ setCardList, setShowCard, setSelectedDeck, setShowDeckInfo }) {
  const [homeDecks, setHomeDecks] = useState([])
  console.log(homeDecks)

  useEffect(() => {
    getHomeData().then((data) => {
      setHomeDecks(data)
    })
  }, [])

  const handlePractice = (deck) => {
    getCardsByDeck(deck.id).then((cards) => {
      setCardList(cards)
      setShowCard(true)
    })
  }

  const handleInfo = (deck) => {
    setSelectedDeck(deck)
    setShowDeckInfo(true)
  }

  return (
    <Box sx={{ width: '100%', overflowY: 'scroll', scrollbarWidth: 'none' }}>
      <Title title="dashboard" subtitle="Hola, bienvenido de nuevo" />
      <Stack direction="row" sx={{ px: 4, pt: 2, justifyContent: 'space-between' }}>
        <Typography variant="h5" component="div">
          Favoritos
        </Typography>
        <Button variant="text">Ver todos</Button>
      </Stack>
      <HorizontalDeckList
        filterDeckList={homeDecks.filter((deck) => deck.isFavorite)}
        handleInfo={handleInfo}
        handlePractice={handlePractice}
      />
      <Stack direction="row" sx={{ px: 4, pt: 2, justifyContent: 'space-between' }}>
        <Typography variant="h5" component="div">
          Coleccion
        </Typography>
        <Button variant="text">Ver todos</Button>
      </Stack>
      <HorizontalDeckList
        filterDeckList={homeDecks.filter((deck) => deck.isMarkup)}
        handleInfo={handleInfo}
        handlePractice={handlePractice}
      />
    </Box>
  )
}

export default Home
