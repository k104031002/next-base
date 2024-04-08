// 導入react函式庫中的useState勾子(hook),用於在函式型元件中使用狀態
import { useState } from 'react'

export default function Counter() {
  const [total, setTotal] = useState(0)
  return (
    <>
      <h1>React計數器</h1>
      <h1
        //   為了要避開jsx-ally警告
        role="presentation"
        // 加入事件監聽,onClick的值必須是一個函式
        onClick={() => {
          // 設定狀態變數的函式(新的值)
          setTotal(total + 1)
        }}
      >
        {total}
      </h1>
    </>
  )
}
