import { memo, useCallback, useContext, useRef } from 'react'

import { Page } from '../../domain/page/Page'
import { TimerPageContext } from './TimerPage.context'

import * as styles from './TimerPage.styles'
import { TimeDisplay } from './components/TimeDisplay'
import { Pattern } from '../../components/pattern/Pattern'
import { scrambleCube } from '../../lib/methods/cube'
import { solvedCube } from '../../lib/data/samples'
import { TimesTable } from './components/TimesTable'
import { buttonRecipe } from '../../components/recipes/button.recipe'

const TimerPageBase = () => {
  const { currentScramble, onResetTimesList: onResetTimes } =
    useContext(TimerPageContext)
  const resetTimesButtonRef = useRef<HTMLButtonElement>(null)

  const onClickResetTimes = useCallback(() => {
    onResetTimes()
    resetTimesButtonRef.current?.blur()
  }, [onResetTimes])

  if (!currentScramble) {
    return <div>loading...</div>
  }

  return (
    <Page>
      <div className={styles.mainContainer}>
        <div className={styles.scrambleCard}>
          <div className={styles.scrambleContainer}>{currentScramble}</div>

          <Pattern cube={scrambleCube(solvedCube, currentScramble)} />
        </div>

        <div className={styles.tableArea}>
          <button
            onClick={onClickResetTimes}
            className={buttonRecipe()}
            ref={resetTimesButtonRef}>
            Reset times
          </button>

          <TimesTable />
        </div>

        <TimeDisplay />

        <div />
      </div>
    </Page>
  )
}

export const TimerPage = memo(TimerPageBase)
