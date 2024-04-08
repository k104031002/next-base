import { useState } from 'react'

const initialProducts = [
  {
    id: 0,
    name: '小熊餅乾',
    count: 1,
  },
  {
    id: 1,
    name: '巧克力豆餅乾',
    count: 5,
  },
  {
    id: 2,
    name: '小老板海苔',
    count: 2,
  },
]

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts)

  // // 純函式，單純處理狀態變化的函式(reducer)
  // const increase = (products, id) => {
  //   return products.map((v, i) => {
  //     // 如果符合條件(id===傳入id)，則修改其中屬性count+1
  //     if (v.id === id) return { ...v, count: v.count + 1 }
  //     // 否則回傳原本物件
  //     else return v
  //   })
  // }
  // //狀態處理變動的第三步
  // const handleIncrease = (id) => {
  //   setProducts(increase(products, id))
  // }

  const handleIncrease = (id) => {
    const nextProducts = products.map((v, i) => {
      // 如果符合條件(id===傳入id)，則修改其中屬性count+1
      if (v.id === id) return { ...v, count: v.count + 1 }
      else return v
    })

    setProducts(nextProducts)
  }
  const handleDecrease = (id) => {
    const nextProducts = products.map((v, i) => {
      // 如果符合條件(id===傳入id)，則修改其中屬性count-1
      if (v.id === id) return { ...v, count: v.count - 1 }
      else return v
    })

    setProducts(nextProducts)
  }

  const handleRemove = (id) => {
    // 1 2
    const nextProducts = products.filter((v, i) => {
      return v.id !== id
    })
    setProducts(nextProducts)
  }

  // react 官網解法(挑戰題4-2)
  // https://react.dev/learn/updating-arrays-in-state#remove-an-item-from-the-shopping-cart
  const handleDecreaseOfficial = (productId) => {
    // 遞減一樣會減
    let nextProducts = products.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count - 1,
        }
      } else {
        return product
      }
    })

    // 要設定到狀態前，先過濾掉只留下數量大於0的
    nextProducts = nextProducts.filter((p) => p.count > 0)
    // 3
    setProducts(nextProducts)
  }
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              handleIncrease(product.id)
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              handleDecreaseOfficial(product.id)
              // // 如果下一個即將變動的數量是0 ===>作移除
              // const nextCount = product.count - 1
              // if (nextCount <= 0) {
              //   // 作移除
              //   handleRemove(product.id)
              // } else {
              //   // 否則減少數量
              //   handleDecrease(product.id)
              // }
            }}
          >
            –
          </button>
        </li>
      ))}
    </ul>
  )
}
