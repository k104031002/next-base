import { useState } from 'react'
// 範例資料，會自動轉換為js的資料類型
import data from '@/data/books.json'

import BookItem from './book-item'

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
          {books.map((book) => {
            const { isbn, title, author, fav } = book
            return (
              <BookItem
                key={isbn}
                isbn={isbn}
                title={title}
                author={author}
                fav={fav}
                handleToggleFav={handleToggleFav}
              />
            )
          })}
        </tbody>
      </table>
    </>
  )
}
