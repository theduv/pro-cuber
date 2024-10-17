import { memo } from 'react'
import { Link } from 'wouter'
import { routes } from '../../../router/router'

const NavbarBase = () => {
  return (
    <nav className="flex items-center justify-between w-full h-16 bg-gray-800">
      <div className="flex items-center justify-center h-full p-4">
        <Link href={routes.APP.ROOT}>ProCuber</Link>
      </div>
    </nav>
  )
}

export const Navbar = memo(NavbarBase)
