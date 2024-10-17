import { memo, PropsWithChildren } from 'react'

type PageProps = PropsWithChildren

const PageBase = ({ children }: PageProps) => {
  return <div className="h-full w-full">{children}</div>
}

export const Page = memo(PageBase)
