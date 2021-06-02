import React, { FC } from 'react'
import { HeaderProps } from './Header.props'
import './Header.css';
import { Link } from 'react-router-dom';

export const Header: FC<HeaderProps> = ({currentRoute}) => {

  return (
    <div id="header" >
      <h1 id='titleHeader'>SUPDEFLIX</h1>
      <div id='containerNavigationHeader'>
        <Link className='linkHeader' to={currentRoute === 'movies' ? `/` : `/favorite/all`} >
          <h3 id='currentNavigationHeader'>{currentRoute === 'movies' ? 'movies' : 'favorites'}</h3>
        </Link>
        <Link className='linkHeader' to={currentRoute === 'movies' ? `/favorite/all` : `/`} >
        <h3 id='navigationHeader'>{currentRoute === 'movies' ? 'favorites' : 'movies'}</h3>
        </Link>
      </div>
    </div>
  )
}
