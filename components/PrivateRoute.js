
import React from 'react'
import { useRouter } from 'next/router'

const PrivateRoute = ({ children }) => {
  const router = useRouter()
  // Authentication logic here
  const isAuthenticated = false // Placeholder authentication check

  if (!isAuthenticated) {
    router.push('/login')
    return null
  }

  return children
}

export default PrivateRoute
