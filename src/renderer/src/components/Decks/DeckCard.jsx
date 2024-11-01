import { Bookmark, Download, Favorite } from '@mui/icons-material'
import { Card, CardActionArea, CardContent, Stack, Typography } from '@mui/material'

const oneLineTitle = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
}

const twoLineText = {
  height: '3em',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
}

function DeckCard({ title, subtitle, isFavorite, isMarkup, isOwn, isDownload, handleClick }) {
  return (
    <Card
      variant="outlined"
      sx={{ borderRadius: 4, borderColor: isOwn ? 'success.main' : 'default' }}
      onClick={handleClick}
    >
      <CardActionArea>
        <CardContent>
          <Stack
            direction="row"
            spacing={1}
            sx={{ justifyContent: 'space-between', alignItems: 'center' }}
          >
            <Typography gutterBottom variant="h6" style={oneLineTitle}>
              {title}
            </Typography>
            {(isFavorite || isMarkup || isDownload) && (
              <Stack direction="row">
                {isFavorite && <Favorite fontSize="small" sx={{ color: 'error.main' }} />}
                {isMarkup && <Bookmark fontSize="small" sx={{ color: 'info.main' }} />}
                {isDownload && <Download fontSize="small" sx={{ color: 'white' }} />}
              </Stack>
            )}
          </Stack>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} style={twoLineText}>
            {subtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
export default DeckCard