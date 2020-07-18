import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import './App.css'
import Navbar from './components/core/navbar'
import SideNav from './components/core/sidenav'
import MainContent from './components/core/mainContent'
import { RouteNames } from './contants'
import './helpers/interceptor'
import { AppState } from './redux/store'
import { connect } from 'react-redux'
import { User } from './components/auth/auth.models'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import clsx from 'clsx'

const menus = [
  {
    name: 'Dashboard',
    route: RouteNames.dashboard,
    icon: 'fas fa-home',
    notes: '',
    subMenuItem: [],
  },
  {
    name: 'Visit',
    route: '',
    icon: 'fas fa-hospital',
    notes: '',
    subMenuItem: [
      {
        name: 'New',
        route: RouteNames.patients,
        icon: 'far fa-plus-square',
        notes: '',
      },
      {
        name: 'Edit',
        route: RouteNames.visits,
        icon: 'fas fa-edit',
        notes: '',
      },
    ],
  },
  {
    name: 'Lab',
    route: '',
    icon: 'fas fa-flask',
    notes: '',
    subMenuItem: [
      {
        name: 'New Lab Request',
        route: RouteNames.labRequest,
        icon: 'fas fa-plus-square',
        notes: '',
      },
      {
        name: 'New IPD Lab Request',
        route: RouteNames.labRequest,
        icon: 'fas fa-plus-square',
        notes: '',
      },
      {
        name: 'New Lab Result',
        route: RouteNames.labResult,
        icon: 'fas fa-plus-square',
        notes: '',
      },
      {
        name: 'New Pathology Request',
        route: RouteNames.labResult,
        icon: 'fas fa-plus-square',
        notes: '',
      },
      {
        name: 'New Pathology Report',
        route: RouteNames.labResult,
        icon: 'fas fa-plus-square',
        notes: '',
      },
      {
        name: 'New IPD Pathology Request',
        route: RouteNames.labResult,
        icon: 'fas fa-plus-square',
        notes: '',
      },
      {
        name: 'New IPD Pathology Report',
        route: RouteNames.labResult,
        icon: 'fas fa-plus-square',
        notes: '',
      },
      {
        name: 'Edit Lab Request',
        route: RouteNames.labRequest,
        icon: 'fas fa-edit',
        notes: '',
      },
      {
        name: 'Edit IPD Lab Request',
        route: RouteNames.labRequest,
        icon: 'fas fa-edit',
        notes: '',
      },
      {
        name: 'Edit Lab Result',
        route: RouteNames.labResult,
        icon: 'fas fa-edit',
        notes: '',
      },
      {
        name: 'Edit Pathology Report',
        route: RouteNames.labResult,
        icon: 'fas fa-edit',
        notes: '',
      },
      {
        name: 'Edit IPD Pathology Report',
        route: RouteNames.labResult,
        icon: 'fas fa-edit',
        notes: '',
      },
    ],
  },
  {
    name: 'Radiology',
    route: '',
    icon: 'fas fa-radiation',
    notes: '',
    subMenuItem: [
      {
        name: 'Radiology Request',
        route: RouteNames.radiologyRequest,
        icon: 'fas fa-radiation-alt',
        notes: '',
      },
      {
        name: 'Radiology Result',
        route: RouteNames.radiologyResult,
        icon: 'far fa-file-alt',
        notes: '',
      },
    ],
  },
  {
    name: 'Appointment',
    route: '',
    icon: 'fas fa-calendar-check',
    notes: '',
    subMenuItem: [
      {
        name: 'New',
        route: RouteNames.appointmentForm,
        icon: 'fas fa-plus-square',
        notes: '',
      },
      {
        name: 'Edit',
        route: RouteNames.appointmentForm,
        icon: 'fas fa-edit',
        notes: '',
      },
    ],
  },
  {
    name: 'Search',
    route: RouteNames.search,
    icon: 'fas fa-search',
    notes: '',
    subMenuItem: [],
  },
  {
    name: 'Report',
    route: RouteNames.reports,
    icon: 'far fa-file-alt',
    notes: '',
    subMenuItem: [],
  },
]

interface AppProps {
  loggedIn: boolean
  user: User | null
}

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      height: '100%',
    },
    content: {
      flexGrow: 1,
      backgroundColor: '#f3f3f3',
      padding: theme.spacing(1),
      marginTop: '63px',
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: 0,
      marginBottom: 3,
      overflowX: 'auto',
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  })
)

const App: React.FC<AppProps> = ({ loggedIn, user }) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(true)

  const handleToggleDrawer = () => {
    setOpen(!open)
  }

  return (
    <div className={classes.root}>
      <Router>
        <CssBaseline />
        <Navbar
          authenticated={loggedIn}
          currentUser={user}
          open={open}
          toggleDrawer={handleToggleDrawer}
        />
        {loggedIn && <SideNav menus={menus} open={open} />}
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}>
          <MainContent />
        </main>
      </Router>
    </div>
  )
}

const mapPropsToState = (state: AppState) => ({
  loggedIn: state.auth.loggedIn,
  user: state.auth.user,
})

export default connect(mapPropsToState)(App)
