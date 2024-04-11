import { useState } from 'react'

export default function ControlledForm() {
  // input-text
  const [inputText, setInputText] = useState('')
  // input-date
  const [inputDateText, setInputDateText] = useState('')

  const [inputDateObject, setInputDateObject] = useState(null)
  // 給定一個時間日期(Date)物件，輸出yyyy-mm-dd字串
  const convertDateToString = (date) => {
    return date.toISOString().split('T')[0]
  }

  // textarea
  const [textareaText, setTextareaText] = useState('')
  // 顯示密碼的核取方塊用
  const [showPassword, setShowPassword] = useState(false)

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
          value={inputDateObject ? convertDateToString(inputDateObject) : ''}
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
    </>
  )
}