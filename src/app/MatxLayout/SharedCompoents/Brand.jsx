import React, { Component } from "react";

class Brand extends Component {
  state = {};
  render() {
    return (
      <div className="flex flex-middle flex-space-between brand-area">
        <div className="flex flex-middle brand" style={{width: "100%"}}>
          <img src="https://imsaiyyed.github.io/CCM_Website/assets/images/ccmLogo.png" alt="company-logo" style={{width: "75%",height:"40px",marginRight: "12px"}}/>
          {/* <span className="brand__text">Matx</span> */}
        </div>
        {this.props.children} 
      </div>
    );
  }
}

export default Brand;
