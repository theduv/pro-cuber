import { Table } from 'antd'
import { memo, useContext, useMemo } from 'react'

import { TimerPageContext } from '../TimerPage.context'

const columns = [
  {
    title: 'Single',
    dataIndex: 'single',
  },
]

//TODO: use a hook to get the data source
const getDataSource = () => {
  const data = (localStorage.getItem('times') || '').split(';')

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
    //TODO: override this component with a custom one
    <Table
      className="w-full max-w-80 text-gray-200 h-full"
      dataSource={dataSource}>
      {columns.map((col) => (
        <Table.Column
          key={col.dataIndex}
          title={col.title}
          dataIndex={col.dataIndex}
          className="bg-gray-600 text-gray-200"
        />
      ))}
    </Table>
  )
}

export const TimesTable = memo(TimesTableBase)
