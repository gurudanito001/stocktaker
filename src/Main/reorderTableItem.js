import React from 'react';

export default class ReorderTableItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            suppliers: []
        }
    }
    

    reorderInfo = (value)=>{
        return value
    } 
    suppliersOptions = ()=>{
        let options = this.state.suppliers
        return(
            <>
                <option value="">Choose Supplier</option>
                {options.map((supplier)=>{
                    return(
                    <option key={supplier} value={supplier}>{supplier}</option>
                    )
                })}
            </>
        )
    }
    handleChange = () => {
        let value = {itemName:'', quantity:'', supplier:'', id:''};
        value.itemName = document.getElementById('itemName' + this.props.id).value;
        value.quantity = document.getElementById('quantity' + this.props.id).value;
        value.supplier = document.getElementById('supplier' + this.props.id).value;
        value.id =this.props.id;
        this.props.updateFunc(value);
        this.setState({suppliers: this.props.suppliers(value.itemName)})
    }

    render(){
        return(
            <>
                <th scope="row" className="py-3">{this.props.id + 1}</th>
                <td className="py-2">
                    <select onChange={this.handleChange} 
                        className="custom-select form-control font-weight-bold text-secondary mb-1" required id={'itemName' + this.props.id}>
                        {this.props.selectOptions}
                    </select>
                </td>
                <td className="py-2" style={{width: '150px'}}>
                    <input type="number" required className="form-control" id={'quantity'+ this.props.id}  onChange={this.handleChange}/>
                </td>
                <td className="py-2">
                    <select onChange={this.handleChange} 
                        className="custom-select form-control font-weight-bold text-secondary mb-1" required id={"supplier" + this.props.id}>
                        {this.suppliersOptions()}
                    </select>
                </td>
                <td className="py-3">
                    <button type="button" className="ml-2 mb-1 close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </td>
            </>
        )
    }
    

}