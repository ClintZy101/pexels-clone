import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

export default function SinglePhoto() {
    const location = useLocation()
    const { id } =useParams()
    console.log(location.state, id)
  return (
    <div>SinglePhoto</div>
  )
}
