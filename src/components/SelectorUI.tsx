import { useState } from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select, { type SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

function capitalizeCityName(city: string) {
  if (!city) {
    return ''
  }

  return city.charAt(0).toUpperCase() + city.slice(1)
}

export default function SelectorUI() {
  const [cityInput, setCityInput] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setCityInput(event.target.value)
  }

  const selectedCity = capitalizeCityName(cityInput)

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="city-select-label">Ciudad</InputLabel>
        <Select
          labelId="city-select-label"
          id="city-select"
          value={cityInput}
          label="Ciudad"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Seleccione una ciudad</em>
          </MenuItem>
          <MenuItem value="guayaquil">Guayaquil</MenuItem>
          <MenuItem value="quito">Quito</MenuItem>
          <MenuItem value="manta">Manta</MenuItem>
          <MenuItem value="cuenca">Cuenca</MenuItem>
        </Select>
      </FormControl>

      {cityInput && (
        <p>
          Información del clima en <strong>{selectedCity}</strong>
        </p>
      )}
    </>
  )
}