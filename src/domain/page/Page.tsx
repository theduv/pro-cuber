import { memo, PropsWithChildren } from 'react'

type PageProps = PropsWithChildren

const PageBase = ({ children }: PageProps) => {
  return <main className="h-full w-full p-12">{children}</main>
}

export const Page = memo(PageBase)
