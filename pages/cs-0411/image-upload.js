import React, { useState } from 'react'

export default function ImageUpload() {
  // 代表選中的檔案(null代表沒選中檔案，或取消檔案選擇)
  const [selectedFile, setSelectedFile] = useState(null)
  // 預覽圖片的網址(呼叫URL.createObjectURL得到的網址)
  const [previewURL, setPreviewURL] = useState('')

  const handleFileChange = (e) => {
    // 取得檔案
    const file = e.target.files[0]
    // console.log(file)

    if (file) {
      // 設定檔案
      setSelectedFile(file)
      // 設定預覽圖片的網址
      setPreviewURL(URL.createObjectURL(file))
    } else {
      setSelectedFile(null)
      // 設回預設值
      setPreviewURL('')
    }
  }

  const handleFileUpload = async () => {
    const formData = new FormData()
    // 這裡要對照伺服器中上傳的名稱(req.files.avatar)
    formData.append('avatar', selectedFile)
    // 傳送到伺服器
    const res = await fetch('http://localhost:5555/upload-avatar', {
      method: 'POST',
      body: formData,
    })
    const data = await res.json()
    console.log(data)
  }

  return (
    <>
      <h1>圖片上傳與預覽範例</h1>
      <input type="file" onChange={handleFileChange} />
      <hr />
      <button onClick={handleFileUpload}>上傳</button>
      {selectedFile && (
        <>
          <h3>檔案資訊</h3>
          <p>檔名(filename): {selectedFile.name}</p>
          <p>類型(type): {selectedFile.type}</p>
          <p>大小(size): {selectedFile.size}</p>
        </>
      )}
      <h2>預覽</h2>
      <img src={previewURL} alt=" " />
    </>
  )
}
