import { NavLink } from 'react-router-dom';
import { ModeToggle } from '../mode-toggle';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '../ui/navigation-menu';

const Header = () => {
  return (
    <header className='py-3 px-3 flex justify-between border font-bold	items-center text-sm md:text-base'>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className='p-3'>
            <NavLink
              to='/login'
              className={({ isActive }) => (isActive ? 'text-primary' : '')}
            >
              Login
            </NavLink>
          </NavigationMenuItem>
          <NavigationMenuItem className='p-3'>
            <NavLink
              to='/registration'
              className={({ isActive }) => (isActive ? 'text-primary' : '')}
            >
              Registration
            </NavLink>
          </NavigationMenuItem>
          <NavigationMenuItem className='p-3'>
            <NavLink
              to='/todos'
              className={({ isActive }) => (isActive ? 'text-primary' : '')}
            >
              Todos
            </NavLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <ModeToggle />
    </header>
  );
};

export default Header;
