import { useEffect, useState } from 'react'
import Link from 'next/link'

const brandOptions = [
  {
    id: 1,
    name: 'Apple',
  },
  {
    id: 2,
    name: 'Google',
  },
  {
    id: 3,
    name: '小米',
  },
]

// 建議在開發時先註解出物件陣列的樣子:
// const sample = [
//   {
//     id: '1',
//     picture: 'https://via.placeholder.com/150',
//     stock: 5,
//     name: 'iPhone 12 Pro',
//     price: 25000,
//     tags: '蘋果,大螢幕',
//   },
// ]
export default function List() {
  // 注意1: 初始值至少要空陣列，因為資料是物件陣列，且初次render是使用初始值
  // 注意2: 應用執行過程中，需要保持狀態一定的資料類型

  // 條件用
  const [nameLike, setNameLike] = useState('')
  const [brandIds, setBrandIds] = useState([])
  const [priceGte, setPriceGte] = useState(5000)
  const [priceLte, setPricelte] = useState(100000)

  // 排序(前面為排序欄位，後面參數asc為從小到大，desc為從大到小排序)
  const [orderby, setOrderby] = useState({ sort: 'id', order: 'asc' })

  // 分頁用
  const [page, setPage] = useState(1)
  const [perpage, setPerpage] = useState(3)

  //  最後得到的資料
  const [total, setTotal] = useState(0)
  const [pageCount, setPageCount] = useState(0)
  const [products, setProducts] = useState([])

  const getProducts = async (params = {}) => {
    // 用URLSearchParams產生查詢字串
    const searchParams = new URLSearchParams(params)
    const url = `http://localhost:3005/api/my-products?${searchParams.toString()}`

    try {
      const res = await fetch(url)
      const data = await res.json()
      console.log(data)

      // 設定到狀態中 ===> 進入update階段，觸發重新渲染(re-render) ===> 顯示資料
      if (data.status === 'success') {
        setTotal(data.data.total)
        setPageCount(data.data.pageCount)
        setProducts(data.data.products)
      }
    } catch (e) {
      console.log(e)
    }
  }

  const handleSearch = () => {
    const params = {
      page,
      perpage,
      brand_ids: brandIds.join(','),
      name_like: nameLike,
      price_gte: priceGte,
      price_lte: priceLte,
      sort: orderby.sort,
      order: orderby.order,
    }

    getProducts(params)
  }

  // 樣式2: 元件初次渲染之後(after)執行一次，之後不會再執行
  // 近似於componentDidMount執行時間點
  useEffect(() => {
    getProducts()
  }, [])

  useEffect(() => {
    const params = {
      page,
      perpage,
      brand_ids: brandIds.join(','),
      name_like: nameLike,
      price_gte: priceGte,
      price_lte: priceLte,
      sort: orderby.sort,
      order: orderby.order,
    }

    getProducts(params)
  }, [page])

  return (
    <>
      <h1>商品列表頁</h1>
      <div className="my-3">
        <button
          onClick={() => {
            // min is 1 (不能小於1)
            const newPageNow = page - 1 > 1 ? page - 1 : 1
            setPage(newPageNow)
          }}
        >
          上一頁
        </button>
        <button
          onClick={() => {
            // max is pageCount (不能大於總頁數)
            const newPageNow = page + 1 < pageCount ? page + 1 : pageCount
            setPage(newPageNow)
          }}
        >
          下一頁
        </button>
        <span className="mx-2">
          目前頁面: {page} / 總頁數: {pageCount} / 總項目數: {total}
        </span>
      </div>
      <hr />
      關鍵字:{' '}
      <input
        type="text"
        value={nameLike}
        placeholder="輸入商品名稱"
        onChange={(e) => {
          setNameLike(e.target.value)
        }}
      />
      <label>
        每頁多少項目:
        <select
          value={perpage}
          onChange={(e) => {
            setPerpage(Number(e.target.value))
          }}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="12">12</option>
          <option value="20">20</option>
        </select>
      </label>{' '}
      <label>
        排序:
        <select
          value={`${orderby.sort},${orderby.order}`}
          onChange={(e) => {
            const selected = e.target.value
            setOrderby({
              sort: selected.split(',')[0],
              order: selected.split(',')[1],
            })
          }}
        >
          <option value="id,asc">預設排序(id由小至大)</option>
          <option value="id,desc">ID排序(id由大至小)</option>
          <option value="price,asc">價格排序(price由低至高)</option>
          <option value="price,desc">價格排序(price由高至低)</option>
        </select>
      </label>
      <div>
        品牌:
        {brandOptions.map((v) => {
          return (
            <label key={v.id} className="mx-1">
              <input
                type="checkbox"
                value={v.id}
                checked={brandIds.includes(v.id)}
                onChange={(e) => {
                  // 注意，要轉數字，為了保持數字陣列
                  const targetValue = Number(e.target.value)
                  if (brandIds.includes(targetValue)) {
                    setBrandIds(brandIds.filter((v2) => v2 !== targetValue))
                  } else {
                    setBrandIds([...brandIds, targetValue])
                  }
                }}
              />
              {v.name}({v.id})
            </label>
          )
        })}
      </div>
      <hr />
      <button
        onClick={() => {
          handleSearch()
        }}
      >
        搜尋
      </button>
      <hr />
      {products.map((v, i) => {
        return (
          <li key={v.id}>
            <Link href={`/cs-0413/product/${v.id}`}>
              {v.name}/{v.price}/({v.brand_id})
            </Link>
          </li>
        )
      })}
    </>
  )
}