import { memo, useCallback, useContext, useMemo, useRef } from 'react'

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

  const scrambledCube = useMemo(
    () =>
      currentScramble ? scrambleCube(solvedCube, currentScramble) : solvedCube,
    [currentScramble],
  )

  const onClickResetTimes = useCallback(() => {
    onResetTimes()
    resetTimesButtonRef.current?.blur()
  }, [onResetTimes])

  return (
    <Page>
      <div className={styles.mainContainer}>
        <div className={styles.tableArea}>
          <button
            onClick={onClickResetTimes}
            className={buttonRecipe()}
            ref={resetTimesButtonRef}>
            Reset times
          </button>

          <TimesTable />
        </div>

        <div className={styles.scrambleWithTime}>
          <p>{currentScramble ?? '...'}</p>

          <TimeDisplay />

          <div />
        </div>

        <div className={styles.scrambleCard}>
          <Pattern cube={scrambledCube} />
        </div>
      </div>
    </Page>
  )
}

export const TimerPage = memo(TimerPageBase)
