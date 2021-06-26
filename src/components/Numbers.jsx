import React from 'react';

import "../assests/css/App.css";




class Numbers extends React.Component {

    clickMe = (e) => {

        var tempvalue = e.target.value;

        if (document.getElementById(e.target.id).style.backgroundColor == "red") {
            document.getElementById(e.target.id).style.backgroundColor = "rgb(230, 163, 236)";

            for (var i = 0; i < 5; i++) {
                if (this.props.mark[i].value == tempvalue) {
                    this.props.mark[i].value = "0";
                    this.props.mark[i].isOn = "0";
                }
            }
            tempvalue = "0";
            this.props.checked[0].select = this.props.checked[0].select - 1;
            this.props.numClick(tempvalue)
        }
        else if (this.props.checked[0].select != 5) {
            document.getElementById(e.target.id).style.backgroundColor = "red";
            this.props.numClick(tempvalue)
            this.props.checked[0].select = this.props.checked[0].select + 1;
        }

    }

    clickClear = () => {
        document.getElementById("n1").style.backgroundColor = "rgb(230, 163, 236)";
        document.getElementById("n2").style.backgroundColor = "rgb(230, 163, 236)";
        document.getElementById("n3").style.backgroundColor = "rgb(230, 163, 236)";
        document.getElementById("n4").style.backgroundColor = "rgb(230, 163, 236)";
        document.getElementById("n5").style.backgroundColor = "rgb(230, 163, 236)";
        document.getElementById("n6").style.backgroundColor = "rgb(230, 163, 236)";
        document.getElementById("n7").style.backgroundColor = "rgb(230, 163, 236)";
        document.getElementById("n8").style.backgroundColor = "rgb(230, 163, 236)";
        document.getElementById("n9").style.backgroundColor = "rgb(230, 163, 236)";
        document.getElementById("n10").style.backgroundColor = "rgb(230, 163, 236)";
        document.getElementById("n11").style.backgroundColor = "rgb(230, 163, 236)";
        document.getElementById("n12").style.backgroundColor = "rgb(230, 163, 236)";
        document.getElementById("n13").style.backgroundColor = "rgb(230, 163, 236)";
        document.getElementById("n14").style.backgroundColor = "rgb(230, 163, 236)";
        document.getElementById("n15").style.backgroundColor = "rgb(230, 163, 236)";
        document.getElementById("n16").style.backgroundColor = "rgb(230, 163, 236)";
        document.getElementById("n17").style.backgroundColor = "rgb(230, 163, 236)";
        document.getElementById("n18").style.backgroundColor = "rgb(230, 163, 236)";
        document.getElementById("n19").style.backgroundColor = "rgb(230, 163, 236)";
        document.getElementById("n20").style.backgroundColor = "rgb(230, 163, 236)";

        this.props.clearClick()
    }

    clickCash = () => {
        this.props.cashClick()
    }

    clickRandom = () => {


        const random = [0,0,0,0,0]

        var t=0;
        var temp=0;
       var notok=1;


        for (var i = 0; i < 500; i++) {
            notok=1;
            temp= Math.floor(Math.random() * 20) + 1;
            
            for(var j=0;j<5;j++)
            {
                if(temp==random[j])
                {
                 t--; notok=0;break;
                }
            }
            if(notok==1)
            random[t]=temp;
            t++;
            if(t==5)
            break;
        }


        //Clearing all the buttons
        document.getElementById("n1").style.backgroundColor = "rgb(230, 163, 236)";
        document.getElementById("n2").style.backgroundColor = "rgb(230, 163, 236)";
        document.getElementById("n3").style.backgroundColor = "rgb(230, 163, 236)";
        document.getElementById("n4").style.backgroundColor = "rgb(230, 163, 236)";
        document.getElementById("n5").style.backgroundColor = "rgb(230, 163, 236)";
        document.getElementById("n6").style.backgroundColor = "rgb(230, 163, 236)";
        document.getElementById("n7").style.backgroundColor = "rgb(230, 163, 236)";
        document.getElementById("n8").style.backgroundColor = "rgb(230, 163, 236)";
        document.getElementById("n9").style.backgroundColor = "rgb(230, 163, 236)";
        document.getElementById("n10").style.backgroundColor = "rgb(230, 163, 236)";
        document.getElementById("n11").style.backgroundColor = "rgb(230, 163, 236)";
        document.getElementById("n12").style.backgroundColor = "rgb(230, 163, 236)";
        document.getElementById("n13").style.backgroundColor = "rgb(230, 163, 236)";
        document.getElementById("n14").style.backgroundColor = "rgb(230, 163, 236)";
        document.getElementById("n15").style.backgroundColor = "rgb(230, 163, 236)";
        document.getElementById("n16").style.backgroundColor = "rgb(230, 163, 236)";
        document.getElementById("n17").style.backgroundColor = "rgb(230, 163, 236)";
        document.getElementById("n18").style.backgroundColor = "rgb(230, 163, 236)";
        document.getElementById("n19").style.backgroundColor = "rgb(230, 163, 236)";
        document.getElementById("n20").style.backgroundColor = "rgb(230, 163, 236)";

        for (var i = 0; i < 5; i++) {
            if (random[i] == 1)
                document.getElementById("n1").style.backgroundColor = "red";
            if (random[i] == 2)
                document.getElementById("n2").style.backgroundColor = "red";
            if (random[i] == 3)
                document.getElementById("n3").style.backgroundColor = "red";
            if (random[i] == 4)
                document.getElementById("n4").style.backgroundColor = "red";
            if (random[i] == 5)
                document.getElementById("n5").style.backgroundColor = "red";
            if (random[i] == 6)
                document.getElementById("n6").style.backgroundColor = "red";
            if (random[i] == 7)
                document.getElementById("n7").style.backgroundColor = "red";
            if (random[i] == 8)
                document.getElementById("n8").style.backgroundColor = "red";
            if (random[i] == 9)
                document.getElementById("n9").style.backgroundColor = "red";
            if (random[i] == 10)
                document.getElementById("n10").style.backgroundColor = "red";
            if (random[i] == 11)
                document.getElementById("n11").style.backgroundColor = "red";
            if (random[i] == 12)
                document.getElementById("n12").style.backgroundColor = "red";
            if (random[i] == 20)
                document.getElementById("n20").style.backgroundColor = "red";
            if (random[i] == 13)
                document.getElementById("n13").style.backgroundColor = "red";
            if (random[i] == 14)
                document.getElementById("n14").style.backgroundColor = "red";
            if (random[i] == 15)
                document.getElementById("n15").style.backgroundColor = "red";
            if (random[i] == 16)
                document.getElementById("n16").style.backgroundColor = "red";
            if (random[i] == 17)
                document.getElementById("n17").style.backgroundColor = "red";
            if (random[i] == 18)
                document.getElementById("n18").style.backgroundColor = "red";
            if (random[i] == 19)
                document.getElementById("n19").style.backgroundColor = "red";


        }


        this.props.ranClick(random)
    }
    render() {
        return (

            <div  >
                <table className="Numbers-container">
                    <tr >
                        <td>
                            < button id="n1" value="1" onClick={this.clickMe.bind(this)}>1</button>

                        </td>

                        <td>
                            < button id="n2" value="2" onClick={this.clickMe.bind(this)}>2</button>

                        </td>
                        <td>
                            < button id="n3" value="3" onClick={this.clickMe.bind(this)}>3</button>

                        </td>
                        <td>
                            < button id="n4" value="4" onClick={this.clickMe.bind(this)}>4</button>

                        </td>
                        <td>
                            < button id="n5" value="5" onClick={this.clickMe.bind(this)}>5</button>

                        </td>


                    </tr>

                    <tr>
                        <td>
                            < button id="n6" value="6" onClick={this.clickMe.bind(this)}>6</button>

                        </td>

                        <td>
                            < button id="n7" value="7" onClick={this.clickMe.bind(this)}>7</button>

                        </td>
                        <td>
                            < button id="n8" value="8" onClick={this.clickMe.bind(this)}>8</button>

                        </td>
                        <td>
                            < button id="n9" value="9" onClick={this.clickMe.bind(this)}>9</button>

                        </td>
                        <td>
                            < button id="n10" value="10" onClick={this.clickMe.bind(this)}>10</button>

                        </td>

                    </tr>

                    <tr>
                        <td>
                            < button id="n11" value="11" onClick={this.clickMe.bind(this)}>11</button>

                        </td>

                        <td>
                            < button id="n12" value="12" onClick={this.clickMe.bind(this)}>12</button>

                        </td>
                        <td>
                            < button id="n13" value="13" onClick={this.clickMe.bind(this)}>13</button>

                        </td>
                        <td>
                            < button id="n14" value="14" onClick={this.clickMe.bind(this)}>14</button>

                        </td>
                        <td>
                            < button id="n15" value="15" onClick={this.clickMe.bind(this)}>15</button>

                        </td>

                    </tr>

                    <tr>
                        <td>
                            < button id="n16" value="16" onClick={this.clickMe.bind(this)}>16</button>

                        </td>

                        <td>
                            < button id="n17" value="17" onClick={this.clickMe.bind(this)}>17</button>

                        </td>
                        <td>
                            < button id="n18" value="18" onClick={this.clickMe.bind(this)}>18</button>

                        </td>
                        <td>
                            < button id="n19" value="19" onClick={this.clickMe.bind(this)}>19</button>

                        </td>
                        <td>
                            < button id="n20" value="20" onClick={this.clickMe.bind(this)}>20</button>

                        </td>

                    </tr>



                    <tr>
                        <td colSpan="2">
                            <button class="button2" onClick={this.clickCash.bind(this)}>Cash</button>
                        </td>
                        <td colSpan="2">
                            <button class="button" onClick={this.clickRandom.bind(this)}>Random</button>
                        </td>
                        <td colSpan="2">
                            <button class="button2" onClick={this.clickClear.bind(this)}>Clear</button>
                        </td>
                    </tr>

                </table>


            </div>
        )
    }
}

export default Numbers;