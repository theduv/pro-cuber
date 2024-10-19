import { memo } from 'react'
import { Link } from 'wouter'

import { routes } from '../../../router/router'

import * as styles from './Navbar.styles'

const NavbarBase = () => {
  return (
    <nav className={styles.mainContainer}>
      <Link href={routes.APP.ROOT} className={styles.homeTitle}>
        ProCuber
      </Link>
    </nav>
  )
}

export const Navbar = memo(NavbarBase)
