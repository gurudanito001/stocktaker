import React from 'react';
import $ from 'jquery';

export default class GiveOutItemList extends React.Component{
    

    handleChange = () => {
        let value = {itemName: '', quantity:'', id:''}
        value.itemName = document.getElementById('itemName' + this.props.id).value;
        value.quantity = document.getElementById('quantity' + this.props.id).value;
        value.id = this.props.id;
        this.props.updateFunc(value);
    }

    render(){
        return(
            <>
            <label className="col-md-3 bg-light card p-2 my-2 mr-2 float-left">
                <select onChange={this.handleChange} 
                className="custom-select form-control font-weight-bold text-secondary mb-1" required id={"itemName" + this.props.id}>
                    {this.props.selectOptions}
                </select>
                <input type="number" placeholder="Number" className="form-control w-50" onChange={this.handleChange}
                 id={"quantity" + this.props.id}/>
            </label>
            </>
        )
    }
}