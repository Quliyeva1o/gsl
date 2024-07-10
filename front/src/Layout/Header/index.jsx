import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import styles from './index.module.scss';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      const contactSectionposition = contactSection.offsetTop - 100; 
      window.scrollTo({ top: contactSectionposition, behavior: 'smooth' });
    }
  };

  const scrollToExam = () => {
    const examSection = document.getElementById('exam-section');
    if (examSection) {
      const examSectionPosition = examSection.offsetTop - 100; 
      window.scrollTo({ top: examSectionPosition, behavior: 'smooth' });
    }
  };

  const drawer = (
    <div className={styles.drawer}>
      <List>
        {/* <ListItem button component={Link} to="/">
          <ListItemText primary="Niyə biz?" />
        </ListItem> */}
        <ListItem button component={Link} to="/news">
          <ListItemText primary="Xəbərlər" />
        </ListItem>
        <ListItem button  onClick={scrollToExam}>
          <ListItemText onClick={scrollToExam} primary="Imtahan Nəticəsinə Sürətli Bax" />
        </ListItem>
        <ListItem button component={Link} to={"https://netice.gsl.edu.az/"}>
          <ListItemText primary="İmtahan Nəticəsi" />
        </ListItem>
        <ListItem button onClick={scrollToContact}>
          <ListItemText onClick={scrollToContact} primary="Bizimlə Əlaqə" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <>
      <AppBar position="fixed" className={styles.head}>
        <Toolbar className={styles.header}>
          <div className={styles.logodiv}>
            <Link to="/">gsl.edu.az</Link>
          </div>
          <div className="d-lg-flex d-md-none d-sm-none d-none">
            {/* <Link><span>Niyə biz?</span></Link> */}
            <Link to="/news"><span>Xəbərlər</span></Link>
            <Link onClick={scrollToExam}><span>Imtahan Nəticəsinə Sürətli Bax</span></Link>
            <Link to={"https://netice.gsl.edu.az/"}><span>İmtahan Nəticəsi</span></Link>
            <Link onClick={scrollToContact}><span>Bizimlə Əlaqə</span></Link>
          </div>
          <IconButton edge="end" color="inherit" aria-label="menu" className="d-lg-none" onClick={handleDrawerToggle}>
            <MenuIcon  className={styles.menuicon}/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
