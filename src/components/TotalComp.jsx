import React from 'react';

class TotalComp extends React.Component {
  render() {
    return <h3>Total:$ {this.props.total}</h3>;
  }
}

export default TotalComp;