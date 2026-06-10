export interface OpenMeteoCurrentUnits {
  time: string
  interval: string
  temperature_2m: string
  relative_humidity_2m: string
  apparent_temperature: string
  wind_speed_10m: string
}

export interface OpenMeteoCurrent {
  time: string
  interval: number
  temperature_2m: number
  relative_humidity_2m: number
  apparent_temperature: number
  wind_speed_10m: number
}

export interface OpenMeteoHourlyUnits {
  time: string
  temperature_2m: string
  wind_speed_10m: string
}

export interface OpenMeteoHourly {
  time: string[]
  temperature_2m: number[]
  wind_speed_10m: number[]
}

export interface OpenMeteoResponse {
  latitude: number
  longitude: number
  elevation: number
  generationtime_ms: number
  utc_offset_seconds: number
  timezone: string
  timezone_abbreviation: string
  current_units: OpenMeteoCurrentUnits
  current: OpenMeteoCurrent
  hourly_units: OpenMeteoHourlyUnits
  hourly: OpenMeteoHourly
}