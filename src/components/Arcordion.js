import React, { Component } from "react";

class Arcordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapse: true
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { isCollapse } = this.state;
    this.setState({
      isCollapse: !isCollapse
    });
  }

  render() {
    const { heading } = this.props;
    const { isCollapse } = this.state;
    return (
      <div className="Heading">
        <h2 onClick={this.onClick}>{heading}</h2>
        {!isCollapse && <div>a children</div>},
        {isCollapse && <div> not a children </div>}
      </div>
    );
  }
}

export default Arcordion;
