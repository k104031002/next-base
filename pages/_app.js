// 這裡加入的樣式會套用到所有頁面和元件中，global標記的樣式只能在這裡套用
// import '@/styles/globals.css'
// 3.最外(上)元件階層
import { ThemeContext } from '@/context/theme'
import { useState } from 'react'

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  // 共享狀態，可以是 'light' | 'dark'
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <ThemeContext.Provider
      // 使用value屬性提供資料給提供者階層以下的所有後代元件
      value={{ theme, toggleTheme }}
    >
      {getLayout(<Component {...pageProps} />)}
    </ThemeContext.Provider>
  )
}
