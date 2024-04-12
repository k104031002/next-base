import { useState } from 'react'

export default function LoginForm() {
  // 使用物件狀態對應整個表單欄位
  //   使用的屬性名稱xxxx，即為表單欄位的名稱(name="xxxx")
  const [user, setUser] = useState({
    username: '',
    password: '',
  })

  // 顯示密碼的核取方塊用
  const [showPassword, setShowPassword] = useState(false)

  //   多欄位共用事件處理函式
  const handleFieldChange = (e) => {
    console.log(e.target.name, e.target.type, e.target.value)

    // ES6特性: computed property names(計算得出的屬性名稱)
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names
    //   [e.target.name]:e.target.value  >>> 在方括號裡給定一個表達式，計算出一個字串值可以動態設定屬性名稱
    setUser({ ...user, [e.target.name]: e.target.value })

    // if (e.target.name === 'username') {
    //   setUser({ ...user, username: e.target.value })
    // }

    // if(e.target.name === 'password'){
    //     setUser({ ...user, password: e.target.value })
    // }
  }

  // 表單送出
  const handleSubmit = (e) => {
    // 阻擋預設送出行為(送到目前網址+GET)
    e.preventDefault()

    // 整理要送到伺服器的資料
    // 檢查欄位
    // 送到伺服器(fetch)
  }
  return (
    <>
      <h1>會員登入表單範例</h1>
      <form onSubmit={handleSubmit}>
        <label>
          帳號:{' '}
          <input
            type="text"
            // 需要加上name屬性，才能對應到useState中的屬性
            name="username"
            // 共用事件處理函式
            onChange={handleFieldChange}
          />
        </label>
        <br />
        <label>
          密碼:{' '}
          <input
            type={showPassword ? 'text' : 'password'}
            // 需要加上name屬性，才能對應到useState中的屬性
            name="password"
            // 共用事件處理函式
            onChange={handleFieldChange}
          />
        </label>
        <input
          type="checkbox"
          checked={showPassword}
          onChange={(e) => {
            setShowPassword(e.target.checked)
          }}
        />
        顯示密碼
        <br />
        {/* 因為是在form中的button最好加上type="submit"，預設是這個。type=button的話，才是代表一般的按鈕。 */}
        <button type="submit">登入</button>
      </form>
    </>
  )
}
