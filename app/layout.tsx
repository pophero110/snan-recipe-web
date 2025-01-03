import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Minimalist Recipes',
  description: 'A clean and simple mobile recipe web app with shopping list and cooking progress features',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900 min-h-screen`}>
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow">
            {children}
          </main>
          <footer className="text-center py-4 text-sm text-gray-500">
            © 2023 Minimalist Recipes. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  )
}

