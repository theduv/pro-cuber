import { memo, PropsWithChildren } from 'react'

type PageProps = PropsWithChildren

const PageBase = ({ children }: PageProps) => {
  return <div className="h-full w-full p-12">{children}</div>
}

export const Page = memo(PageBase)
