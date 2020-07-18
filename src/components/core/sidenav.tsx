import * as React from 'react'
import { NavLink } from 'react-router-dom'
import './sidenav.scss'
import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Theme,
  createStyles,
  Icon,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from '@material-ui/core'
import clsx from 'clsx'
import { MenuItem } from '../shared/models'

export interface SideNavProps {
  menus: MenuItem[]
  open: boolean
}

const drawerWidth = 300

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerOpen: {
      width: drawerWidth,
      top: 66,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'center',
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: 0,
      top: 66,
    },
    accordionSummary: {
      fontWeight: 'bold',
    },
    accordionDetails: {
      padding: 0,
    },
    list: {
      width: '100%',
      '& a': {
        textDecoration: 'none',
        color: 'rgba(0, 0, 0, 0.87)',
      },
    },
    icon: {
      fontSize: '1rem',
      minWidth: '56px',
    },
  })
)

const SideNav: React.FC<SideNavProps> = ({ menus, open }) => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState<number | false>(0)
  const handleChange = (panel: number) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <Drawer
      className={clsx(classes.drawer, {
        [classes.drawerClose]: !open,
      })}
      variant="permanent"
      anchor="left"
      open={open}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}>
      {/* <div className={classes.drawerHeader} /> */}
      <Divider />
      {menus.map((menu, mindex) => {
        if (menu.subMenuItem.length <= 0) {
          return (
            <div className={classes.list} key={mindex}>
              <NavLink to={menu.route}>
                <ListItem button key={menu.name}>
                  <ListItemIcon>
                    <Icon className={`${menu.icon} ${classes.icon}`} />
                  </ListItemIcon>
                  <ListItemText primary={menu.name} />
                </ListItem>
              </NavLink>
              <Divider />
            </div>
          )
        } else {
          return (
            <Accordion key={mindex} expanded={expanded === mindex} onChange={handleChange(mindex)}>
              <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                <Icon className={`${menu.icon} ${classes.icon}`} />{' '}
                <Typography className={classes.accordionSummary}>{menu.name}</Typography>
              </AccordionSummary>
              <Divider />
              <AccordionDetails className={classes.accordionDetails}>
                <List className={classes.list}>
                  {menu.subMenuItem.map((submenu, sindex) => (
                    <NavLink to={submenu.route} key={sindex}>
                      <ListItem button>
                        <ListItemIcon>
                          <Icon className={`${submenu.icon} ${classes.icon}`} />
                        </ListItemIcon>
                        <ListItemText primary={submenu.name} />
                      </ListItem>
                    </NavLink>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          )
        }
      })}
    </Drawer>
  )
}

export default SideNav

{
  /* <nav className="sidebar flex-shrink-0">
      <ul className="nav flex-column flex-nowrap">
        {menus.map((menu) => (
          <li className="nav-item" key={menu.label}>
            <NavLink className="nav-link p-3" to={menu.route} activeClassName="active">
              <i className={menu.icon}></i> {menu.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav> */
}
