import React from 'react';

export default class ItemUsageHistory extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <>
            <select class="custom-select">
                <option value="1">This Month</option>
                <option value="2">Last Two Months</option>
                <option value="3">Last Three Months</option>
                <option value="4">Last Four Months</option>
                <option value="5">Last Five Months</option>
                <option value="6">Last Six Months</option>
            </select>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Item Name</th>
                        <th scope="col">No. Remaining</th>
                        <th scope="col">Reorder Level</th>
                        <th scope="col">Last Reorder</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1st</th>
                        <td>Tyres</td>
                        <td>22</td>
                        <td>12</td>
                        <td>12/03/2020</td>
                    </tr>
                    <tr>
                        <button className="btn">View History</button>
                    </tr>
                    <tr>
                        <th scope="row">Today</th>
                        <td>Tyres</td>
                        <td>18</td>
                        <td>12</td>
                        <td>12/03/2020</td>
                    </tr>
                </tbody>
            </table>
            </>
        )
    }
}