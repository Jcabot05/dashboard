import Alert, { type AlertColor } from '@mui/material/Alert'
import type { AlertProps } from '@mui/material/Alert'

export interface AlertConfig {
  description: string
  severity?: AlertColor
  variant?: AlertProps['variant']
}

export default function AlertUI({ description, severity = 'success', variant = 'outlined' }: AlertConfig) {
  return (
    <Alert severity={severity} variant={variant}>
      {description}
    </Alert>
  )
}