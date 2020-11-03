import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
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
import DateFnsUtils from "@date-io/date-fns";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
const styles = (theme) => ({
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
});
const defaultProps = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  display: "flex",
  justifyContent: "center",
  style: { height: "12rem", marginBottom: 10 },
};
const boxProp = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  
};
// (theme) =>{
//   createStyles({
//     formControl: {
//       margin: theme.spacing(1),
//       minWidth: 120,
//     },
//     selectEmpty: {
//       marginTop: theme.spacing(2),
//     },
//   })
// }

class DealDetails extends React.Component {
  //   const classes = useStyles();
  constructor(props) {
    super(props);
    console.log("History",props.location.state);
    if(props.location.state){
      this.state = {
        deals: {
          deals: {...props.location.state },
        },
        data: {
          "Deal Number": 0,
          Status: [
            "submitted",
            "available",
            "bought",
            "made offer",
            "no interest",
          ],
          "Buyer Name": "John Doe",
          Vendor: ["Target"],
          Approver: ["Jack Doe"],
          "Vendor Source": ["Target.com"],
          "Source Reason": ["Excess Inventory"],
          Resolution: ["NA"],
          "Bid Information": {
            "Basis Type": ["MSRP"],
            "Purchase Unit": ["Pieces"],
            "Calculation Method": ["% of Basis", "Bid $ amount"],
            Currency: ["USD", "INR"],
          },
          "Deal Factors": {
            "Merch Condition": [
              "good",
              "near perfect",
              "open stock",
              "perfect",
              "seconds",
              "varying degrees",
            ],
            "Damage Type": ["None"],
            "Item Visibility": ["100%", "70%", "40%"],
            "Item Similarity": ["All long quality"],
            "Pricing Availability": ["Vendor provided API"],
            "Pricing Methods": [
              "Multiple Price Points",
              "Single Price Points",
              "% off",
            ],
            Tags: ["Strikethrough Barcode"],
            "Sticker Label": ["remove 100%"],
            "Seasonal %": ["25%", "50%"],
            "FOB Point": ["Tyler Tx"],
          },
          "Performance Proxy 1": {
            "Proxy Type": ["Comp Source"],
            Vendor: ["target", "source"],
            "Vendor Source": ["Target.com"],
            "Deal Name": ["TGT.com Oct 2019"],
            "Deal Proxy": ["NA"],
          },
          "Performance Proxy 2": {
            "Proxy Type": ["Comp Deal"],
            Vendor: ["target"],
            "Vendor Source": ["Target.com"],
            "Deal Name": ["TGT.com Sept 2019"],
            "Deal Proxy": ["NA"],
            "Deal Number": ["23456"],
          },
        },
        controls: {
          "Deal Number": { type: "text" },
          "Deal Name": { type: "text" },
          Status: { type: "select" },
          "Buyer Name": { type: "text" },
          Vendor: { type: "select" },
          Approver: { type: "select" },
          "Created Date": { type: "text" },
          "Bid Deadline": { type: "text" },
          "Vendor Source": { type: "select" },
          "Source Reason": { type: "select" },
          Resolution: { type: "select" },
          "Resolution Date": { type: "text" },
          "Bid Information": {
            "Basis Type": { type: "select" },
            "Bid %": { type: "text" },
            "Bid $": { type: "text" },
            "Transportation $": { type: "text" },
            Units: { type: "text" },
            AUR: { type: "text" },
            "Deposit Amount": { type: "text" },
            "Basis Amount $": { type: "text" },
            "Purchase Unit": { type: "select" },
            "Calculation Method": { type: "select" },
            Currency: { type: "select" },
          },
          "Deal Factors": {
            "Merch Condition": { type: "select" },
            "Damage Type": { type: "select" },
            "Item Visibility": { type: "select" },
            "Item Similarity": { type: "select" },
            "Pricing Availability": { type: "select" },
            "Pricing Methods": { type: "select" },
            Tags: { type: "select" },
            "Sticker Label": { type: "select" },
            "Seasonal %": { type: "select" },
            "FOB Point": { type: "text" },
          },
          "Performance Proxy 1": {
            "Proxy Type": { type: "select" },
            Vendor: { type: "select" },
            "Vendor Source": { type: "select" },
            "Deal Name": { type: "select" },
            "Deal Proxy": { type: "select" },
            "Avg Discount": { type: "text" },
            "Est ASP $": { type: "text" },
            "All in Shrink %": { type: "text" },
            "Vendor Shrink %": { type: "text" },
            "Internal Shrink %": { type: "text" },
            "Net ASP $": { type: "text" },
            "COGS/Unit": { type: "text" },
            "Est OPEX/Unit": { type: "text" },
            "Est GM $/Unit": { type: "text" },
          },
          "Performance Proxy 2": {
            "Proxy Type": { type: "select" },
            Vendor: { type: "select" },
            "Vendor Source": { type: "select" },
            "Deal Name": { type: "select" },
            "Deal Proxy": { type: "select" },
            "Avg Discount": { type: "text" },
            "Est ASP $": { type: "text" },
            "All in Shrink %": { type: "text" },
            "Vendor Shrink %": { type: "text" },
            "Internal Shrink %": { type: "text" },
            "Net ASP $": { type: "text" },
            "COGS/Unit": { type: "text" },
            "Est OPEX/Unit": { type: "text" },
            "Est GM $/Unit": { type: "text" },
          },
        },
      };
    }else{
      this.state = {
        deals: null,
        data: {
          "Deal Number": 0,
          Status: [
            "submitted",
            "available",
            "bought",
            "made offer",
            "no interest",
          ],
          "Buyer Name": "John Doe",
          Vendor: ["Target"],
          Approver: ["Jack Doe"],
          "Vendor Source": ["Target.com"],
          "Source Reason": ["Excess Inventory"],
          Resolution: ["NA"],
          "Bid Information": {
            "Basis Type": ["MSRP"],
            "Purchase Unit": ["Pieces"],
            "Calculation Method": ["% of Basis", "Bid $ amount"],
            Currency: ["USD", "INR"],
          },
          "Deal Factors": {
            "Merch Condition": [
              "good",
              "near perfect",
              "open stock",
              "perfect",
              "seconds",
              "varying degrees",
            ],
            "Damage Type": ["None"],
            "Item Visibility": ["100%", "70%", "40%"],
            "Item Similarity": ["All long quality"],
            "Pricing Availability": ["Vendor provided API"],
            "Pricing Methods": [
              "Multiple Price Points",
              "Single Price Points",
              "% off",
            ],
            Tags: ["Strikethrough Barcode"],
            "Sticker Label": ["remove 100%"],
            "Seasonal %": ["25%", "50%"],
            "FOB Point": ["Tyler Tx"],
          },
          "Performance Proxy 1": {
            "Proxy Type": ["Comp Source"],
            Vendor: ["target", "source"],
            "Vendor Source": ["Target.com"],
            "Deal Name": ["TGT.com Oct 2019"],
            "Deal Proxy": ["NA"],
          },
          "Performance Proxy 2": {
            "Proxy Type": ["Comp Deal"],
            Vendor: ["target"],
            "Vendor Source": ["Target.com"],
            "Deal Name": ["TGT.com Sept 2019"],
            "Deal Proxy": ["NA"],
            "Deal Number": ["23456"],
          },
        },
        controls: {
          "Deal Number": { type: "text" },
          "Deal Name": { type: "text" },
          Status: { type: "select" },
          "Buyer Name": { type: "text" },
          Vendor: { type: "select" },
          Approver: { type: "select" },
          "Created Date": { type: "text" },
          "Bid Deadline": { type: "text" },
          "Vendor Source": { type: "select" },
          "Source Reason": { type: "select" },
          Resolution: { type: "select" },
          "Resolution Date": { type: "text" },
          "Bid Information": {
            "Basis Type": { type: "select" },
            "Bid %": { type: "text" },
            "Bid $": { type: "text" },
            "Transportation $": { type: "text" },
            Units: { type: "text" },
            AUR: { type: "text" },
            "Deposit Amount": { type: "text" },
            "Basis Amount $": { type: "text" },
            "Purchase Unit": { type: "select" },
            "Calculation Method": { type: "select" },
            Currency: { type: "select" },
          },
          "Deal Factors": {
            "Merch Condition": { type: "select" },
            "Damage Type": { type: "select" },
            "Item Visibility": { type: "select" },
            "Item Similarity": { type: "select" },
            "Pricing Availability": { type: "select" },
            "Pricing Methods": { type: "select" },
            Tags: { type: "select" },
            "Sticker Label": { type: "select" },
            "Seasonal %": { type: "select" },
            "FOB Point": { type: "text" },
          },
          "Performance Proxy 1": {
            "Proxy Type": { type: "select" },
            Vendor: { type: "select" },
            "Vendor Source": { type: "select" },
            "Deal Name": { type: "select" },
            "Deal Proxy": { type: "select" },
            "Avg Discount": { type: "text" },
            "Est ASP $": { type: "text" },
            "All in Shrink %": { type: "text" },
            "Vendor Shrink %": { type: "text" },
            "Internal Shrink %": { type: "text" },
            "Net ASP $": { type: "text" },
            "COGS/Unit": { type: "text" },
            "Est OPEX/Unit": { type: "text" },
            "Est GM $/Unit": { type: "text" },
          },
          "Performance Proxy 2": {
            "Proxy Type": { type: "select" },
            Vendor: { type: "select" },
            "Vendor Source": { type: "select" },
            "Deal Name": { type: "select" },
            "Deal Proxy": { type: "select" },
            "Avg Discount": { type: "text" },
            "Est ASP $": { type: "text" },
            "All in Shrink %": { type: "text" },
            "Vendor Shrink %": { type: "text" },
            "Internal Shrink %": { type: "text" },
            "Net ASP $": { type: "text" },
            "COGS/Unit": { type: "text" },
            "Est OPEX/Unit": { type: "text" },
            "Est GM $/Unit": { type: "text" },
          },
        },
      };
    }
    
  }
  changeHandler = (event) => {
    let dealNumber = event.target.value;
    this.setState({
      ...this.state,
      data: { ...this.state.data, "Deal Number": dealNumber },
    });
    if (dealNumber === "123456") {
      axios
        .get("http://localhost:3001/getDeals/")
        .then((data) => {
          this.setState({ ...this.state, deals: { ...data["data"] } });
          console.log(data);
        })
        .catch((error) => {
          console.log("error");
        });
    }
  };
  handleChange = (event) => {
    console.log(event);
  };

  render() {
    const { classes } = this.props;
    let mainControls = Object.keys(this.state.controls);
    let bidInfoControls = Object.keys(this.state.controls["Bid Information"]);
    let dealFactorControls = Object.keys(this.state.controls["Deal Factors"]);
    let performanceControls_1 = Object.keys(
      this.state.controls["Performance Proxy 1"]
    );
    let performanceControls_2 = Object.keys(
      this.state.controls["Performance Proxy 2"]
    );

    let controls = mainControls.map((control, index) => {
      if (
        control !== "Performance Proxy 2" &&
        control !== "Performance Proxy 1" &&
        control !== "Deal Factors" &&
        control !== "Bid Information"
      ) {
        if (this.state.deals) {
          if (this.state.controls[control]["type"] === "text") {
            if (control === "Deal Number") {
              return (
                <TextField
                  id={control}
                  key={control + index}
                  label={control}
                  onChange={this.changeHandler}
                  value={this.state.data["Deal Number"]}
                  // style={{ margin: 5 }}
                />
              );
            } else {
              return (
                <TextField
                  id={control}
                  key={control + index}
                  label={control}
                  value={this.state.deals["deals"][control]}
                />
              );
            }
          } else {
            return (
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">{control}</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={this.state.deals["deals"][control][0]}
                  onChange={this.handleChange}
                >
                  {this.state.deals["deals"][control].map((item) => {
                    console.log(control, item);
                    console.log(item === this.state.deals["deals"][control][0]);
                    return <MenuItem value={item}>{item}</MenuItem>;
                  })}
                </Select>
              </FormControl>
            );
          }
        } else {
          if (this.state.controls[control]["type"] === "text") {
            if (control === "Deal Number") {
              return (
                <TextField
                  id={control}
                  key={control + index}
                  label={control}
                  onChange={this.changeHandler}
                  value={this.state.data["Deal Number"]}
                />
              );
            } else {
              return (
                <TextField
                  id={control}
                  key={control + index}
                  label={control}
                  value=""
                  onChange={this.changeHandler}
                />
              );
            }
          } else {
            return (
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">{control}</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value=""
                  onChange={this.changeHandler}
                >
                  {this.state.data[control].map((item) => {
                    // console.log(control, item);
                    // console.log(item === this.state.deals["deals"][control][0]);
                    return <MenuItem value={item}>{item}</MenuItem>;
                  })}
                </Select>
              </FormControl>
            );
          }
        }
      }
    });

    let bidControls = bidInfoControls.map((control, index) => {
      if (this.state.deals) {
        if (
          this.state.controls["Bid Information"][control]["type"] === "text"
        ) {
          return (
            <TextField
              id={control}
              key={control + index}
              label={control}
              value={this.state.deals["deals"]["Bid Information"][control]}
            />
          );
        } else {
          return (
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">{control}</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={this.state.deals["deals"]["Bid Information"][control][0]}
                onChange={this.handleChange}
              >
                {this.state.deals["deals"]["Bid Information"][control].map(
                  (item) => {
                    return <MenuItem value={item}>{item}</MenuItem>;
                  }
                )}
              </Select>
            </FormControl>
          );
        }
      } else {
        if (
          this.state.controls["Bid Information"][control]["type"] === "text"
        ) {
          return (
            <TextField
              id={control}
              key={control + index}
              label={control}
              value=""
              onChange={this.changeHandler}
            />
          );
        } else {
          return (
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">{control}</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value=""
                onChange={this.changeHandler}
              >
                {this.state.data["Bid Information"][control].map((item) => {
                  // console.log(control, item);
                  // console.log(item === this.state.deals["deals"][control][0]);
                  return <MenuItem value={item}>{item}</MenuItem>;
                })}
              </Select>
            </FormControl>
          );
        }
      }
    });
    let dealFactors = dealFactorControls.map((control, index) => {
      if (this.state.deals) {
        if (this.state.controls["Deal Factors"][control]["type"] === "text") {
          return (
            <TextField
              id={control}
              key={control + index}
              label={control}
              value={this.state.deals["deals"]["Deal Factors"][control]}
            />
          );
        } else {
          return (
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">{control}</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={this.state.deals["deals"]["Deal Factors"][control][0]}
                onChange={this.handleChange}
              >
                {this.state.deals["deals"]["Deal Factors"][control].map(
                  (item) => {
                    return <MenuItem value={item}>{item}</MenuItem>;
                  }
                )}
              </Select>
            </FormControl>
          );
        }
      } else {
        if (this.state.controls["Deal Factors"][control]["type"] === "text") {
          return (
            <TextField
              id={control}
              key={control + index}
              label={control}
              value=""
              onChange={this.changeHandler}
            />
          );
        } else {
          return (
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">{control}</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value=""
                onChange={this.changeHandler}
              >
                {this.state.data["Deal Factors"][control].map((item) => {
                  // console.log(control, item);
                  // console.log(item === this.state.deals["deals"][control][0]);
                  return <MenuItem value={item}>{item}</MenuItem>;
                })}
              </Select>
            </FormControl>
          );
        }
      }
    });
    let per_1 = performanceControls_1.map((control, index) => {
      if (this.state.deals) {
        if (
          this.state.controls["Performance Proxy 1"][control]["type"] === "text"
        ) {
          return (
            <TextField
              id={control}
              key={control + index}
              label={control}
              value={this.state.deals["deals"]["Performance Proxy 1"][control]}
            />
          );
        } else {
          return (
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">{control}</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={
                  this.state.deals["deals"]["Performance Proxy 1"][control][0]
                }
                onChange={this.handleChange}
              >
                {this.state.deals["deals"]["Performance Proxy 1"][control].map(
                  (item) => {
                    return <MenuItem value={item}>{item}</MenuItem>;
                  }
                )}
              </Select>
            </FormControl>
          );
        }
      } else {
        if (
          this.state.controls["Performance Proxy 1"][control]["type"] === "text"
        ) {
          return (
            <TextField
              id={control}
              key={control + index}
              label={control}
              value=""
              onChange={this.changeHandler}
            />
          );
        } else {
          return (
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">{control}</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value=""
                onChange={this.changeHandler}
              >
                {this.state.data["Performance Proxy 1"][control].map((item) => {
                  // console.log(control, item);
                  // console.log(item === this.state.deals["deals"][control][0]);
                  return <MenuItem value={item}>{item}</MenuItem>;
                })}
              </Select>
            </FormControl>
          );
        }
      }
      // if (
      //   this.state.controls["Performance Proxy 1"][control]["type"] === "text"
      // ) {
      //   return <TextField id={control} key={control + index} label={control} />;
      // } else {
      //   return (
      //     <FormControl className={classes.formControl}>
      //       <InputLabel id="demo-simple-select-label">{control}</InputLabel>
      //       <Select
      //         labelId="demo-simple-select-label"
      //         id="demo-simple-select"
      //       ></Select>
      //     </FormControl>
      //   );
      // }
    });
    let per_2 = performanceControls_2.map((control, index) => {
      if (this.state.deals) {
        if (
          this.state.controls["Performance Proxy 2"][control]["type"] === "text"
        ) {
          return (
            <TextField
              id={control}
              key={control + index}
              label={control}
              value={this.state.deals["deals"]["Performance Proxy 2"][control]}
            />
          );
        } else {
          return (
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">{control}</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={
                  this.state.deals["deals"]["Performance Proxy 2"][control][0]
                }
                onChange={this.handleChange}
              >
                {this.state.deals["deals"]["Performance Proxy 2"][control].map(
                  (item) => {
                    return <MenuItem value={item}>{item}</MenuItem>;
                  }
                )}
              </Select>
            </FormControl>
          );
        }
      } else {
        if (
          this.state.controls["Performance Proxy 2"][control]["type"] === "text"
        ) {
          return (
            <TextField
              id={control}
              key={control + index}
              label={control}
              value=""
              onChange={this.changeHandler}
            />
          );
        } else {
          return (
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">{control}</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value=""
                onChange={this.changeHandler}
              >
                {this.state.data["Performance Proxy 2"][control].map((item) => {
                  // console.log(control, item);
                  // console.log(item === this.state.deals["deals"][control][0]);
                  return <MenuItem value={item}>{item}</MenuItem>;
                })}
              </Select>
            </FormControl>
          );
        }
      }
      // if (
      //   this.state.controls["Performance Proxy 2"][control]["type"] === "text"
      // ) {
      //   return <TextField id={control} key={control + index} label={control} />;
      // } else {
      //   return (
      //     <FormControl className={classes.formControl}>
      //       <InputLabel id="demo-simple-select-label">{control}</InputLabel>
      //       <Select
      //         labelId="demo-simple-select-label"
      //         id="demo-simple-select"
      //       ></Select>
      //     </FormControl>
      //   );
      // }
    });

    return (
      <div className="pb-86 pt-30 px-30 ">
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Box border={1} {...defaultProps}>
              <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
              >
                <Grid
                  container
                  direction="row"
                  justify="space-evenly"
                  alignItems="center"
                  xs={10}
                >
                  {controls}
                </Grid>

                <Grid
                  container
                  direction="column"
                  justify="space-around"
                  alignItems="center"
                  xs={2}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ margin: 4 ,width:160}}
                  >
                    Save
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ margin: 4 ,width:160}}
                  >
                    Share
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ margin: 4 ,width:160}}
                  >
                    Submit for approval
                  </Button>
                </Grid>
              </Grid>
            </Box>

            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            ></Grid>
            <Grid container direction="row" justify="space-around">
              <Button variant="contained" color="primary">
                Deal Economics
              </Button>
              <Button variant="contained" color="primary">
                Merchandise Info
              </Button>
              <Button variant="contained" color="primary">
                Inbound Transit
              </Button>
              <Button variant="contained" color="primary">
                Production Planning
              </Button>
              <Button variant="contained" color="primary">
                Account Payable
              </Button>
              <Button variant="contained" color="primary">
                Actual Performance
              </Button>
            </Grid>
            <Grid container direction="row" justify="space-between" style={{marginTop:20}}>
              <Box border={1} justifyContent="center" {...boxProp}>
                <div
                  style={{
                    width: 240,
                    textAlign: "center",
                    paddingTop: 5,
                  }}
                >
                  <h5>1. Enter Bid Information</h5>
                  {bidControls}
                </div>
              </Box>
              <Box border={1} justifyContent="center" {...boxProp}>
                <div style={{ width: 240, textAlign: "center", paddingTop: 5 }}>
                  <h5>2. Enter all major deal factors</h5>
                  {dealFactors}
                </div>
              </Box>
              <Box border={1} justifyContent="center" {...boxProp}>
                <div style={{ width: 240, textAlign: "center", paddingTop: 5 }}>
                  <h5>3. Select performance proxy #1</h5>
                  {per_1}
                </div>
              </Box>
              <Box border={1} justifyContent="center" {...boxProp}>
                <div style={{ width: 240, textAlign: "center", paddingTop: 5 }}>
                  <h5>4. Select performance proxy #2</h5>
                  {per_2}
                </div>
              </Box>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(DealDetails);
