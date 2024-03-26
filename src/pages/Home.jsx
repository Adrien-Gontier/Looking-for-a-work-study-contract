import React from 'react'
import TitleApp from '../components/home/TitleApp'
import NavBar from '../components/NavBar';

export default function Home() {
    const titleApp = TitleApp
    const navBar = NavBar;

    return <div className='home-page'>
        <div>{titleApp}</div>
        <div>{navBar}</div>
        </div>
}
