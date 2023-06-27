import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { PathContext } from '../context/PathContext';

const NoPage = () => {
    const context = useContext(PathContext)
    const xyz = useLocation()
    const { path, setPath } = context;
    console.log(path)
  return (
    <div>
      No Page Found
    </div>
  )
}

export default NoPage
