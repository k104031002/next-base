// 2. 在任何子元件層級深度，使用useContext 勾子讀取它:
import { useContext } from 'react'
import { ThemeContext } from '@/context/theme'
import { useTheme } from '@/hooks/use-theme'
import list from '@/components/context-demo/list'

// css modules
import styles from './context-demo.module.css'

export default function List() {
  // 透過useContext來讀取提供者元件提供的資料
  // 這裡只需要取得theme，所以只解構theme
  // const { theme } = useContext(ThemeContext)
  const { theme } = useTheme()

  return (
    <>
      <h2>展示列表</h2>
      <p>目前佈景是:{theme === 'light' ? '明亮' : '暗黑'}</p>
      <ul className={theme === 'light' ? styles['light'] : styles['dark']}>
        <li>111</li>
        <li>222</li>
        <li>333</li>
      </ul>
    </>
  )
}
