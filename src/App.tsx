import './App.css'
import Grid from '@mui/material/Unstable_Grid2'
import HeaderUI from './components/HeaderUI'
import AlertUI from './components/AlertUI'
import SelectorUI from './components/SelectorUI'
import IndicatorUI from './components/IndicatorUI'
import ChartUI from './components/ChartUI'
import TableUI from './components/TableUI'
import useFetchData from './hooks/useFetchData'

function App() {
  const dataFetcherOutput = useFetchData()

  return (
    <Grid container spacing={5} sx={{ justifyContent: 'center', alignItems: 'center', padding: 2 }}>

      {/* Encabezado */}
      <Grid xs={12} md={12}>
        <HeaderUI />
      </Grid>

      {/* Alertas */}
      <Grid xs={12} md={12} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <AlertUI description="No se preveen lluvias" severity="success" variant="outlined" />
      </Grid>

      {/* Selector */}
      <Grid xs={12} md={3}>
        <SelectorUI />
      </Grid>

      {/* Indicadores */}
      <Grid xs={12} md={9} container spacing={2}>
        {dataFetcherOutput && (
          <>
            <Grid xs={12} sm={6}>
              <IndicatorUI
                title={`${dataFetcherOutput.current.temperature_2m} ${dataFetcherOutput.current_units.temperature_2m}`}
                description="Temperatura (2m)"
              />
            </Grid>
            <Grid xs={12} sm={6}>
              <IndicatorUI
                title={`${dataFetcherOutput.current.apparent_temperature} ${dataFetcherOutput.current_units.apparent_temperature}`}
                description="Temperatura aparente"
              />
            </Grid>
            <Grid xs={12} sm={6}>
              <IndicatorUI
                title={`${dataFetcherOutput.current.wind_speed_10m} ${dataFetcherOutput.current_units.wind_speed_10m}`}
                description="Velocidad del viento"
              />
            </Grid>
            <Grid xs={12} sm={6}>
              <IndicatorUI
                title={`${dataFetcherOutput.current.relative_humidity_2m} ${dataFetcherOutput.current_units.relative_humidity_2m}`}
                description="Humedad relativa"
              />
            </Grid>
          </>
        )}
      </Grid>

      {/* Gráfico */}
      <Grid xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
        <ChartUI data={dataFetcherOutput} />
      </Grid>

      {/* Tabla */}
      <Grid xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
        <TableUI data={dataFetcherOutput} />
      </Grid>

      {/* Información adicional */}
      <Grid xs={12} md={12}>Elemento: Información adicional</Grid>

    </Grid>
  )
}

export default App
