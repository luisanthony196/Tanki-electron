import { Box, Button, Paper, Stack } from '@mui/material'
import { useEffect, useState } from 'react'
import Navigation from './components/Navigation'
import View from './components/View'
import { navigation } from './constants/uiConstants'
import { Deck } from './models/Deck'
import Test from './components/Test'
import DeckDetails from './components/Shared/DeckDetails'

function App() {
  const [selectedTab, setSelectedTab] = useState(navigation.HOME)
  const [finishedLoading, setFinishedLoading] = useState(false)
  const [deckList, setDeckList] = useState([])
  const [selectedDeck, setSelectedDeck] = useState(null)
  const [filteredDecksList, setFilteredDecksList] = useState([])
  const [cardList, setCardList] = useState([])
  const [showDeckInfo, setShowDeckInfo] = useState(false)
  const [showPractice, setShowPractice] = useState(false)

  // const ipcHandle = async () => {
  //   const result = await window.electron.ipcRenderer.send('ping')
  //   // setMode('system')
  //   console.log(result)
  //   // console.log(window.versions.node())
  //   // const response = await window.versions.getDecks()
  //   // console.log(window.versions.dark())
  // }

  useEffect(() => {
    window.api // Aqui deberia de obtener todos los datos necesarios
      .getAllOwnDecks()
      .then((data) => {
        setDeckList(data.map((deck) => new Deck(deck, true))) // Aqui obtenemos la primera tanda de decks
        setFinishedLoading(true)
      })
      .catch((err) => console.error(`Error al pedir el servicio [getDecks] ${err}`))
  }, [])

  return (
    <Box sx={{ margin: 'auto', bgcolor: 'background.default' }}>
      {/* <button onClick={ipcHandle}>Go</button> */}
      {showPractice ? (
        <div>
          <p>Modo de estudio</p>
          <Test />
          <Button onClick={() => setShowPractice(false)}>Regresar</Button>
        </div>
      ) : (
        <>
          {finishedLoading ? (
            <Stack sx={{ height: 'calc(100vh - 56px)', overflow: 'hidden' }}>
              <View
                selectedTab={selectedTab}
                deckList={deckList}
                setCardList={setCardList}
                setShowCard={setShowPractice}
                setShowDeckInfo={setShowDeckInfo}
                filteredDecksList={filteredDecksList}
                setFilteredDecksList={setFilteredDecksList}
                setSelectedDeck={setSelectedDeck}
              />
              {showDeckInfo && (
                <DeckDetails
                  showDeckInfo={showDeckInfo}
                  setShowDeckInfo={setShowDeckInfo}
                  selectedDeck={selectedDeck}
                />
              )}
            </Stack>
          ) : (
            <p>Cargando...</p>
          )}
          <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} variant="outlined">
            <Navigation selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          </Paper>
        </>
      )}
    </Box>
  )
}

export default App
