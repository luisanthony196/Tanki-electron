import { Bookmark, Download, Favorite } from '@mui/icons-material'
import { Button, Chip, Modal, Stack, Typography } from '@mui/material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  border: '1px solid gray',
  boxShadow: 24
}

function DeckDetails({ showDeckInfo, setShowDeckInfo, selectedDeck }) {
  const handleFavoriteButton = () => {
    console.log('favorite')
    // setSelectedDeck({ ...selectedDeck, isFavorite: !selectedDeck.isFavorite })
  }

  const handleMarkupButton = () => {
    console.log('markup')
    // setSelectedDeck({ ...selectedDeck, isMarkup: !selectedDeck.isMarkup })
  }

  const handleDownloadButton = () => {
    console.log('download')
    // setSelectedDeck({ ...selectedDeck, isDownload: !selectedDeck.isDownload })
  }

  return (
    <Modal open={showDeckInfo} onClose={() => setShowDeckInfo(!setShowDeckInfo)}>
      <Stack
        justifyContent="space-between"
        sx={{
          width: { xs: '90vw', sm: '70vw', md: '600px' },
          height: { xs: '80vh' },
          bgcolor: 'background.default',
          borderRadius: 3
        }}
        style={style}
      >
        <Stack
          spacing={2}
          className="scroll_enabled"
          sx={{ p: 3, width: '100%', overflowY: 'scroll' }}
        >
          <Typography variant="h5" sx={{ textAlign: 'center', px: { xs: '50px', sm: 0 } }}>
            {selectedDeck.name}
          </Typography>
          <Stack direction="row" spacing={1}>
            <Chip
              label="Favorito"
              onClick={handleFavoriteButton}
              variant={selectedDeck.isFavorite ? 'filled' : 'outlined'}
              color="error"
              icon={<Favorite />}
            />
            <Chip
              label="Marcar"
              onClick={handleMarkupButton}
              variant={selectedDeck.isMarkup ? 'filled' : 'outlined'}
              color="info"
              icon={<Bookmark />}
            />
            <Chip
              label="Descargar"
              onClick={handleDownloadButton}
              variant={selectedDeck.isDownload ? 'filled' : 'outlined'}
              color="success"
              icon={<Download />}
            />
          </Stack>
          <Stack spacing={1} sx={{ py: 1 }}>
            {selectedDeck.resume && (
              <Typography variant="body1" color="textSecondary" sx={{ fontStyle: 'italic' }}>
                {selectedDeck.resume}
              </Typography>
            )}
            <Typography variant="h6">Descripcion:</Typography>
            <Typography
              variant="body1"
              color={selectedDeck.description ? 'textPrimary' : 'textDisabled'}
            >
              {selectedDeck.description || 'No hay descripcion'}
            </Typography>
          </Stack>
        </Stack>
        <Stack sx={{ p: 2 }}>
          <Button variant="contained" onClick={() => setShowDeckInfo(false)}>
            Volver
          </Button>
        </Stack>
      </Stack>
    </Modal>
  )
}

export default DeckDetails
