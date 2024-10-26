import { memo, useContext, useEffect, useRef } from 'react'
import { mean } from 'lodash'

import { TimerPageContext } from '../TimerPage.context'
import * as styles from './TimesTable.styles'

const getAvgForLast = (times: number[], last: number) => {
  if (times.length < last) return '-'

  return mean(times.slice(times.length - last, times.length)).toFixed(2)
}

const TimesTableBase = () => {
  const { timesList } = useContext(TimerPageContext)
  const lastTimeRef = useRef<HTMLTableRowElement>(null)

  const timesAsNumbers = timesList.map((time) => parseFloat(time))

  useEffect(() => {
    if (lastTimeRef.current) {
      lastTimeRef.current.scrollIntoView({
        block: 'end',
      })
    }
  }, [timesList])

  return (
    <div role="table" className={styles.mainContainer}>
      <thead className={styles.tableHead}>
        <tr className={styles.tableHead}>
          <th className={styles.headerCell}>Time</th>

          <th className={styles.headerCell}>Ao5</th>

          <th className={styles.headerCell}>Ao12</th>

          <th className={styles.headerCell}>Ao50</th>

          <th className={styles.headerCell}>Ao100</th>
        </tr>
      </thead>

      <tbody className={styles.tbody}>
        {timesList.map((data, index) => {
          return (
            <tr
              key={index}
              className={styles.tableRow}
              ref={index === timesList.length - 1 ? lastTimeRef : null}>
              <th className={styles.bodyCell}>{data}</th>

              <td className={styles.bodyCell}>
                {getAvgForLast(timesAsNumbers, 5)}
              </td>

              <td className={styles.bodyCell}>
                {getAvgForLast(timesAsNumbers, 12)}
              </td>

              <td className={styles.bodyCell}>
                {getAvgForLast(timesAsNumbers, 50)}
              </td>

              <td className={styles.bodyCell}>
                {getAvgForLast(timesAsNumbers, 100)}
              </td>
            </tr>
          )
        })}
      </tbody>
    </div>
  )
}

export const TimesTable = memo(TimesTableBase)
