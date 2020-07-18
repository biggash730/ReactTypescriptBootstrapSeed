import * as React from 'react'
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  makeStyles,
  Container,
  TextField,
  Grid,
  Avatar,
  createStyles,
  Theme,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core'
import { deepOrange } from '@material-ui/core/colors'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'

export interface AppointmentFormProps {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 500,
      marginTop: 25,
      marginBottom: 25,
    },
    formControl: {
      width: '100%',
    },
    cardActions: {
      justifyContent: 'center',
      marginBottom: 20,
    },
    spacing: {
      marginBottom: 25,
    },
    avatar: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  })
)

const AppointmentForm: React.SFC<AppointmentFormProps> = () => {
  const classes = useStyles()
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(new Date())
  const [age, setAge] = React.useState('')

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date)
  }

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string)
  }

  return (
    <div>
      <Container maxWidth="sm">
        <Card className={classes.root}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Find patient by patient number
            </Typography>

            <TextField label="Patient Number" className={classes.formControl} />
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Button color="primary" variant="contained">
              Search
            </Button>
          </CardActions>
        </Card>
      </Container>

      <Container maxWidth="md">
        <Card className={classes.spacing}>
          <CardContent>
            <Grid container>
              <Grid item sm={12} md={4} container spacing={2}>
                <Grid item>
                  <Avatar className={classes.avatar}>AC</Avatar>
                </Grid>
                <Grid item>
                  <Typography color="textSecondary">Ama Ama</Typography>
                  <Typography color="textSecondary">2000007</Typography>
                </Grid>
              </Grid>
              <Grid item sm={12} md={4}>
                Details 1
              </Grid>
              <Grid item sm={12} md={4}>
                Details 2
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Grid container spacing={3}>
              <Grid container item xs={12} spacing={3}>
                <Grid item sm={12} md={4}>
                  <FormControl className={classes.formControl} style={{ marginTop: '16px' }}>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      onChange={handleChange}>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item sm={12} md={4}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="MM/dd/yyyy"
                      margin="normal"
                      id="date-picker-inline"
                      label="Start Date"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </Grid>
                <Grid item sm={12} md={4}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="MM/dd/yyyy"
                      margin="normal"
                      id="date-picker-inline"
                      label="End Date"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </Grid>
              </Grid>

              <Grid container item xs={12} spacing={3}>
                <Grid item sm={12} md={4}>
                  <TextField label="Patient Number" className={classes.formControl} />
                </Grid>
                <Grid item sm={12} md={4}>
                  <TextField label="Patient Number" className={classes.formControl} />
                </Grid>
                <Grid item sm={12} md={4}>
                  <TextField label="Patient Number" className={classes.formControl} />
                </Grid>
              </Grid>

              <Grid container item xs={12} spacing={3}>
                <Grid item sm={12} md={4}>
                  <TextField label="Patient Number" className={classes.formControl} />
                </Grid>
                <Grid item sm={12} md={4}>
                  <TextField label="Patient Number" className={classes.formControl} />
                </Grid>
                <Grid item sm={12} md={4}>
                  <TextField label="Patient Number" className={classes.formControl} />
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </div>
  )
}

export default AppointmentForm
