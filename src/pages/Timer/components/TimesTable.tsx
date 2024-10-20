import { memo, useContext } from 'react'

import { TimerPageContext } from '../TimerPage.context'

import * as styles from './TimesTable.styles'

const TimesTableBase = () => {
  const { timesList } = useContext(TimerPageContext)

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
          {timesList.map((data, key) => (
            <tr key={key} className={styles.tableRow}>
              <th className={styles.bodyCell}>{data}</th>

              <td className={styles.bodyCell}>0.00</td>

              <td className={styles.bodyCell}>0.00</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export const TimesTable = memo(TimesTableBase)
