import Link from "next/link"
import { useRouter } from "next/router"
import { FunctionComponent, useEffect, useState } from "react"

const NavItem: FunctionComponent<{
  activeItem: string,
  setActiveItem: Function,
  name: string,
  route: string,
}> = ({ activeItem, name, route, setActiveItem }) => {
  return (
    <>
      {activeItem !== name ? (
        <Link href={route}>
          <a>
            <span onClick={() => setActiveItem(name)}
            className='transition-all duration-500 hover:text-green-600'
            >{name}</span>
          </a>
        </Link>
      ) : null}
    </>
  )
}

const NavBar = () => {
  const [activeItem, setActiveItem] = useState<string>('')

  const { pathname } = useRouter()

  useEffect(() => {
    if (pathname === '/') {
      setActiveItem('About')
    } else if (pathname === '/projects') setActiveItem('Projects')
    else if (pathname === '/resume') setActiveItem('Resume')
  }, [])

  return (
    <div className='flex justify-between px-5 py-3 my-3'>
      <span className='text-xl font-bold text-green-600 border-b-4 border-green-600'>{activeItem}</span>
      <div className='flex space-x-5 text-xl '>
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='About' route='/'/>
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Projects' route='/projects'/>
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Resume' route='/resume '/>
      </div>
    </div>
  )
}

export default NavBar
