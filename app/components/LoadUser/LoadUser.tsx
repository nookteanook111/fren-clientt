import { useLoadUserQuery } from '@/redux/features/api/apiSlice'

import React, { useEffect } from 'react'

import { useSession } from 'next-auth/react'
import socketIO from 'socket.io-client'

import Loader from '../Loader/Loader'

const ENDPOINT = process.env.NEXT_PUBLIC_SOCKET_SERVER_URI || ''
const socketId = socketIO(ENDPOINT, { transports: ['websocket'] })

const LoadUser: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoading } = useLoadUserQuery({})
  const { data: session } = useSession()

  useEffect(() => {
    socketId.on('connection', () => {})
  }, [])

  return (
    <div>
      {isLoading && session ? (
        <Loader />
      ) : (
        <div className="font-Poppins">{children}</div>
      )}
    </div>
  )
}

export default LoadUser
