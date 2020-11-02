import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Chip from "@material-ui/core/Chip";
import {
  Button,
  Icon,
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import "date-fns";
import Box from "@material-ui/core/Box";
import DateFnsUtils from "@date-io/date-fns";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import { CardContent, CardHeader } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
const useStyles = makeStyles((theme) =>
  createStyles({
    formControl: {
      minWidth: 170,
      padding: "0 !important",
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

const defaultProps = {
  bgcolor: "#f7ebeb",
  borderColor: "#C7020F",
  display: "flex",
  justifyContent: "center",
  style: { marginBottom: 10, width: "inherit" },
};
const boxProp = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
};

export default function FilterForms() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Grid container justify="center" alignItems="center" direction="column">
        <h5>Deal Activity Since</h5>
        <Box border={1} {...defaultProps}>
          <Grid container justify="center" spacing={1}>
            <Grid item>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date"
                  //   value={selectedDate}
                  //   onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />{" "}
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardTimePicker
                  margin="normal"
                  id="time-picker"
                  label="Time"
                  // value={selectedDate}
                  // onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change time",
                  }}
                />
              </MuiPickersUtilsProvider>{" "}
            </Grid>
            <Grid item>
              <FormControlLabel
                control={<Checkbox />}
                label="Use this filter."
              />
            </Grid>
          </Grid>
        </Box>{" "}
        <h5>Assorted Filters</h5>
        <Box border={1} {...defaultProps}>
          <Grid container justify="center" spacing={1}>
            <Grid item>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Start Date"
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item>
              <div style={{ marginTop: 25 }}>
                <label>And</label>
                {/* <Chip label="And" size="small" variant="outlined" /> */}
              </div>
            </Grid>
            <Grid item>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="End Date"
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item>
              <FormControlLabel
                control={<Checkbox />}
                label="Use this filter."
              />
            </Grid>
          </Grid>
        </Box>
        <Box border={1} {...defaultProps}>
          <Grid container justify="center" spacing={2} xs={12}>
            <Grid
              container
              direction="column"
              justify="space-around"
              alignItems="center"
              xs={6}
            >
              <Grid item>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">Status</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                  ></Select>
                </FormControl>
              </Grid>
              <Grid item>
                <h4>OR</h4>
              </Grid>
              <Grid item>
                <h6>Status Types</h6>
                <RadioGroup className="mb-16" name="gender" col>
                  <FormControlLabel
                    value="Male"
                    control={<Radio color="secondary" />}
                    label="Active Opportunity"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="Female"
                    control={<Radio color="secondary" />}
                    label="Inactive Opportunity"
                    labelPlacement="end"
                  />
                </RadioGroup>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="Stock name" />
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">Buyer</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    onChange={handleChange}
                  ></Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">salvor</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    onChange={handleChange}
                  ></Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">
                    Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>

                <FormControlLabel
                  control={<Checkbox name="checkedB" color="primary" />}
                  label="Approved"
                />

                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">
                    Approved By
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                <TextField id="standard-basic" label="Stock #" />
                <TextField id="standard-basic" label="SR #" />
              </form>
            </Grid>
          </Grid>
        </Box>
        <h5>By Deal #</h5>
        <Box border={1} {...defaultProps}>
          <Grid container justify="center" xs={12}>
            <Grid item xs={6}>
              <div style={{ marginLeft: 50 }}>
                <TextField id="standard-basic" label="Standard" />
              </div>
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={<Checkbox />}
                label="Use this filter."
              />
            </Grid>
          </Grid>
        </Box>
        {/* <Card className={classes.root} variant="outlined" style={{ padding: 2 }}>
        <h6>Deal Activity Since</h6>

        <Grid container justify="space-around">
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date"
              //   value={selectedDate}
              //   onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
            <KeyboardTimePicker
              margin="normal"
              id="time-picker"
              label="Time"
              // value={selectedDate}
              // onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change time",
              }}
            />
          </MuiPickersUtilsProvider>
          <FormControlLabel control={<Checkbox />} label="Use this filter." />
        </Grid>
      </Card>
      <Chip label="OR" color="primary"></Chip>
      <Divider variant="middle" />
      <Card className={classes.root} variant="outlined" style={{ padding: 3 }}>
        <h6>Associated Filters</h6>

        <Grid container justify="space-around">
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Start Date"
              //   value={selectedDate}
              //   onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
            <div style={{ marginTop: 20 }}>
              <Chip label="And" size="small" variant="outlined" />
            </div>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="End Date"
              //   value={selectedDate}
              //   onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
          <FormControlLabel control={<Checkbox />} label="Use this filter." />
        </Grid>
        <Card className={classes.root} variant="outlined">
          <Grid
            container
            justify="center"
            alignItems="center"
            direction="column"
          >
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                //   value={age}
                //   onChange={handleChange}
              ></Select>
            </FormControl>
            <Chip label="OR" size="small" variant="outlined" />
          </Grid>
          <Grid container justify="space-around" >
            <Card
              className={classes.root}
              variant="outlined"
              style={{ padding: 15 }}
            >
              <h6>Status Types</h6>
              <RadioGroup
                className="mb-16"
                //   value={gender}
                name="gender"
                col
              >
                <FormControlLabel
                  value="Male"
                  control={<Radio color="secondary" />}
                  label="Active Opportunity"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="Female"
                  control={<Radio color="secondary" />}
                  label="Inactive Opportunity"
                  labelPlacement="end"
                />
              </RadioGroup>{" "}
            </Card>
          </Grid>
        </Card>
        <form className={classes.root} noValidate autoComplete="off">
          <Grid
            container
            justify="center"
            alignItems="center"
            direction="column"
          >
            <TextField id="standard-basic" label="Stock name" />
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Buyer</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={handleChange}
              ></Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">salvor</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={handleChange}
              ></Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>

            <FormControlLabel
              control={<Checkbox name="checkedB" color="primary" />}
              label="Approved"
            />

            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Approved By</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <TextField id="standard-basic" label="Stock #" />
            <TextField id="standard-basic" label="SR #" />
          </Grid>
        </form>
      </Card>
      <Chip label="OR" color="primary"></Chip>

      <Card className={classes.root} variant="outlined" style={{ padding: 3 }}>
        <h6>By Deal #</h6>
        <Grid container justify="space-around">
          <TextField id="standard-basic" label="Standard" />
          <FormControlLabel control={<Checkbox />} label="Use this filter." />
        </Grid>
      </Card> */}
      </Grid>
    </div>
  );
}
