import { useState, useEffect } from 'react'

export default function ChildB(props) {
  //  子女B 元件內部私有的狀態
  const [cData, setCData] = useState('child-b data')
  // setState有副作用，要在事件處理函式中執行
  // 注意不可以在這裡直接呼叫父母元件傳遞的函式setDataFromChild，會有警告訊息
  // 錯誤寫法: props.setDataFromChild(cData)
  // //   方法2:利用Effect
  //   useEffect(() => {
  //     props.setDataFromChild(cData)
  //   }, [])

  return (
    <>
      <h3>ChildB(子女B)</h3>
      <button
        onClick={() => {
          //   方法1:利用事件處理函式執行
          props.setDataFromChild(cData)
        }}
      >
        送資料給父母
      </button>
    </>
  )
}
