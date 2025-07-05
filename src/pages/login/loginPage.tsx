import { useState, useEffect } from "react"
import { useRecoilState, useSetRecoilState } from "recoil"
import { isLoginState } from "@/recoil/atoms/loginState"
import { useNavigate } from "react-router-dom"
import styles from './loginPage.module.scss'

function loginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const setIsLogin = useSetRecoilState(isLoginState)
  const navigate = useNavigate()

  const handleLoing = (e: React.FormEvent) => {
    e.preventDefault()

    if (email === 'test@test.com' && password === '1234') {
      setIsLogin(true)
      localStorage.setItem('isLogin', 'true')
      navigate('/')
    } else {
      alert('이메일 또는 비밀번호가 일치하지 않습니다.')
    }
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>로그인</h2>
      <form action="" className={styles.form}>
        <input
          type="email"
          placeholder="이메일"
          className={styles.input}
          value={email}
          onChange={(e => {
            setEmail(e.target.value)
          })

          }


          required
        />
        <input
          type="password"
          placeholder="비밀번호"
          className={styles.input}
          value={password}
          onChange={(e => {
            setPassword(e.target.value)
          })}
          required
        />
        <button type="submit" className={styles.button}>로그인</button>
      </form>
    </div>
  )
}

export default loginPage