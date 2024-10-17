import { Table } from 'antd'
import { memo } from 'react'

const columns = [
  {
    title: 'Single',
    dataIndex: 'single',
  },
  {
    title: 'Avg5',
    dataIndex: 'avg5',
  },
  {
    title: 'Avg12',
    dataIndex: 'avg12',
  },
  {
    title: 'Avg50',
    dataIndex: 'avg50',
  },
  {
    title: 'Avg100',
    dataIndex: 'avg100',
  },
]

const TimesTableBase = () => {
  return (
    <Table className="w-full max-w-80 text-gray-200">
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
