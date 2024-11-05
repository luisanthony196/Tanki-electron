import { Box, Typography } from '@mui/material'

export const Title = ({ title, subtitle }) => {
  return (
    <Box sx={{ p: 2, m: 2, border: '1px solid gray' }}>
      <Typography variant="h3" sx={{ fontWeight: 'bolder', color: 'text.secondary' }}>
        .{title}
      </Typography>
      <Typography variant="subtitle1">{subtitle}</Typography>
    </Box>
  )
}
