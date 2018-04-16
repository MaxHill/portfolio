import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div className="header" data-background="Max Hill">
      <h1 className="title">{siteTitle}</h1> 
      <div className="images">
        <img className="big" src="http://placehold.it/400x400" />
        <img className="small" src="http://placehold.it/200x200" />
      </div>
  </div>
)

export default Header
