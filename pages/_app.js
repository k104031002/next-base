// 這裡加入的樣式會套用到所有頁面和元件中，global標記的樣式只能在這裡套用
// import '@/styles/globals.css'
// 3.最外(上)元件階層
// import { ThemeContext } from '@/context/theme'
// import { useState } from 'react'
// import { ThemeProvider } from '@/hooks/use-theme'
// import { AuthProvider } from '@/hooks/use-auth'
import { CartProvider } from '@/hooks/use-cart'

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  // 共享狀態，可以是 'light' | 'dark'
  // const [theme, setTheme] = useState('light')

  // const toggleTheme = () => {
  //   setTheme(theme === 'light' ? 'dark' : 'light')
  // }
  return (
    <CartProvider>
      {getLayout(<Component {...pageProps} />)}
    </CartProvider>
  )
}
