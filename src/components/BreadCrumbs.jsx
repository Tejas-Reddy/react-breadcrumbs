import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function BreadCrumbs() {

    const {pathname} = useLocation();
    const pathNames = pathname.split('/').filter((i) => i)
    let breadcrumbPath = ''

  return (
    <div className="breadcrumbs-main-con">
        <Link className='prod-link' to='/'>Home</Link>

        {pathNames.map((name, i) => {
            breadcrumbPath += `/${name}`;
            const isLastIndex = i === pathNames.length - 1

            return isLastIndex ? <span key={breadcrumbPath}>/ {name} </span> : (
                <Link key={breadcrumbPath} to={breadcrumbPath} className='prod-link'>
                    <span>/ {name} </span>
                </Link>
            )
        })}
    </div>
  )
}
