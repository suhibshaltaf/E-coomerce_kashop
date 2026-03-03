import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

export default function Category({category}) {
  return (
    <Card sx={{py:2 ,textAlign:'center' }} key={category.id}> 
    <CardContent>
      <Typography  component={'h3'}>{category.name}</Typography>
    </CardContent>
    </Card>
  )
}
