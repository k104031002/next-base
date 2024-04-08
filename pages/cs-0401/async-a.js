import { useState } from 'react'

export default function AsyncA() {
  const [state1, setState1] = useState(0)
  const [state2, setState2] = useState(0)
  return (
    <>
      <h1>setState異步說明範例-A</h1>
      <hr />
      <p>state1 = {state1}</p>
      <p>state2 = {state2}(state2 = state1 * 2)</p>
      <button
        onClick={() => {
          // //   錯誤寫法
          // // state2並非使用更動完成後的state1來作運算，畫面並不一致變化
          //   setState1(state1 + 2)
          //   setState2(state1 * 2)
          // }}

          // 正確寫法
          // 先自行計算state1下個時間點變成什麼
          const nextState1 = state1 + 2
          setState1(nextState1)
          // 當需要下個時間點的state1時，一律使用
          setState2(nextState1 * 2)
        }}
      >
        state1 + 2(state2 需要連鎖同步改變)
      </button>
    </>
  )
}
