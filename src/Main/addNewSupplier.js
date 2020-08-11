import React from 'react';

export default class AddNewSupplier extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            phoneNumber: '',
            address: '',    
            email: '',
            itemsSupplied: []
        }
    }

    toggleBtnState = (id)=>{
        if(document.getElementById(id).classList.contains('btn-outline-secondary')){
            document.getElementById(id).classList.remove('btn-outline-secondary');
            document.getElementById(id).classList.add('btn-secondary');
        }else if (document.getElementById(id).classList.contains('btn-secondary')){
            document.getElementById(id).classList.remove('btn-secondary');
            document.getElementById(id).classList.add('btn-outline-secondary');
        }
    }

    addToOrRemoveFromItemsSupplied = (id,item)=>{
        //check if item exists in itemsSupplied array
        //If it exists, remove from array
        //If it doesnt, add to array.
        let ItemsSupplied = this.state.itemsSupplied;
            ItemsSupplied.push(item);
        /* ItemsSupplied.map((itemName)=>{
            if (item === itemName){
                ItemsSupplied.pop(item);
            }else{
                ItemsSupplied.push(item);
            }
        }) */
        //this.setState({itemsSupplied: ItemsSupplied})
        console.log(ItemsSupplied)
        this.toggleBtnState(id);
    }

    itemsSuppliedSelection = ()=>{
        return(
            this.props.itemNames.map((item)=>{
                return  (
                <span key={item}>
                    <button className="btn btn-sm btn-outline-secondary m-1" style={{boxShadow:'none'}} id={'item' + this.props.itemNames.indexOf(item)}
                    onClick={()=>{this.addToOrRemoveFromItemsSupplied(('item' + this.props.itemNames.indexOf(item)), item)}}>{item}
                    </button>
                </span>
                )
            })
        )
    }

    render(){
        return(
            <form className="container-fluid bg-white py-3 rounded clearfix" onSubmit={this.handleSubmit}>
                <div className="form-group row">
                    <label className="d-flex align-items-center h6 px-0 pl-3 col-10 col-sm-4 mb-0 font-weight-bold text-secondary"          >Name
                    </label>
                    <div className="col-10 col-sm-6 px-0">
                        <input type="text" className="form-control bg-white font-weight-bold px-0 pl-3 py-0"  id="formGroupExampleInput" />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="d-flex align-items-center h6 px-0 pl-3 col-10 col-sm-4 mb-0 font-weight-bold text-secondary">
                        Phone Number
                    </label>
                    <div className="col-10 col-sm-6 px-0">
                        <input type="text" className="form-control bg-white font-weight-bold px-0 pl-3 py-0" id="formGroupExampleInput2" />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="d-flex align-items-center h6 px-0 pl-3 col-10 col-sm-4 mb-0 font-weight-bold text-secondary" > Warehouse Address
                    </label>
                    <div className="col-10 col-sm-6 px-0">
                        <input type="text" className="form-control bg-white font-weight-bold px-0 pl-3 py-0" id="formGroupExampleInput2" />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="d-flex align-items-center h6 px-0 pl-3 col-10 col-sm-4 mb-0 font-weight-bold text-secondary">
                        Email
                    </label>
                    <div className="col-10 col-sm-6 px-0">
                        <input type="text" className="form-control bg-white font-weight-bold px-0 pl-3 py-0" id="formGroupExampleInput2" />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="d-flex align-items-center h6 px-0 pl-3 col-10 col-sm-4 mb-0 font-weight-bold text-secondary">
                        Items Supplied
                    </label>
                    <div className="col-10 border rounded col-sm-6 px-0">
                        {this.itemsSuppliedSelection()}
                    </div>
                </div>
            </form>
        )
    }

}