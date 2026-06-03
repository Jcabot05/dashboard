import './App.css'
import Grid from '@mui/material/Unstable_Grid2'
import HeaderUI from './components/HeaderUI'
import AlertUI from './components/AlertUI'

function App() {
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
      <Grid xs={12} md={3}>Elemento: Selector</Grid>

      {/* Indicadores */}
      <Grid xs={12} md={9}>Elemento: Indicadores</Grid>

      {/* Gráfico */}
      <Grid xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>Elemento: Gráfico</Grid>

      {/* Tabla */}
      <Grid xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>Elemento: Tabla</Grid>

      {/* Información adicional */}
      <Grid xs={12} md={12}>Elemento: Información adicional</Grid>

    </Grid>
  )
}

export default App
