import { memo, useContext, useEffect, useRef } from 'react'
import { mean } from 'lodash'

import { TimerPageContext } from '../TimerPage.context'
import * as styles from './TimesTable.styles'

const getAvgForLast = (times: number[], last: number, index: number) => {
  if (index < last) return '-'

  return mean(times.slice(index - last, index)).toFixed(2)
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
        {timesList.map((single, index) => {
          return (
            <tr
              key={index}
              className={styles.tableRow}
              ref={index === timesList.length - 1 ? lastTimeRef : null}>
              <th className={styles.bodyCell}>{single}</th>

              <td className={styles.bodyCell}>
                {getAvgForLast(timesAsNumbers, 5, index)}
              </td>

              <td className={styles.bodyCell}>
                {getAvgForLast(timesAsNumbers, 12, index)}
              </td>

              <td className={styles.bodyCell}>
                {getAvgForLast(timesAsNumbers, 50, index)}
              </td>

              <td className={styles.bodyCell}>
                {getAvgForLast(timesAsNumbers, 100, index)}
              </td>
            </tr>
          )
        })}
      </tbody>
    </div>
  )
}

export const TimesTable = memo(TimesTableBase)
