import React, { Component, Fragment } from "react";
import CustomizedDialogs from "./CustomizedDialog";
import { withStyles } from "@material-ui/styles";
import Deals from "./Deals";


class DealManagement extends Component {
  state = {
    show:false
  };
  showDeals=()=>{
    this.setState({show:true})
  }
  render() {
   
    return (
      <Fragment>
        <div className="pb-86 pt-30 px-30 ">
          {/* <p>Management</p> */}
        <CustomizedDialogs onApply={this.showDeals}/>
        {this.state.show?<Deals/>:null}
        </div>


      </Fragment>
    );
  }
}

export default withStyles({}, { withTheme: true })(DealManagement);
