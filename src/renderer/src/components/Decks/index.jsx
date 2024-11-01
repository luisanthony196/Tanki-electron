import {
  Autocomplete,
  Box,
  FormControl,
  Grid2,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  ToggleButton,
  ToggleButtonGroup
} from '@mui/material'
import { useEffect, useState } from 'react'
import './index.css'
import { Title } from '../Shared/Title'
import DeckCard from './DeckCard'
import { filters, viewFilters } from '../../constants/uiConstants'
import { Bookmark, Download, Favorite, HighlightOff } from '@mui/icons-material'

function Decks({
  deckList,
  filteredDecksList,
  setFilteredDecksList,
  setSelectedDeck,
  setShowDeckInfo
}) {
  const [filter, setFilter] = useState(null)
  const [viewFilter, setViewFilter] = useState(viewFilters.ALL)

  const handleClick = (event, deck) => {
    setSelectedDeck(deck)
    console.log(deck)
    setShowDeckInfo(true)
  }

  const handleSelect = (event) => {
    setViewFilter(event.target.value)
  }

  const handleToggle = (event, newFilter) => {
    newFilter === filters.CLEA ? setFilter(null) : setFilter(newFilter)
  }

  useEffect(() => {
    if (!filter && viewFilter === viewFilters.ALL) {
      setFilteredDecksList(deckList)
      return
    }
    setFilteredDecksList(
      deckList.filter((deck) => {
        if (viewFilter === viewFilters.OWN && !deck.isModify) return false
        if (viewFilter === viewFilters.EXT && deck.isModify) return false
        if (viewFilter !== viewFilters.ALL && filter === null) return true
        if (filter === filters.FAVO && deck.isFavorite) return true
        if (filter === filters.MARK && deck.isMarkup) return true
        if (filter === filters.DOWN && deck.isDownload) return true
        return false
      })
    )
  }, [filter, viewFilter])

  return (
    <Box sx={{ width: '100%', overflowY: 'scroll', scrollbarWidth: 'none' }}>
      <Title title="flashcards" subtitle="Decks compartidos por la comunidad" />
      <Grid2 container spacing={2} sx={{ px: 4, alignItems: 'center', justifyContent: 'center' }}>
        <Grid2 size={{ xs: 12, sm: 'grow' }}>
          <Autocomplete
            freeSolo
            options={deckList.map((deck) => deck.name)}
            renderInput={(params) => <TextField {...params} label="Deck a buscar" />}
          />
        </Grid2>
        <Grid2 size={{ xs: 'auto', sm: 'auto' }}>
          <ToggleButtonGroup value={filter} exclusive onChange={handleToggle}>
            <ToggleButton value={filters.FAVO}>
              <Favorite />
            </ToggleButton>
            <ToggleButton value={filters.MARK}>
              <Bookmark />
            </ToggleButton>
            <ToggleButton disabled={viewFilter === viewFilters.OWN} value={filters.DOWN}>
              <Download />
            </ToggleButton>
            <ToggleButton value={filters.CLEA}>
              <HighlightOff />
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid2>
        <Grid2 size={{ xs: 'grow', sm: 4 }}>
          <FormControl fullWidth>
            <InputLabel>Mostrar</InputLabel>
            <Select label="Mostrar" value={viewFilter} onChange={handleSelect}>
              <MenuItem value={viewFilters.ALL}>{viewFilters.ALL}</MenuItem>
              <MenuItem value={viewFilters.OWN}>{viewFilters.OWN}</MenuItem>
              <MenuItem value={viewFilters.EXT}>{viewFilters.EXT}</MenuItem>
            </Select>
          </FormControl>
        </Grid2>
      </Grid2>
      <Grid2 container spacing={2} sx={{ px: 4, py: 2 }}>
        {filteredDecksList.map((deck) => (
          <Grid2 key={deck.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <DeckCard
              key={deck.id}
              title={deck.name}
              isFavorite={deck.isFavorite}
              isMarkup={deck.isMarkup}
              isOwn={deck.isModify}
              isDownload={deck.isDownload}
              subtitle={deck.resume || deck.description?.slice(0, 80)}
              handleClick={(event) => handleClick(event, deck)}
            />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  )
}

export default Decks
