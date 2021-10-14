import { Link } from 'react-router-dom';
import { AiOutlineSearch as SearchIcon } from 'react-icons/ai';
import {
  IoMdNotifications as BellIcon,
  IoMdArrowDropdown as ArrowIcon,
} from 'react-icons/io';
import SubMenu from '../components/SubMenu';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='nav'>
      <div className='nav__container'>
        <div className='nav__container__left'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
            alt='netflix logo'
            className='nav__container__left__logo'
          />
          <div className='nav__container__left__menu'>
            <Link to='/' className='nav__container__left__menu__link'>
              Homepage
            </Link>
            <Link to='/' className='nav__container__left__menu__link'>
              Series
            </Link>
            <Link to='/' className='nav__container__left__menu__link'>
              Movies
            </Link>
            <Link to='/' className='nav__container__left__menu__link'>
              New and popular
            </Link>
            <Link to='/' className='nav__container__left__menu__link'>
              My List
            </Link>
          </div>
        </div>

        <div className='nav__container__right'>
          <SearchIcon className='nav__container__right__icon' />
          <span className='nav__container__right__username'>KIDS</span>
          <BellIcon className='nav__container__right__icon' />
          <img
            src='https://images.pexels.com/photos/3030332/pexels-photo-3030332.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            alt='logo'
            className='nav__container__right__avatar'
          />

          <div
            className='nav__container__right__submenu'
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <ArrowIcon className='nav__container__right__submenu__icon' />
            {isOpen && <SubMenu />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
