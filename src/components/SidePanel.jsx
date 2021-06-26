import React from 'react';
import MarkComp from './MarkComp';
import TotalComp from './TotalComp';
import { useState } from 'react';
import "../assests/css/App.css";

const SidePanel = ({ Mark, total }) => {




  return (


    <div className="side-container">
      <h3>Number Selected</h3>
      {Mark.map(marks => (<MarkComp mark={marks.value} />))}




      <br />
      <br />
      <br />

      {total.map(total => (<TotalComp total={total.value} />))}

    </div>
  )
}



export default SidePanel;