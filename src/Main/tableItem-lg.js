import React from 'react';
import edit from '../images/edit.svg';

export default class TableItemLg extends React.Component{


    render(){

        return (
            <>
                <th scope="row">{this.props.serialNumber}</th>
                <td><button className="btn text-dark p-0 btn-link" onClick={()=>{
                        this.props.displayTableItemDetails((this.props.serialNumber-1));
                        this.props.tableItemDetails((this.props.serialNumber-1));
                        }}>
                        {this.props.itemName}
                    </button>
                </td>
                
                <td>{this.props.category}</td>

                <td>{this.props.numberRemaining}</td>

                <td>{this.props.unitCost}</td>
                
                <td>

                    {/* <button className="badge btn bg-secondary" onClick={()=>this.makeFieldsEditable(this.props.itemName)} 
                        id={this.props.itemName + 'edit-btn'}> <img src={edit} width="11" alt="icons"/> </button> 
                    <button className="btn btn-sm btn-success d-none" 
                    onClick={
                        ()=>{
                            this.props.saveChanges(this.props.serialNumber-1 , this.returnNewData(this.props.itemName));
                            this.makeFieldsReadOnly(this.props.itemName);
                        }} 
                    id={this.props.itemName + 'save-btn'}>Save</button>  */}
                </td>

            </>
        )
    }
    
}