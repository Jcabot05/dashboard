import Box from '@mui/material/Box'
import { DataGrid, type GridColDef } from '@mui/x-data-grid'
import { type OpenMeteoResponse } from '../types/DashboardTypes'

interface TableUIProps {
  data?: OpenMeteoResponse | null
}

interface WeatherRow {
  id: number
  label: string
  value1: number | string
  value2: number | string
  resumen: string
}

function combineArrays(arrLabels: Array<string>, arrValues1: Array<number>, arrValues2: Array<number>) {
  return arrLabels.map((label, index) => ({
    id: index,
    label,
    value1: arrValues1[index],
    value2: arrValues2[index],
    resumen: `${label} ${arrValues1[index]} ${arrValues2[index]}`,
  }))
}

const columns: GridColDef<WeatherRow>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'label', headerName: 'Label', width: 180 },
  { field: 'value1', headerName: 'Temperature (2m)', width: 160 },
  { field: 'value2', headerName: 'Wind Speed (10m)', width: 160 },
  {
    field: 'resumen',
    headerName: 'Resumen',
    description: 'No es posible ordenar u ocultar esta columna.',
    sortable: false,
    hideable: false,
    width: 260,
  },
]

export default function TableUI({ data }: TableUIProps) {
  const rows = data ? combineArrays(
    data.hourly.time.slice(0, 7),
    data.hourly.temperature_2m.slice(0, 7),
    data.hourly.wind_speed_10m.slice(0, 7),
  ) : []

  return (
    <Box sx={{ height: 420, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSizeOptions={[7]} initialState={{ pagination: { paginationModel: { pageSize: 7, page: 0 } } }} />
    </Box>
  )
}