//2. 在任何⼦元件層級深度，使⽤ useContext 勾⼦讀取它:
import { useContext } from 'react'
import { ThemeContext } from '@/context/theme'

import List from '@/components/context-demo/list'
import SwitchButton from '@/components/context-demo/switch-button'
import Link from 'next/link'

export default function Page1() {
  return (
    <>
      <h1>Page1</h1>
      <SwitchButton />
      <List />
      <hr />
      a元素: <a href="/cs-0408/context-demo/page2">連至Page2</a>
      (頁面重新刷新，狀態重置為初始值)
      <hr />
      Link元件: <Link href="/cs-0408/context-demo/page2">連至Page2</Link>
      (狀態會保持住)
    </>
  )
}
