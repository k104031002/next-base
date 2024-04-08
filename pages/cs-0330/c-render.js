import { useState } from 'react'

export default function CRender() {
  const [total, setTotal] = useState(0)
  const [name, setName] = useState('nike')

  return (
    <>
      <h1>條件式渲染(conditional rendering)範例</h1>
      <hr />
      <h1>{total}</h1>
      <button
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setTotal(total - 1)
        }}
      >
        -1
      </button>
      <hr />
      {/* if表達式語法&&運算子，因為使用的是falsy判斷，並不精確，所以0和NaN一樣會呈現 */}
      {total && <p>1.現在total是{total}</p>}
      {/* 前面判斷式強制轉為布林 */}
      {Boolean(total) && <p>2.現在total是{total}</p>}
      {!!total && <p>3.現在total是{total}</p>}
      {/* 前面判斷式使用比較運算 */}
      {total !== 0 && <p>4.現在total是{total}</p>}
      {(total > 0 || total < 0) && <p>5.現在total是{total}</p>}
      {/* 不要用上面的語法，用三元運算子取代 */}
      {total ? <p>6.現在total是{total}</p> : ''}
    </>
  )
}
