

import React from 'react';

import "../assests/css/App.css";
import { useState } from 'react';

import Header from "./Header";
import SidePanel from "./SidePanel";
import Numbers from "./Numbers";
import Cash from "./Cash";




const App = () => {

  const [value, setValue] = useState([
    {
      select: 0
    }
  ]);
  const [Mark, setMark] = useState([
    {
      value: "0",
      isOn: "0"
    },
    {
      value: "0",
      isOn: "0"
    },
    {
      value: "0",
      isOn: "0"
    },
    {
      value: "0",
      isOn: "0"
    },
    {
      value: "0",
      isOn: "0"
    }
  ]);

  const [total, setTotal] = useState([
    {
      value: 0

    }
  ]);

  const numberPress = (e) => {

    const tempMark = Mark;

    for (var i = 0; i < 5; i++)
      if (tempMark[i].value == "0") {
        tempMark[i].value = e;
        if (e == "0")
          tempMark[i].isOn = "0";
        else
          tempMark[i].isOn = "1";
        break;
      }

    setMark(
      [
        {
          value: tempMark[0].value,
          isOn: tempMark[0].isOn
        },
        {
          value: tempMark[1].value,
          isOn: tempMark[1].isOn
        },
        {
          value: tempMark[2].value,
          isOn: tempMark[2].isOn
        },
        {
          value: tempMark[3].value,
          isOn: tempMark[3].isOn
        },
        {
          value: tempMark[4].value,
          isOn: tempMark[4].isOn
        }
      ]
    );
  }


  const amountPress = (e) => {
    setTotal([
      {
        value: e

      }]
    )
  }
  const cashPress = () => { 

    if(value[0].select==5)
    if(total[0].value!=0)
    alert("Number Selected and Money Assigned!");
  }
  const randomPress = (rand) => {
    setMark([
      {
        value: rand[0],
        isOn: "1"
      },
      {
        value: rand[1],
        isOn: "1"
      },
      {
        value: rand[2],
        isOn: "1"
      },
      {
        value: rand[3],
        isOn: "1"
      },
      {
        value: rand[4],
        isOn: "1"
      }
    ])

    setValue([
      {
        select: 5
      }
    ])

  }
  const clearPress = () => {
    setMark(
      [
        {
          value: "0",
          isOn: "0"
        },
        {
          value: "0",
          isOn: "0"
        },
        {
          value: "0",
          isOn: "0"
        },
        {
          value: "0",
          isOn: "0"
        },
        {
          value: "0",
          isOn: "0"
        }
      ]
    );

    setTotal([
      {
        value: 0

      }]);

    setValue([
      {
        select: 0
      }
    ]);
  }





  return (
    <div className="main-grid" id="main-container">


      <Header />
      <table className="table-main">

        <tr>
          <td id="col0" colSpan="2">
            <Cash amountClick={amountPress} currentTotal={total} checked={value} />
          </td>
          <td id="col1">
            <Numbers numClick={numberPress} clearClick={clearPress} cashClick={cashPress} ranClick={randomPress} mark={Mark} checked={value} />
          </td>
          <td id="col2">
            <SidePanel Mark={Mark} total={total} />

          </td>
        </tr>
      </table>
  



    </div>
  )
}

export default App;

