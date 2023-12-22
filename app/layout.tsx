import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import NavBar from './components/nav/NavBar'
import Footer from './components/footer/Footer'
import CartProvider from '@/providers/CartProvider'
import { Toaster } from 'react-hot-toast'

const font = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: 'E-Shop',
  description: 'Ecommerce app',
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
