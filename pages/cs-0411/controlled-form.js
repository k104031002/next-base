import { useState, Fragment } from 'react'

export default function ControlledForm() {
  // input-text
  const [inputText, setInputText] = useState('')
  // input-date
  // 使用純文字yyyy-mm-dd字串
  const [inputDateText, setInputDateText] = useState('')

  // 給定一個時間日期(Date)物件，輸出yyyy-mm-dd字串
  // (date instanceof Date)是檢查是否為時間日期(Date)物件
  const dateToString = (date = null) =>
    date instanceof Date ? date.toISOString().split('T')[0] : ''

  // 給定一個yyyy-mm-dd字串，輸出時間日期(Date)物件
  const stringToDate = (str) => new Date(str)

  // 使用時間日期(Date)物件狀態
  const [inputDateObject, setInputDateObject] = useState(
    stringToDate('2024-01-01')
  )

  // textarea
  const [textareaText, setTextareaText] = useState('')
  // 顯示密碼的核取方塊用
  const [showPassword, setShowPassword] = useState(false)

  // radio button group
  const petOptions = ['狗', '貓', '倉鼠']
  // 記錄使用者選中的選項值
  const [pet, setPet] = useState('倉鼠')

  // checkbox group
  const [pets, setPets] = useState(['狗', '倉鼠'])

  const handlePetsChange = (e) => {
    const tV = e.target.value
    // 判斷是否有在pets陣列中
    if (pets.includes(tV)) {
      // 如果有 ===> 移出
      const nextPets = pets.filter((v) => v !== tV)
      setPets(nextPets)
    } else {
      // 否則 ===> 加入
      const nextPets = [...pets, tv]
      setPets(nextPets)
    }
  }
}

// checkbox
// const [checked, setChecked] = useState(false)

return (
  <>
    <h1>可控表單元件範例</h1>
    <section title="input-text">
      <h2>文字輸入框(input-text)</h2>
      <input
        type="text"
        // 1. value 屬性必需對應到某個 state(狀態)
        value={inputText}
        onChange={(e) => {
          // 2. 元件的事件處理函式必需可以更動到 value 屬性的對應 state(狀態)值
          setInputText(e.target.value)
        }}
      />
      <h2>密碼輸入框(input-password)</h2>
      <input
        type={showPassword ? 'text' : 'password'}
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value)
        }}
      />{' '}
      <input
        type="checkbox"
        checked={showPassword}
        onChange={(e) => {
          // 第1種寫法，使用事件物件
          //setShowPassword(e.target.checked)
          // 第2種寫法，布林值切換toggle
          setShowPassword(!showPassword)
        }}
      />
      顯示密碼
      <h2>日期輸入框(input-date)-純文字</h2>
      <input
        type="date"
        value={inputDateText}
        onChange={(e) => {
          setInputDateText(e.target.value)
        }}
      />
      <h2>日期輸入框(input-date)-Date物件</h2>
      <input
        type="date"
        value={inputDateObject}
        onChange={(e) => {
          setInputDateObject(new Date(e.target.value))
        }}
      />
    </section>
    <section title="textarea">
      <h2>文字輸入區域(textarea)</h2>
      {/*  textarea原本是用開頭與結尾標籤包住文字，但是在React中，要用value屬性來對應state */}
      <textarea
        value={textareaText}
        onChange={(e) => {
          setTextareaText(e.target.value)
        }}
      />
    </section>
    <section title="radio-button-group">
      <h2>選項按鈕群組(radio-button-group)</h2>
      {petOptions.map((v, i) => {
        return (
          <>
            <label key={i}>
              <input
                type="radio"
                checked={v === pet}
                value={v}
                onChange={(e) => {
                  // 第1種寫法，如果用value屬性時
                  setPet(e.target.value)
                  // 第2種寫法
                  // setPet(v)
                }}
              />
              {v}
            </label>
          </>
        )
      })}
    </section>
    <section title="checkbox-group">
      <h2>核取方塊群組(checkbox-group)</h2>
      {petOptions.map((v, i) => {
        return (
          <>
            <label key={i}>
              <input
                type="checkbox"
                checked={pets.includes(v)}
                value={v}
                onChange={(e) => {
                  // 判斷是否有在pets陣列中
                  if (pets.includes(e.target.value)) {
                    // 如果有 ===> 移出
                    const nextPets = pets.filter((v2) => v2 !== v)
                  }
                  // 否則 ===> 加入
                }}
              />
              {v}
            </label>
          </>
        )
      })}
    </section>
  </>
)
