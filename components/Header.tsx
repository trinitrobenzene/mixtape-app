import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className='p-4 bg-gray-300'>
            <Link href='/'>Mixtape</Link>
            &nbsp;
            <Link href='/songlist'>SongList</Link>
            &nbsp;
        </header>
    )
}

export default Header