import { useState } from 'react'
import Image from 'next/image'

// 範例資料
import data from '@/data/books.json'

// 實心圖
import bookmarkIconFill from '@/assets/bookmark-fill.svg'
// 空心圖
import bookmarkIcon from '@/assets/bookmark.svg'

export default function BookList() {
  // 在進入狀態前，要先擴充每個書籍物件的屬性，能代表是否有加入收藏
  // 多一個fav屬性(布林，預設為false)
  const initState = data.map((v, i) => {
    return { ...v, fav: false }
  })

  // 宣告狀態 因為需要加入收藏(畫面上需要改變)，所以導入的資料需要轉化為狀態
  const [books, setBooks] = useState(initState)

  const handleToggleFav = (isbn) => {
    const nextBooks = books.map((v, i) => {
      // 如果符合條件(isbn===傳入的isbn)，則反相其中屬性fav的值
      if (v.isbn === isbn) return { ...v, fav: !v.fav }
      // 否則回傳原本物件
      else return v
    })

    // 狀態修改通用第三步
    setBooks(nextBooks)
  }

  return (
    <>
      <h1>書籍清單</h1>
      <table>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>title</th>
            <th>author</th>
            <th>加入收藏</th>
          </tr>
        </thead>
        <tbody>
          {books.map((v, i) => {
            return (
              <tr key={v.isbn}>
                <td>{v.isbn}</td>
                <td>{v.title}</td>
                <td>{v.author}</td>
                <td>
                  {/* 以fav屬性(布林值) 來決定呈現的圖示 */}
                  <Image
                    onClick={() => {
                      handleToggleFav(v.isbn)
                    }}
                    src={v.fav ? bookmarkIconFill : bookmarkIcon}
                    alt=""
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

 
