import React from 'react';
import edit from '../images/edit.svg';
import del from '../images/del.svg';

export default class TableItemSm extends React.Component{

    constructor(props){
        super(props)
        this.state = {

        }
    }

    toggleSaveAndEdit(itemName){
        if(document.getElementById(itemName + 'save-btn').classList.contains('d-none')){
            document.getElementById(itemName + 'save-btn').classList.remove('d-none')
            document.getElementById(itemName + 'edit-btn').classList.add('d-none')
        }else if(document.getElementById(itemName + 'edit-btn').classList.contains('d-none')){
            document.getElementById(itemName + 'edit-btn').classList.remove('d-none')
            document.getElementById(itemName + 'save-btn').classList.add('d-none')
        }
    }

    makeFieldsEditable(itemName){
        const allFieldsIds = [(itemName + 'text'),(itemName + 'NumberRemaining'),(itemName + 'ReorderLevel')]
        allFieldsIds.map((id)=>{
            document.getElementById(id).readOnly = false;
            document.getElementById(id).classList.remove('border-0')
        })
        this.toggleSaveAndEdit(itemName);
    }

    makeFieldsReadOnly(itemName){
        const allFieldsIds = [(itemName + 'text'),(itemName + 'NumberRemaining'),(itemName + 'ReorderLevel')]
        allFieldsIds.map((id)=>{
            document.getElementById(id).readOnly = true;
            document.getElementById(id).classList.add('border-0')
        })
        this.toggleSaveAndEdit(itemName);
    }

    getFieldData(itemName){
        let newData={itemName: '', numberRemaining: '', reorderLevel: ''}
        const allFieldsIds = [(itemName + 'text'),(itemName + 'NumberRemaining'),(itemName + 'ReorderLevel')]
        newData.itemName =  document.getElementById(allFieldsIds[0]).value;
        newData.numberRemaining =  document.getElementById(allFieldsIds[1]).value;
        newData.reorderLevel =  document.getElementById(allFieldsIds[2]).value;
        return newData;
    }

    render(){
        const styles = {
            input:{
                boxShadow: 'none',
                color: '#4A5A95',
            }
        }

        return (
            <>
            <div className="container-fluid mb-3">
                <ul className="row list-group list-group-horizontal border-bottom">
                    <li className="d-flex align-items-center col-5 list-group-item p-0 pl-2 border-0 rounded-0 font-weight-bold">#</li>
                    <li className="col-7 list-group-item border-0 rounded-0 p-0 pl-2">{this.props.serialNumber}</li>
                </ul>
                <ul className="row list-group list-group-horizontal border-bottom">
                    <li className="d-flex align-items-center col-5 list-group-item p-0 pl-2 border-0 rounded-0 small font-weight-bold">Item Name</li>
                    <li className="col-7 list-group-item border-0 rounded-0 p-0">
                        <input type="text" className="form-control border-0 font-weight-bold outline-0 bg-white p-0 pl-2" 
                        style={styles.input} readOnly defaultValue={this.props.itemName} id={this.props.itemName + 'text'} />
                    </li>
                </ul>
                <ul className="row list-group list-group-horizontal border-bottom">
                    <li className="d-flex align-items-center col-5 list-group-item p-0 pl-2 border-0 rounded-0  small font-weight-bold">Num. Remaining</li>
                    <li className="col-7 list-group-item border-0 rounded-0 p-0"> 
                        <input type="number" className="form-control border-0 bg-white p-0 pl-2" 
                        style={styles.input} readOnly defaultValue={this.props.numberRemaining} id={this.props.itemName + 'NumberRemaining'}/>
                    </li>
                </ul>
                <ul className="row list-group list-group-horizontal border-bottom">
                    <li className="d-flex align-items-center col-5 list-group-item p-0 pl-2 border-0 rounded-0  small font-weight-bold">Reorder Level</li>
                    <li className="col-7 list-group-item border-0 rounded-0 p-0">
                        <input type="number" className="form-control border-0 bg-white p-0 pl-2" 
                        style={styles.input} readOnly defaultValue={this.props.reorderLevel} id={this.props.itemName + 'ReorderLevel'}/>
                    </li>
                </ul>
                <ul className="row list-group list-group-horizontal border-bottom">
                    <li className="d-flex align-items-center col-5 list-group-item p-0 pl-2 border-0 rounded-0 small font-weight-bold">Actions</li>
                    <li className="col-7 list-group-item border-0 rounded-0 p-0">
                    <button className="btn btn-sm btn-secondary ml-2" onClick={()=>this.makeFieldsEditable(this.props.itemName)} 
                        id={this.props.itemName + 'edit-btn'}>Edit </button> 
                    <button className="btn btn-sm btn-success d-none ml-2" 
                    onClick={
                        ()=>{
                            this.props.saveChanges(this.props.serialNumber-1 , this.getFieldData(this.props.itemName));
                            this.makeFieldsReadOnly(this.props.itemName);
                        }} 
                    id={this.props.itemName + 'save-btn'}>Save</button>
                    </li>
                </ul>
                </div>
            </>
        )
    }
    
}