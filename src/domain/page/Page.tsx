import { memo, PropsWithChildren } from 'react'

import * as styles from './Page.styles'

type PageProps = PropsWithChildren

const PageBase = ({ children }: PageProps) => {
  return <main className={styles.mainContainer}>{children}</main>
}

export const Page = memo(PageBase)
