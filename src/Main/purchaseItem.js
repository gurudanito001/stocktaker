import React from 'react';


export default class PurchaseItem extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            itemName: '',
            quantity: '',
            cost: '',
            supplier: '',
            datePurchased: '',
            invoiceNumber: '',
        };
    }
    handleChange = (event)=>{
        this.setState({ [event.target.id]: event.target.value });
        document.getElementById(event.target.id).classList.remove('border-danger')
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        const data = this.state;
        
        if (this.requiredFieldsAreFilled()){
            this.props.onSubmit(data);
            document.getElementById('cancelPurchaseModal').click();
            this.props.setSuccessMessage(this.state.itemName + " purchase has been recorded")
            this.clearState();
        }else{
            this.unfilledRequiredInputs().map((inputId)=>{
                document.getElementById(inputId).classList.add('border-danger')
            })
        }
    }

    requiredFieldsAreFilled = ()=>{
        let result = true;
        if(document.getElementById('itemName').value === ''){
            result = false
        }else if(document.getElementById('quantity').value === ''){
            result = false
        }else if(document.getElementById('cost').value === ''){
            result = false
        }else if(document.getElementById('datePurchased').value === ''){
            result = false
        }
        return result;
    }
    unfilledRequiredInputs = ()=>{
        let unfilledRequiredInputs = [];
        if(document.getElementById('itemName').value === ''){
            unfilledRequiredInputs.push('itemName')
        }if(document.getElementById('quantity').value === '' ){
            unfilledRequiredInputs.push('quantity')
        }if(document.getElementById('cost').value === ''){
            unfilledRequiredInputs.push('cost')
        }if(document.getElementById('datePurchased').value === ''){
            unfilledRequiredInputs.push('datePurchased')
        }
        return unfilledRequiredInputs
    }
    clearState =()=>{
        let allStateKeys = Object.keys(this.state);
        allStateKeys.map((stateKey)=>{
            this.setState({[stateKey]:''});
        })
    }

    itemNamesOptions(){
        let allItemNames = this.props.allItemNames;
        return(
            <>
                <option value="">Select a Spare Part</option>
                {allItemNames.map((category)=>{
                    return(
                        <option key={category} value={category}> {category}</option>
                    )
                })
                }
            </>
        )
    }
    
    render(){

        return(
            <form className="bg-white p-0">
                <div className="form-group row">
                    <label htmlFor="itemName" className="col-md-4 col-form-label col-form-label-sm">
                        Item Name <span className="text-warning h5"> *</span>
                    </label>
                    <div className="col-md-8">
                        <select className="form-control form-control-sm" id="itemName" onChange={this.handleChange} 
                        value={this.state.itemName}>
                            {this.itemNamesOptions()}
                        </select>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="quantity" className="col-md-4 col-form-label col-form-label-sm">
                        Quantity <span className="text-warning h5"> *</span>
                    </label>
                    <div className="col-md-8">
                        <input type="number" className="form-control form-control-sm" id="quantity" onChange={this.handleChange} 
                        value={this.state.quantity}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="cost" className="col-md-4 col-form-label col-form-label-sm">
                        Cost (1 unit) <span className="text-warning h5"> *</span>
                    </label>
                    <div className="col-md-4 pr-0">
                        <input type="number" className="form-control form-control-sm" id="cost" onChange={this.handleChange} 
                        value={this.state.cost}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="supplier" className="col-md-4 col-form-label col-form-label-sm">
                        Supplier
                    </label>
                    <div className="col-md-8">
                        <input type="text" className="form-control form-control-sm" id="supplier" onChange={this.handleChange} 
                        value={this.state.supplier}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="datePurchased" className="col-md-4 col-form-label col-form-label-sm">
                        Date <span className="text-warning h5"> *</span>
                    </label>
                    <div className="col-md-8">
                        <input type="date" className="form-control form-control-sm" id="datePurchased" onChange={this.handleChange} 
                        value={this.state.datePurchased}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="invoiceNumber" className="col-md-4 col-form-label col-form-label-sm">
                        Invoice Number
                    </label>
                    <div className="col-md-8">
                        <input type="text" className="form-control form-control-sm" id="invoiceNumber" onChange={this.handleChange} 
                        value={this.state.invoiceNumber}/>
                    </div>
                </div>
                
                <input type="submit" className="btn btn-sm btn-success float-right mr-2"  onClick={this.handleSubmit} value="Save" />
                <a className="btn btn-sm btn-secondary text-white float-right mr-2" id="cancelPurchaseModal" data-dismiss="modal">Cancel</a>
                
            </form>
        )
    }
}