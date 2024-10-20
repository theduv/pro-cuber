import { memo, useContext } from 'react'

import { Page } from '../../domain/page/Page'
import { TimerPageContext } from './TimerPage.context'

import * as styles from './TimerPage.styles'
import { TimeDisplay } from './components/TimeDisplay'
import { Cube } from '../../lib/types/cube'
import { Pattern } from '../../components/pattern/Pattern'
import { CubeMovementR } from '../../lib/methods/cube'

const TimerPageBase = () => {
  const { currentScramble } = useContext(TimerPageContext)

  const cube: Cube = {
    U: [
      ['W', 'W', 'W'],
      ['W', 'W', 'W'],
      ['W', 'W', 'W'],
    ],
    L: [
      ['O', 'O', 'O'],
      ['O', 'O', 'O'],
      ['O', 'O', 'O'],
    ],
    F: [
      ['G', 'G', 'G'],
      ['G', 'G', 'G'],
      ['G', 'G', 'G'],
    ],
    R: [
      ['R', 'R', 'R'],
      ['R', 'R', 'R'],
      ['R', 'R', 'R'],
    ],
    B: [
      ['B', 'B', 'B'],
      ['B', 'B', 'B'],
      ['B', 'B', 'B'],
    ],
    D: [
      ['Y', 'Y', 'Y'],
      ['Y', 'Y', 'Y'],
      ['Y', 'Y', 'Y'],
    ],
  }

  return (
    <Page>
      <div className={styles.mainContainer}>
        <div className={styles.scrambleContainer}>{currentScramble}</div>

        <TimeDisplay />

        <Pattern cube={cube} />
        <Pattern cube={CubeMovementR(cube)} />
        <div />
      </div>
    </Page>
  )
}

export const TimerPage = memo(TimerPageBase)
