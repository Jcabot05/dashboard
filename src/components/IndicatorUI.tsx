import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

interface IndicatorUIProps {
  title?: string
  description?: string
}

export default function IndicatorUI(props: IndicatorUIProps) {
  return (
    <Card variant="outlined" sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {props.description}
        </Typography>
        <Typography variant="h5" component="div" sx={{ fontWeight: 700 }}>
          {props.title}
        </Typography>
      </CardContent>
    </Card>
  )
}