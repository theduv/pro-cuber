import { memo, useContext } from 'react'

import { Page } from '../../domain/page/Page'
import { TimerPageContext } from './TimerPage.context'

import * as styles from './TimerPage.styles'
import { TimeDisplay } from './components/TimeDisplay'
import { Pattern } from '../../components/pattern/Pattern'
import { scrambleCube } from '../../lib/methods/cube'
import { solvedCube } from '../../lib/data/samples'

const TimerPageBase = () => {
  const { currentScramble } = useContext(TimerPageContext)

  const cube = solvedCube

  if (!currentScramble) {
    return <div>loading...</div>
  }

  return (
    <Page>
      <div className={styles.mainContainer}>
        <div>
          <div className={styles.scrambleContainer}>{currentScramble}</div>
        </div>
        <Pattern cube={scrambleCube(cube, currentScramble)} />

        <TimeDisplay />

        <div />
      </div>
    </Page>
  )
}

export const TimerPage = memo(TimerPageBase)
