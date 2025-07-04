import { useNavigate } from 'react-router-dom'
import styles from './CommonHeader.module.scss'
import { useRecoilValue } from 'recoil'
import { isLoginState } from '@recoil/atoms/loginState'

function CommonHeader() {
    const navigate = useNavigate()
    const isLogin = useRecoilValue(isLoginState);
    // 북마크 페이지로 이동
    const moveToPage = (filter: string) => {
        if (filter === 'main') {
            navigate('/')
        } else if (filter === 'login') {
            navigate('/login')
        }
        else {
            navigate('/bookmark')
        }
    }
    return (
        <header className={styles.header}>
            <div className={styles.header__logoBox} onClick={() => moveToPage('main')}>
                <img src="/assets/images/image-logo.png" alt="" className={styles.header__logoBox__logo} />
                <span className={styles.header__logoBox__title}>PhotoSplash</span>
            </div>
            <div className={styles.header__profileBox}>
                {isLogin && (
                    <>
                        <button className={styles.header__profileBox__button}>사진제출</button>
                        <button className={styles.header__profileBox__button} onClick={() => moveToPage('bookmark')}>
                            북마크
                        </button>
                    </>
                )}
                {!isLogin && (
                    <>
                        <button className={styles.header__profileBox__button} onClick={() => moveToPage('login')}>
                            로그인
                        </button>
                    </>
                )}
            </div>
        </header>
    )
}

export default CommonHeader