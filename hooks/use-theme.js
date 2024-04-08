import { createContext, useState, useContext } from 'react'

// 1.建立與導出它
const ThemeContext = createContext(null)

// 2.建立一個context Provider元件
// 提供給最上層元件使用(_app.js)，要共享的狀態要寫在裡面
export function ThemeProvider({ children }) {
  // 共享狀態，可以是 'light' | 'dark'
  const [theme, setTheme] = useState('light')
  // 切換主題用的函式
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <ThemeContext.Provider
      // 使用value屬性提供資料給提供者階層以下的所有後代元件
      value={{ theme, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
// 3. 提供一個包裝好的useContext名稱
// 提供給消費者(consumer)們方便使用
export const useTheme = () => useContext(ThemeContext)
