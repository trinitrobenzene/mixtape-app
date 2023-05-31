import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header style={{ background: 'silver', padding: '12px' }}>
            Header
            &nbsp;
            <Link href='/user'>User</Link>
            &nbsp;
            <Link href='/'>Home</Link>
        </header>
    )
}

export default Header