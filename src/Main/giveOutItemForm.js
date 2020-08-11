import React from 'react';
import GiveOutItemList from './giveOutItemList';


export default class GiveOutItemForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            vehiclePlateNumber: '',
            authorizedBy: '',
            dateGiven: '',
            purpose: '',
            itemList: [
                {itemName:'', value:''}
            ]
        };
    }

    handleChange = (event)=>{
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit = (event)=>{
        event.preventDefault()
        console.log(this.state)
        this.props.onSubmit(this.state);
    }
    listOfItems = ()=>{
        let listOfItems = [];
        this.state.itemList.map((item)=>{
            listOfItems.push(item.itemName);
        })
        return listOfItems
    }
    addToItemList = ()=>{
        let allItemsList = this.state.itemList
        allItemsList.push({itemName: '', value:''})
        this.setState({itemList: allItemsList})
    }
    updateItemListState = (newValue)=>{
        let listOfItems = this.listOfItems();
        let itemAlreadyExistsInList = false;
        listOfItems.map((item)=>{
            if(item === newValue.itemName){
                itemAlreadyExistsInList = true;
                // Alert That Item Already Exists
            }
        })
        let allItemsList = this.state.itemList;
        allItemsList.map((item)=>{
            if(this.state.itemList.indexOf(item) === newValue.id && itemAlreadyExistsInList === false){
                allItemsList[this.state.itemList.indexOf(item)] = newValue;
            }
        })
        this.setState({itemList: allItemsList})
        console.log(this.listOfItems())
    }

    itemNamesOptions(){
        return(
            <>
                <option value={null}>Spare Part Name</option>
                {this.props.itemNames.map((item)=>{
                    return(
                        <option key={item} value={item}> {item}</option>
                    )
                })
                }
            </>
        )
    }

    plateNumberOptions = ()=>{
        return(
            <>
            <select value={this.state.vehiclePlateNumber} onChange={this.handleChange} className="custom-select form-control font-weight-bold text-secondary" required id="vehiclePlateNumber">
                <option value={null}>Vehicle Plate Number</option>
                {this.props.plateNumbers.map((item)=>{
                    return(
                        <option key={item} value={item}> {item}</option>
                    )
                })
                }
            </select>
            </>
        )
    }

    render() {
        return (
            <form className="container-fluid bg-white py-3 rounded clearfix" onSubmit={this.handleSubmit}>

                <div className="form-group row mb-2 mb-sm-4">
                    <label className="d-flex align-items-center h6 px-0 pl-3 col-10 col-sm-3 mb-0 font-weight-bold">
                        Vehicle Plate Number
                    </label>
                    <div className="col-12 col-sm-6">
                        {this.plateNumberOptions()}
                    </div>
                </div>

                <div className="form-group row mb-2 mb-sm-4">
                    <label className="d-flex align-items-center h6 px-0 pl-3 col-10 col-sm-3 mb-0 font-weight-bold">
                        Authorized By
                    </label>
                    <div className="col-12 col-sm-6">
                        <select value={this.state.authorizedBy} onChange={this.handleChange} className="custom-select  form-control font-weight-bold text-secondary" required id="authorizedBy">
                            <option value={null}>Authorized Personnel</option>
                            <option value="Authorized Personnel A">Authorized Personnel A</option>
                            <option value="Authorized Personnel B">Authorized Personnel B</option>
                            <option value="Authorized Personnel C">Authorized Personnel C</option>
                        </select>
                    </div>
                </div>

                <div className="form-group row mb-2 mb-sm-4">
                    <label className="d-flex align-items-center h6 px-0 pl-3 col-10 col-sm-3 mb-0 font-weight-bold">
                        Date Given
                    </label>
                    <div className="col-12 col-sm-6">
                        <input type="date" className="form-control font-weight-bold text-secondary" value={this.state.dateGiven} onChange={this.handleChange} id="dateGiven"/>
                    </div>
                </div>

                <div className="form-group row mb-2 mb-sm-4">
                    <label className="d-flex align-items-center h6 px-0 pl-3 col-12 col-sm-3 mb-0 font-weight-bold">
                        Purpose
                    </label>
                    <div className="col-12 col-sm-6">
                        <textarea className="form-control" rows="3"  value={this.state.remarks} onChange={this.handleChange} id="purpose"></textarea>
                    </div>
                </div>

                
                <header className="row clearfix">
                    <div className="col-12">
                        <h6 className="float-left">Item List</h6>  
                        <a className="btn btn-sm btn-outline-secondary float-right" onClick={this.addToItemList}>+New Item</a>
                    </div>
                </header>
                <section className="row px-lg-3">
                    <div className="col-12 clearfix border">
                        {this.state.itemList.map((item)=>{
                            return(
                                <GiveOutItemList 
                                selectOptions={this.itemNamesOptions()} 
                                id ={this.state.itemList.indexOf(item)} 
                                key={this.state.itemList.indexOf(item)}
                                updateFunc={this.updateItemListState}/>
                            )
                        })}
                    </div>
                </section>
                   
                <input type="submit" value="Submit" className="btn btn-sm btn-success float-right"/>
            </form>
        );
    }
}