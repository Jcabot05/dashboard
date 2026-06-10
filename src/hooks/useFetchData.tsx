import { useEffect, useState } from 'react'
import { type OpenMeteoResponse } from '../types/DashboardTypes'

const URL =
  'https://api.open-meteo.com/v1/forecast?latitude=-2.170998&longitude=-79.922359&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m&hourly=temperature_2m,wind_speed_10m&timezone=America%2FGuayaquil&temperature_unit=celsius&wind_speed_unit=kmh&precipitation_unit=mm'

export default function useFetchData(): OpenMeteoResponse | null {
  const [data, setData] = useState<OpenMeteoResponse | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL)
        const json = (await response.json()) as OpenMeteoResponse
        setData(json)
      } catch (error) {
        console.error('Error fetching Open-Meteo data:', error)
      }
    }

    fetchData()
  }, [])

  return data
}