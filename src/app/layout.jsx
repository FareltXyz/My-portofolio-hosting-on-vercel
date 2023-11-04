import { Poppins } from 'next/font/google'
import './globals.css'
import "aos/dist/aos.css";

const poppins = Poppins({ 
	subsets: ['latin'],
  weight: '500'
})
console.clear()
export const metadata = {
  title: 'Portofolio',
  description: 'Hi Guys my name is M. Farel W.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
