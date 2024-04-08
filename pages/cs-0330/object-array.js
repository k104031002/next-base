import { useState } from 'react'

const objArray = [
  {
    id: 1,
    text: 'a',
  },
  {
    id: 2,
    text: 'b',
  },
  {
    id: 3,
    text: 'c',
  },
  {
    id: 4,
    text: 'aa',
  },
]

export default function ObjectArray() {
  // 呈現(渲染)時會與使用者互動時進行改動，必需是state
  const [data, setData] = useState(objArray)

  return (
    <>
      <h1>物件陣列的各種操作</h1>
      <hr />
      <h2>資料表格</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Text</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.text}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <hr />
      <h2>操作</h2>
      <p>
        <strong>
          注意: 請在任一操作前先重新整理網頁 ，或是對重覆id值進行加入時的限制。
        </strong>
        有些操作是key值會對應id的關係，會產生key值重覆問題，造成不預期的結果。實務上務必要考慮key不可以重覆問題。
      </p>

      <button
        onClick={() => {
          // 先寫出要新增的物件值
          const newObj = { id: 99, text: 'xxx' }

          // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
          // 2. 在新的變數值(陣列/物件)上作處理
          // 3. 設定回原本的狀態中

          //1 //2
          const newData = [newObj, ...data]

          //3
          setData(newData)
        }}
      >
        1. 列表最前面，新增一個物件值id為99與文字為xxx的物件
      </button>
      <br />
      <button
        onClick={() => {
          const newObj = { id: 88, text: 'yyy' }

          //1 //2
          const newData = [...data, newObj]

          //3
          setData(newData)
        }}
      >
        2. 列表最後面，新增一個物件值id為88與文字為yyy的物件
      </button>
      <br />
      <button
        onClick={() => {
          // 1. 使用函式庫uuid或nanoid
          // const newId = self.crypto.randomUUID()

          // 2. 使用時間日期物件轉毫秒整數值
          // 也可以寫作`+new Date()`或`Date.now()`
          // const newId = Number(new Date())

          // 3.使用隨機字串
          // const newId = (Math.random() + 1).toString(36).substring

          // 4. 模仿資料表主鍵遞增id(註: id一定要是數字)
          const ids = data.map((v) => v.id)
          // console.log(ids)
          // 找到最大數字+1，作為新的id。如果資料是空陣列則由1開始計算
          const newId = data.length > 0 ? Math.max(...ids) + 1 : 1

          // 先寫出要新增的物件值
          const newObj = { id: newId, text: 'xxx' }

          // 1 // 2 //3
          setData([newObj, ...data])
        }}
      >
        3. 列表最前面，新增一個文字為xxx的物件(id不能與其它資料重覆)
      </button>
      <br />
      <button
        onClick={() => {
          // 1. 使用函式庫uuid或nanoid
          // const newId = self.crypto.randomUUID()

          // 2. 使用時間日期物件轉毫秒整數值
          // 也可以寫作`+new Date()`或`Date.now()`
          // const newId = Number(new Date())

          // 3.使用隨機字串
          // const newId = (Math.random() + 1).toString(36).substring

          // 4. 模仿資料表主鍵遞增id(註: id一定要是數字)
          const ids = data.map((v) => v.id)
          // console.log(ids)
          // 找到最大數字+1，作為新的id。如果資料是空陣列則由1開始計算
          const newId = data.length > 0 ? Math.max(...ids) + 1 : 1

          // 先寫出要新增的物件值
          const newObj = { id: newId, text: 'yyy' }

          // 1 // 2 //3
          const nextData = [...data, newObj]
          setData(nextData)
        }}
      >
        4. 列表最後面，新增一個文字為yyy的物件(id不能與其它資料重覆)
      </button>
      <br />
      <button
        onClick={() => {
          // 1  2
          const nextData = data.filter((v, i) => {
            return v.text.includes('a')
          })

          // 3
          setData(nextData)
        }}
      >
        5. 尋找(過濾)只呈現所有文字中有包含a英文字母的資料
      </button>
      <br />
      <button
        onClick={() => {
          // 1  2
          //  刪除文字為b ===> 相當於產生一個新的物件陣列中，沒有文字為b的資料
          const nextData = data.filter((v, i) => {
            return v.text !== 'b'
          })

          // 3
          setData(nextData)
        }}
      >
        6. 刪除文字為b的物件資料
      </button>
      <br />
      <button
        onClick={() => {
          // 1  2
          //  刪除id為4 ===> 相當於產生一個新的物件陣列中，沒有id為4的資料
          const nextData = data.filter((v, i) => {
            return v.id !== 4
          })

          // 3
          setData(nextData)
        }}
      >
        7. 刪除id為4的物件資料
      </button>
      <br />
      <button
        onClick={() => {
          // // 尋找id=2的索引
          // const foundIndex = data.findIndex((v) => v.id === 2)

          // // 如果有找到
          // if (foundIndex > -1) {
          //   // 先寫出要新增的物件值
          //   const newObj = { id: 5, text: 'bbb' }

          //   // 從該索引值建立兩個新的子女陣列
          //   // 公式:array.slice(startIndex, endIndex)
          //   const aa = data.slice(0, foundIndex+1)
          //   const ab = data.slice(foundIndex + 1)
          //   // 合併新物件建立新的狀態陣列
          //   const nextData = [...aa, newObj, ...ab]
          //   // 3
          //   setData(nextData)
          // }

          //////////////////
          //  用for迴圈來完成

          // 新狀態
          const nextData = []

          for (let i = 0; i < data.length; i++) {
            nextData.push(data[i])
            // 如果id為2，在後面多插入一個新物件
            if (data[i].id === 2) {
              nextData.push({ id: 5, text: 'bbb' })
            }
          }
          // 判斷如果nextData比data成員多，代表有新的值
          if (nextData.length > data.length) {
            setData([...nextData])
          }
        }}
      >
        8. 在id為2後面插入id為5與文字為bbb的物件
      </button>
      <br />
      <button
        onClick={() => {
          // 1  2
          // 展開每個成員，如果符合條件(id===3)，則修改其中屬性text的值
          const nextData = data.map((v, i) => {
            if (v.id === 3) return { ...v, text: 'cccc' }
            // 否則回傳原本的值
            else return v
          })
          // ↑兩種寫法↓
          // 深拷貝語法
          // const nextData = JSON.parse(JSON.stringify(data))
          // const foundIndex = nextData.findIndex((v) => v.id === 3)
          // nextData[foundIndex].text = 'cccc'

          // 3
          setData(nextData)
        }}
      >
        9. 取代id為3的文字為cccc
      </button>
      <br />
      <button
        onClick={() => {
          setData([])
        }}
      >
        10. 清空表格
      </button>
    </>
  )
}
