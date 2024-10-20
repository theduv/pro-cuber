import { memo, useContext, useMemo } from 'react'

import { TimerPageContext } from '../TimerPage.context'

import * as styles from './TimesTable.styles'
import { TimesTableDivider } from './TimesTableDivider'

//TODO: use a hook to get the data source
const getDataSource = () => {
  const timesFromLocalStorage = localStorage.getItem('times')
  const data = timesFromLocalStorage ? timesFromLocalStorage.split(';') : []

  return data.map((time, index) => ({
    key: index,
    single: (parseFloat(time) / 1000).toFixed(2),
  }))
}

const TimesTableBase = () => {
  const { isTimerRunning } = useContext(TimerPageContext)

  const dataSource = useMemo(
    () => getDataSource(),

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isTimerRunning],
  )

  return (
    <div className={styles.mainContainer}>
      <table>
        <thead className={styles.tableHead}>
          <tr className={styles.tableHead}>
            <th className={styles.headerCell}>Time</th>

            <th className={styles.headerCell}>Ao5</th>

            <th className={styles.headerCell}>Ao12</th>
          </tr>
        </thead>

        <tbody className={styles.tbody}>
          {dataSource.map((data) => (
            <tr key={data.key} className={styles.tableRow}>
              <th className={styles.bodyCell}>{data.single}</th>

              <TimesTableDivider />

              <td className={styles.bodyCell}>0.00</td>

              <TimesTableDivider />

              <td className={styles.bodyCell}>0.00</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export const TimesTable = memo(TimesTableBase)
