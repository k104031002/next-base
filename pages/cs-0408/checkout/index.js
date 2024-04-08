import { useState } from 'react'
import ProductList from '@/components/checkout/product-list'
import CartList from '@/components/checkout/cart-list'
import styles from '@/components/checkout/checkout.module.css'
import { FaShoppingCart } from 'react-icons/fa'

export default function Checkout() {
  // 加到購物車的商品項目狀態
  const [items, setItems] = useState([])

  // 遞減
  const decreaseItem = (id) => {
    // 展開每個成員
    const nextItems = items.map((v, i) => {
      // 如果符合條件(id===傳入的id),則修改其中屬性qty-1
      if (v.id === id) return { ...v, qty: v.qty - 1 }
      //  否則返回原本值
      else return v
    })
    setItems(nextItems)
  }

  // 遞增
  const increaseItem = (id) => {
    // 展開每個成員
    const nextItems = items.map((v, i) => {
      // 如果符合條件(id===傳入的id),則修改其中屬性qty+1
      if (v.id === id) return { ...v, qty: v.qty + 1 }
      //  否則返回原本值
      else return v
    })
    setItems(nextItems)
  }

  // 加到購物車
  // item 是要加入的商品物件
  const addItem = (item) => {
    // 先判斷要加入的商品物件是否有在購物車中
    const foundIndex = items.findIndex((v, i) => {
      return v.id === item.id
    })

    // 如果有找到
    if(foundIndex > -1){
      // 遞增商品
      increaseItem(item.id)
    }else{
      // 否則作新增商品  擴充商品數量屬性qty  預設為1
      const newItem = { ...item, qty: 1 }
      const nextItems = [...items, newItem]

      setItems(nextItems)
    }
   
 
  }
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['navbar']}>
          <div className={styles['logo']}>網站Logo</div>
          <div className={styles['header']}>
            <h2>購物車範例</h2>
          </div>
          <div className={styles['badge']}>
            <div className={styles['button']}>
              <FaShoppingCart />
              <span className={styles['button__badge']}>4</span>
            </div>
          </div>
        </div>
        <h3>商品列表</h3>
        <div className={styles['product']}>
          <ProductList addItem={addItem} />
        </div>
        <h3>購物車</h3>
        <div className={styles['cart']}>
          <CartList items={items}
          increaseItem={increaseItem}
          decreaseItem={decreaseItem} />
        </div>
        <hr />
        <div>總數量: 123 / 總金額: 123000</div>
      </div>
    </>
  )
}
