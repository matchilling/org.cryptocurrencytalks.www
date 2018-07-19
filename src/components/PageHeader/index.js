import React from 'react'
import Link from 'gatsby-link'

import './index.scss'

const Header = () => (
  <header>
    <div className="row">
      <Link to="/" title="cryptocurrency talks">
        <h1 className="logo">cryptocurrencytalks.org</h1>
      </Link>
    </div>
  </header>
)

export default Header
