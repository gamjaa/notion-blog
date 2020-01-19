import Link from 'next/link'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import GitHub from '../components/svgs/github'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <h1>감자의 블로그</h1>
      <h2>
        <ExtLink
          href="https://github.com/ijjk/notion-blog"
          className="dotted"
          style={{ color: 'inherit' }}
          >
          notion-blog
        </ExtLink>
        를 테스트 해봅니다.
      </h2>

      <div className="explanation">
        <p>
          ZEIT 무료 플랜의 월 트래픽은 20GB
        </p>
      </div>
    </div>
  </>
)
