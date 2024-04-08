import CartList from '@/components/checkout/cart-list'
import styles from '@/components/checkout/checkout.module.css'
import Navbar from '@/components/checkout/navbar'
import Link from 'next/link'

export default function Cart() {
  return (
    <>
      <div className={styles['container']}>
        <Navbar />
        <h3>購物車</h3>
        <Link href="/cs-0408/checkout/product">連至 商品列表</Link>
        <div className={styles['cart']}>
          <CartList />
        </div>
        <hr />
        <div>
          總數量:
          {/* {totalItems}  */}/ 總金額:
          {/* {totalPrice} */}
        </div>
      </div>
    </>
  )
}
