import { useRef } from 'react'

export default function InputRefs() {
  // 1. 宣告一組ref給文字輸入框使用
  // 初始值對應的是getElementById沒獲得元素引用時，會得到null值
  //   執行後 inputRef 會是一個物件值 `{current:null}`
  const inputRef = useRef(null)

  return (
    <>
      <h2>Input使用Refs</h2>
      {/* 2. 在要使用ref的元素上加入ref屬性(注意ref並不屬於props) */}
      <input type="text" ref={inputRef}/>
      <button onClick={() => {
        alert(inputRef.current.value)
      }}>獲得值</button>
      <button onClick={() => {
        inputRef.current.focus()
      }}>聚焦(foucs)</button>
      <button onClick={() => {
        inputRef.current.blur()
      }}>失焦(blur)</button>
    </>
  )
}
