import { memo, PropsWithChildren } from 'react'
import { Navbar } from './navbar/Navbar'

type LayoutProps = PropsWithChildren

const LayoutBase = ({ children }: LayoutProps) => {
  return (
    <div className="w-full h-full flex flex-col bg-gray-900 text-gray-200">
      <Navbar />

      <div className="p-12">{children}</div>
    </div>
  )
}

export const Layout = memo(LayoutBase)
