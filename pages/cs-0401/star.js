import { useState } from 'react'
// 導入.module.css檔案
import styles from '@/styles/star.module.css'

export default function Star() {
  //  點按時的評分，一開始是0芬代表沒有評分
  const [rating, setRating] = useState(0)

  // 滑鼠游標懸停(hover)時使用
  const [hoverRating, setHoverRating] = useState(0)

  return (
    <>
      <h1>星星評分範例</h1>
      <div>
        {/* 這裡使用簡易建立5個陣列1...N的語法，可以參考:
        https://github.com/orgs/mfee-react/discussions/50
       */}
        {Array(5)
          .fill(1)
          .map((v, i) => {
            {
              /* 每個按鈕的分數，相當於索引+1 */
            }
            const score = i + 1
            return (
              <button
                key={i}
                className={styles['star-btn']}
                // 點按後設定分數
                onClick={() => {
                  setRating(score)
                }}
                onMouseEnter={() => {
                  setHoverRating(score)
                }}
                onMouseLeave={() => {
                  setHoverRating(0)
                }}
              >
                <span
                  className={
                    score <= rating || score <= hoverRating
                      ? styles['on']
                      : styles['off']
                  }
                >
                  &#9733;
                </span>
              </button>
            )
          })}
      </div>
    </>
  )
}
