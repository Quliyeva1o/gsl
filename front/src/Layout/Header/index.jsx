import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./index.module.scss"
import MenuIcon from '@mui/icons-material/Menu';
const Header = () => {
  return (
    <>
    <div className={styles.head}>
      <div className={`container d-flex justify-content-between ${styles.header}`}>
        <div className={styles.logodiv}><Link>tehsilmerkezi.az</Link></div>
        <div className='d-lg-flex d-md-none  d-sm-none d-none'>
          <Link ><span>Niyə biz?</span></Link>
          <Link to={'/news'}><span>Xəbərlər</span></Link>
          <Link ><span>Bilet Əldə et</span></Link>
          <Link ><span>İmtahan Nəticəsi</span></Link>
          <Link ><span>Bizimlə Əlaqə</span></Link>
        </div>
        <div className='d-lg-none d-sm-flex d-sm-flex d-flex '>
          <MenuIcon />
        </div>
      </div></div>
    </>
  )
}

export default Header
