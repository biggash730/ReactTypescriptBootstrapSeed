import React from 'react'
import './navbar.scss'
import { User } from '../auth/auth.models'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import { Menu, MenuItem, Icon } from '@material-ui/core'
import clsx from 'clsx'

export interface NavbarProps {
  currentUser: User | null
  authenticated: boolean
  open: boolean
  toggleDrawer(): any
}

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(1),
    },
    title: {
      flexGrow: 1,
    },
    appBar: {
      width: '100%',
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
  })
)

const Navbar: React.FC<NavbarProps> = ({ currentUser, authenticated, open, toggleDrawer }) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar position="fixed" color="transparent" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          edge="start"
          className={classes.menuButton}>
          <Icon className="fas fa-bars" />
        </IconButton>
        <img
          src={require('../../assets/images/login.png')}
          alt="Login Logo"
          height="60"
          width="60"
          className={classes.menuButton}
        />
        <Typography variant="h6" className={classes.title}>
          Clinic Master
        </Typography>

        {authenticated && (
          <>
            <Button
              color="inherit"
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}>
              {currentUser && currentUser.name}
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}>
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar

{
  /* <nav className="navbar navbar-expand-lg navbar-dark navbar-color">
      <NavLink className="navbar-brand" to={RouteNames.dashboard}>
        React App
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown">
            {authenticated && (
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                Welcome {currentUser && currentUser.name}
              </a>
            )}
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to="/" className="dropdown-item">
                Action
              </Link>
              <Link to="/" className="dropdown-item">
                Another action
              </Link>
              <div className="dropdown-divider"></div>
              <Link to="/" className="dropdown-item">
                Something else here
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav> */
}
