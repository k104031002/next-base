import React from 'react'

export default function JsxMap() {
  //   要以ul-li渲染呈現以下陣列
  const aa = [1, 4, 9, 16]
  const ab = aa.map((value, index) => {
    return <li key={index}>{value}</li>
  })
  //   ab相當於
  // [<li key = {0}>1</li>
  // <li key = {1}>4</li>
  // <li key = {2}>9</li>
  // <li key = {3}>16</li>]

  return (
    <>
      <h1>Jsx語法: 陣列map範例</h1>
      <hr />
      <ul>
        {ab}
        {/* 實務上不需要在多一個ab,直接在jsx中寫map即可 */}
      </ul>
      <ul>
        {aa.map((v, i) => {
          return <li key={i}>{v}</li>
        })}
      </ul>
    </>
  )
}
