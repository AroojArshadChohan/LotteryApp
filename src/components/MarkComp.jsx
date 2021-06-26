import React from 'react';

class MarkComp extends React.Component {

  render() {

    if (this.props.mark != "0")
      return (
        <h5>Mark: {this.props.mark}</h5>);
    else
      return (
        <h5><br /></h5>);


  }
}

export default MarkComp;