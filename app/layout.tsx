'use client'

import React, { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { SessionProvider } from 'next-auth/react'
import { Toaster } from 'react-hot-toast'
import { CustomProvider } from 'rsuite'
import 'rsuite/dist/rsuite-no-reset.min.css'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

import { Providers } from './Provider'
import LoadUser from './components/LoadUser/LoadUser'
import './globals.css'
import { ThemeProvider } from './utils/theme-provider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      delay: 300,
    })
    window.localStorage.setItem('theme', 'light')
  }, [])

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="font-Opun bg-bgmain text-black bg-no-repeat dark:bg-gradient-to-b dark:from-gray-900 dark:to-black duration-300">
        <CustomProvider>
          <Providers>
            <SessionProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
              >
                <LoadUser>
                  <div>{children}</div>
                </LoadUser>
                <Toaster position="top-center" reverseOrder={false} />
              </ThemeProvider>
            </SessionProvider>
          </Providers>
        </CustomProvider>
      </body>
    </html>
  )
}
