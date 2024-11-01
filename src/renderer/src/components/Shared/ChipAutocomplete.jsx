import { Autocomplete, TextField } from '@mui/material'

function ChipAutocomplete({ values, handleFilter }) {
  return (
    <Autocomplete
      multiple
      options={values}
      getOptionLabel={(option) => option}
      filterSelectedOptions
      onChange={handleFilter}
      renderInput={(params) => <TextField {...params} label="Seleccionar" placeholder="Opciones" />}
    />
  )
}

export default ChipAutocomplete
