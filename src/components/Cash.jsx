import React from 'react';

import "../assests/css/App.css";


class Cash extends React.Component {
    clickMe = (e) => {
        if (this.props.checked[0].select == 5) {
            const total = this.props.currentTotal[0].value + parseInt(e.target.value);
            this.props.amountClick(total)
        }
    }
    render() {
        return (

            <div className="cash-container">
                <table className="cashtable">
                    <tr rowspan="2">
                        <td ><button class="button2" value='1' onClick={this.clickMe.bind(this)}>$1 </button></td>

                        <td ><button class="button2" value='5' onClick={this.clickMe.bind(this)}>$5 </button></td>
                    </tr>
                    <tr rowspan="2">
                        <td ><button class="button1" value='10' onClick={this.clickMe.bind(this)}>$10</button></td>
                        <td ><button class="button1" value='20' onClick={this.clickMe.bind(this)}>$20</button></td>
                    </tr>
                </table>



            </div>
        )
    }
}

export default Cash;