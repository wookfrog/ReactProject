import { useMemo, useState } from 'react'
import { useRecoilValueLoadable } from 'recoil'
import { imageData } from '@/recoil/selectors/imageSelector'
import styles from './styles/index.module.scss'
import CommonHeader from '@/components/common/header/CommonHeader'
import CommonNav from '@/components/common/navigation/CommonNav'
import CommonFooter from '@/components/common/footer/CommonFooter'
import CommonSearchBar from '@/components/common/searchBar/CommonSearchBar'
import { CardDTO } from './types/card'
import Card from './components/Card'

function index() {
  const imgSelector = useRecoilValueLoadable(imageData)
  const [imgData, setImgData] = useState<CardDTO>()
  const [open, setOpen] = useState<boolean>(false) // 이미지 상세 다이얼로그 발생(관리) State

  const CARD_LIST = useMemo(() => {
    // imgSelector.state = hasValue or loading
    console.log(imgSelector)
    if (imgSelector !== null && imgSelector.state === 'hasValue') {
      const result = imgSelector.contents.results.map((card: CardDTO) => {
        return <Card data={card} key={card.id} handleDialog={setOpen} handleSetData={setImgData} />
      })
      return result
    } else {
      // return <Loading />
    }
  }, [imgSelector])

  return (
    <div className={styles.page}>
      <CommonHeader />
      <CommonNav />
      <div className={styles.page__contents}>
        <div className={styles.page__contents__introBox}>
          <div className={styles.wrapper}>
            <span className={styles.wrapper__title}>PhotoSplash</span>
            <span className={styles.wrapper__desc}>
              인터넷의 시각 자료 출처입니다. <br />
              모든 지역에 있는 크리에이터들의 지원을 받습니다.
            </span>
            {/* 검색창 UI 부분 */}
            <CommonSearchBar />
          </div>
        </div>
        <div className={styles.page__contents__imageBox}>{CARD_LIST}</div>
      </div>
      <CommonFooter/>
    </div>
  )
}

export default index