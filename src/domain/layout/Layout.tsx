import { memo, PropsWithChildren } from 'react'

import { Navbar } from './navbar/Navbar'

import * as styles from './Layout.styles'

type LayoutProps = PropsWithChildren

const LayoutBase = ({ children }: LayoutProps) => {
  return (
    <div className={styles.mainContainer}>
      <Navbar />

      {children}
    </div>
  )
}

export const Layout = memo(LayoutBase)
