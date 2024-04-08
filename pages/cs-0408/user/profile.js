import React from 'react'
import { useAuth } from '@/hooks/use-auth'
import Link from 'next/link'

export default function Profile() {
  const { auth } = useAuth()

  return (
    <>
      <h1>會員個人資料頁</h1>
      <p>ID:{auth.userData.id}</p>
      <p>UserName:{auth.userData.username}</p>
      <p>Name:{auth.userData.name}</p>
      <hr /> 
      <Link href="/cs-0408/user/login">返回登入頁</Link>
    </>
  )
}
