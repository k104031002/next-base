import React from 'react'
import products from '@/data/Product.json'
import styles from './checkout.module.css'

export default function ProductList({addItem}) {
  return (
    <>
      <ul className={styles['list']}>
        {products.map((v, i) => {
          return (
            <li key={v.id} className={styles['item']}>
              <div className={styles['w-400']}>{v.name}</div>
              <div>{v.price}</div>
              <div>
                <button
                  onClick={() => {
                    addItem(v)
                  }}
                >
                  加入購物車
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}
