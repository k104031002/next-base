import React from 'react'
import styles from './checkout.module.css'

export default function CartList({ items, increaseItem, decreaseItem }) {
  return (
    <>
      <ul className={styles['list']}>
        {items.map((v, i) => {
          return (
            <li key={v.id} className={styles['item']}>
              <div className={styles['w-400']}>{v.name}</div>
              <div>{v.price}</div>
              <div>
                <button
                  onClick={() => {
                    increaseItem(v.id)
                  }}
                >
                  +
                </button>
                <span>{v.qty}</span>
                <button
                  onClick={() => {
                    decreaseItem(v.id)
                  }}
                >
                  -
                </button>
              </div>
              <div>
                <button onClick={() => {}}>移除</button>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}
