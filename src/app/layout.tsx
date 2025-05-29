import React from 'react'
import '@/styles/globals.scss'
import type { Metadata } from 'next'
import Footer from '@/components/common/Footer'
import ClientAOSProvider from '@/components/common/ClientAOSProvider'
import { inter, poppins } from './fonts'

export const metadata: Metadata = {
  title: 'Madhu Sankar - Portfolio',
  description: 'Full Stack Developer passionate about creating innovative solutions and building amazing web experiences.',
  keywords: ['AI', 'Full-Stack', 'Developer', 'Machine Learning', 'Portfolio'],
  authors: [{ name: 'Madhu Sankar' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#00f2fe',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable}`}>
        <ClientAOSProvider />
        {children}
        <Footer />
      </body>
    </html>
  )
} 