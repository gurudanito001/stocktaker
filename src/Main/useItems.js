import React, { Fragment } from 'react';


export default class UseItems extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            items: [
                {itemName1: '', quantity1:'', id:1}
            ],
            vehicleFor: '',
            authorizedBy: '',
            dateUsed: '',
            purpose: ''
        };
    }
    handleChange = (event)=>{
        if(event.target.id.includes('itemName')){
            let allItems = this.state.items;
            allItems.map((item)=>{
                if(item.id == event.target.id.substr(-1)){
                    item["itemName" + item.id] = event.target.value;
                    this.setState({items: allItems})
                    document.getElementById("itemName" + item.id).classList.remove('border-danger');
                    console.log(this.state);
                }
            })
        }else if(event.target.id.includes('quantity')){
            let allItems = this.state.items;
            allItems.map((item)=>{
                if(item.id == event.target.id.substr(-1)){
                    item["quantity" + item.id] = event.target.value;
                    this.setState({items: allItems})
                    document.getElementById("quantity" + item.id).classList.remove('border-danger');
                    console.log(this.state)
                }
            })
        }else{
            this.setState({ [event.target.id]: event.target.value });
            document.getElementById(event.target.id).classList.remove('border-danger')
            console.log(this.state)
        }
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        const data = this.state;
        this.itemAndQtyAreSpecified();
        if (this.requiredFieldsAreFilled() && this.itemAndQtyAreSpecified()){
            this.props.onSubmit(data);
            this.props.setSuccessMessage("Spare Part usage has been recorded")
            this.clearState();
            document.getElementById('cancelUseItemsModal').click();
        }else{
            this.unfilledRequiredInputs().map((inputId)=>{
                document.getElementById(inputId).classList.add('border-danger')
            })
        }
    }

    requiredFieldsAreFilled = ()=>{
        let result = false;
        if(this.unfilledRequiredInputs().length === 0){
            result = true
        }
        return result;
    }
    unfilledRequiredInputs = ()=>{
        let unfilledRequiredInputs = [];
        if(document.getElementById('vehicleFor').value === ''){
            unfilledRequiredInputs.push('vehicleFor')
        }if(document.getElementById('dateUsed').value === ''){
            unfilledRequiredInputs.push('dateUsed')
        }
        return unfilledRequiredInputs
    }

    itemAndQtyAreSpecified = ()=>{
        let resultString = '';
        let result = false
        this.state.items.map((item)=>{
            if(item["itemName" + item.id] !== '' && item["quantity" + item.id] !== ''){
                resultString += 'true';
            }else{
                resultString += 'false';
                if(item["itemName" + item.id] === ''){
                    document.getElementById("itemName" + item.id).classList.add('border-danger');
                }if(item["quantity" + item.id] === ''){
                    document.getElementById("quantity" + item.id).classList.add('border-danger');
                }
            }
        })
        if(resultString.includes('false')){
            result = false;
        }else{
            result = true;
        }

        return result;
    }

    itemNamesOptions(){
        let allItemNames = this.props.allItemNames;
        return(
            <>
                <option value="" key="placeholder">Select a Spare Part</option>
                {allItemNames.map((category)=>{
                    return(
                        <option key={category} value={category}> {category}</option>
                    )
                })
                }
            </>
        )
    }

    listOfItems = ()=>{
        return(
            this.state.items.map((item)=>{
                return(
                    <Fragment key={'itemName' + item.id}>
                    <div className="col-md-8 pr-0 pb-2">
                        <select className="form-control form-control-sm" id={'itemName' + item.id} onChange={this.handleChange} 
                        value={this.state.items[item.id -1]['itemName' + item.id]}>
                            {this.itemNamesOptions()}
                        </select>
                    </div>
                    <div className="col-md-4 pl-1 pb-2">
                        <input type="number" className="form-control form-control-sm" placeholder="quantity" id={'quantity' + item.id} 
                        value={this.state.items[item.id -1]['quantity' + item.id]} onChange={this.handleChange}/>
                    </div>
                    </Fragment>
                )
            })
        )
        
    }

    addToListOfItems = ()=>{
        let allItems = this.state.items;
        allItems.push ({['itemName' + (allItems.length +1)]: '', ['quantity' + (allItems.length +1)]:'', id:allItems.length +1});
        this.setState({items:allItems});
    }

    closeButton = ()=>{
        if(this.state.items.length > 1){
            return(
                <a className="btn btn-sm close mt-auto mb-2 p-0" onClick={()=>{
                    let allItems = this.state.items;
                    allItems.pop();
                    this.setState({items: allItems})
                }}>
                    <span aria-hidden="true">&times;</span>
                </a>
            )
        }
    }
    clearState =()=>{
        let allStateKeys = Object.keys(this.state);

        allStateKeys.map((stateKey)=>{
            if(stateKey === 'items'){
                this.setState({items:[{itemName1: '', quantity1:'', id:1}]})
            }
            else{
                this.setState({[stateKey]:''})
            }
        })
    }
    render(){

        return(
            <form className="bg-white p-0">
                <div className="form-group row">
                    <label htmlFor="itemName1" className="col-md-3 col-form-label col-form-label-sm">
                        Items <span className="text-warning h5"> *</span>
                    </label>
                    <div className="col-md-8">
                        <div className="row">
                            {this.listOfItems()}
                        </div>
                    </div>
                    <div className="d-flex flex-column col-md-1 pl-0 ">
                        <a className="btn btn-sm btn-outline-success" onClick={()=>{this.addToListOfItems()}}>+</a>
                        {this.closeButton()}
                        
                    </div>
                </div>
                <div className="dropdown-divider mt-0"></div>

                <div className="form-group row">
                    <label htmlFor="vehicleFor" className="col-md-3 col-form-label col-form-label-sm">
                        Vehicle For <span className="text-warning h5"> *</span>
                    </label>
                    <div className="col-md-9">
                        <input type="text" className="form-control form-control-sm" id="vehicleFor" onChange={this.handleChange} value={this.state.vehicleFor}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="authorizedBy" className="col-md-3 col-form-label col-form-label-sm">
                        Authorized By
                    </label>
                    <div className="col-md-9">
                        <input type="text" className="form-control form-control-sm" id="authorizedBy" onChange={this.handleChange} value={this.state.authorizedBy}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="dateUsed" className="col-md-3 col-form-label col-form-label-sm">
                        Date <span className="text-warning h5"> *</span>
                    </label>
                    <div className="col-md-9">
                        <input type="date" className="form-control form-control-sm" id="dateUsed" onChange={this.handleChange}  
                        value={this.state.dateUsed}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="purpose" className="col-md-3 col-form-label col-form-label-sm">
                        Purpose
                    </label>
                    <div className="col-md-9">
                    <textarea rows="3" className="form-control w-100 rounded" id="purpose"  onChange={this.handleChange}  value={this.state.purpose}>
                    </textarea>
                    </div>
                </div>

                
                
                <input type="submit" className="btn btn-sm btn-success float-right mr-2"  onClick={this.handleSubmit} value="Save" />
                <a className="btn btn-sm btn-secondary text-white float-right mr-2" id="cancelUseItemsModal" data-dismiss="modal">Cancel</a>
                
            </form>
        )
    }
}