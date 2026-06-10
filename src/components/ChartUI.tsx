import Typography from '@mui/material/Typography'
import { LineChart } from '@mui/x-charts/LineChart'
import { type OpenMeteoResponse } from '../types/DashboardTypes'

interface ChartUIProps {
  data?: OpenMeteoResponse | null
}

export default function ChartUI({ data }: ChartUIProps) {
  const labels = data?.hourly.time.slice(0, 7) ?? []
  const temperatures = data?.hourly.temperature_2m.slice(0, 7) ?? []
  const winds = data?.hourly.wind_speed_10m.slice(0, 7) ?? []

  return (
    <>
      <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
        Chart arrLabels vs arrValues1 & arrValues2
      </Typography>
      <LineChart
        xAxis={[{ scaleType: 'point', data: labels }]}
        series={[
          { data: temperatures, label: 'Temperature (2m)' },
          { data: winds, label: 'Wind Speed (10m)' },
        ]}
        height={320}
      />
    </>
  )
}