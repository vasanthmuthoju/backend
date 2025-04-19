import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="mb-2 mt-2  text-center text-sm text-gray-500">
  &copy; {new Date().getFullYear()} Created by <span className="font-medium text-blue-500">  <Link to="https://www.linkedin.com/in/vasanthmuthoju" target='_blank' className="text-sm text-blue-500 hover:underline ">Vasanth Muthoju</Link> </span> 
</div>
  )
}

export default Footer