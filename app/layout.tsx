import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import './globals.css'
import NavBar from './components/nav/NavBar'
import Footer from './components/footer/Footer'
import CartProvider from '@/providers/CartProvider'
import { Toaster } from 'react-hot-toast'

const font = Noto_Sans_KR({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })

export const metadata: Metadata = {
  title: 'Hyein Huh Portfolio',
  description: 'Hyein Huh Portfolio',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={`${font.className} text-slate-700`}>
        <Toaster
          toastOptions={{
            style: {
              background: "rgb(64 64 64)",
              color: "#fff",
            },
          }}
        />
        <CartProvider>
          <div className='flex flex-col min-h-screen'>
            <NavBar />
            <main className='flex-grow'>{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  )
}
