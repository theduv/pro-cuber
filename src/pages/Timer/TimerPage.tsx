import { memo, useContext } from 'react'

import { Page } from '../../domain/page/Page'
import { TimesTable } from './components/TimesTable'
import { TimerPageContext } from './TimerPage.context'

import * as styles from './TimerPage.styles'

const TimerPageBase = () => {
  const { time, isPressingStartingKey, isTimerRunning } =
    useContext(TimerPageContext)

  const shouldHighlightTime = isPressingStartingKey && !isTimerRunning

  return (
    <Page>
      <div className={styles.mainContainer}>
        <div />

        <p className={styles.timerContainer(shouldHighlightTime)}>
          {(time / 1000).toFixed(2)}
        </p>

        <TimesTable />

        <div />
      </div>
    </Page>
  )
}

export const TimerPage = memo(TimerPageBase)
