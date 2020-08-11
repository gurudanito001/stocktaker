import React from 'react';


export default class NewtableItemform extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            id: '',
            itemName: '',
            category: '',
            manufacturer: '',
            partNumber: '',
            model: '',
            serialNumber: '',
            numberRemaining: 0,
            reorderLevel: 0,
            averageUnitCost: 0,
            description: '',
            history: {
                purchase: [],
                usage: [],
                adjustments: []
            }
        };
    }
    handleChange = (event)=>{
        if(event.target.id ==='category' || event.target.id ==='newCategory'){
            if(document.getElementById('newCategory').value === ''){
                this.setState({category: document.getElementById('category').value})
            }else{
                this.setState({category: document.getElementById('newCategory').value})
            }
        }else{
            this.setState({ [event.target.id]: event.target.value });
            document.getElementById(event.target.id).classList.remove('border-danger')
        }
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        const data = this.state;
        if (this.requiredFieldsAreFilled()){
            this.props.onSubmit(data);
        }else{
            this.unfilledRequiredInputs().map((inputId)=>{
                document.getElementById(inputId).classList.add('border-danger')
            })
            this.props.setWarningMessage('Fill out the highlighted fields')
        }
    }

    requiredFieldsAreFilled = ()=>{
        let result = true;
        if(document.getElementById('itemName').value === ''){
            result = false
        }else if(document.getElementById('numberRemaining').value === ''){
            result = false
        }else if(document.getElementById('reorderLevel').value === ''){
            result = false
        }else if(document.getElementById('averageUnitCost').value === ''){
            result = false
        }
        return result;
    }
    unfilledRequiredInputs = ()=>{
        let unfilledRequiredInputs = [];
        if(document.getElementById('itemName').value === ''){
            unfilledRequiredInputs.push('itemName')
        }if(document.getElementById('numberRemaining').value === ''){
            unfilledRequiredInputs.push('numberRemaining')
        }if(document.getElementById('reorderLevel').value === ''){
            unfilledRequiredInputs.push('reorderLevel')
        }if(document.getElementById('averageUnitCost').value === ''){
            unfilledRequiredInputs.push('averageUnitCost')
        }
        return unfilledRequiredInputs
    }

    

    categoryOptions(){
        let allCategories = this.props.allCategories();
        return(
            <>
                <option value={null}>Select a category</option>
                {allCategories.map((category)=>{
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

            <section className="card">
                <div className="card-body">
                    <form className="bg-white">
                        <div className="form-group row">
                            <label htmlFor="itemName" className="col-sm-2 col-form-label col-form-label-sm">
                                Item Name <span className="text-warning h5"> *</span>
                            </label>
                            <div className="col-sm-6">
                                <input type="text" className="form-control form-control-sm" id="itemName" onChange={this.handleChange}/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="category" className="col-sm-2 col-form-label col-form-label-sm">Category</label>
                            <div className="col-sm-3">
                                <select className="form-control form-control-sm" id="category" onChange={this.handleChange}>
                                    {this.categoryOptions()}
                                </select>
                            </div>
                            <div className="col-sm-3">
                                <input type="text" className="form-control form-control-sm" id="newCategory" onChange={this.handleChange} placeholder="New Category"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="manufacturer" className="col-sm-2 col-form-label col-form-label-sm">Manufacturer</label>
                            <div className="col-sm-6">
                                <input type="text" className="form-control form-control-sm" id="manufacturer" onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="partNumber" className="col-sm-2 col-form-label col-form-label-sm">Part Number</label>
                            <div className="col-sm-4">
                                <input type="text" className="form-control form-control-sm" id="partNumber"  onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="model" className="col-sm-2 col-form-label col-form-label-sm">Model</label>
                            <div className="col-sm-6">
                                <input type="text" className="form-control form-control-sm" id="model" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="serialNumber" className="col-sm-2 col-form-label col-form-label-sm">Serial Number</label>
                            <div className="col-sm-6">
                                <input type="text" className="form-control form-control-sm" id="serialNumber"  onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="numberRemaining" className="col-sm-2 col-form-label col-form-label-sm">
                                On hand <span className="text-warning h5"> *</span>
                            </label>
                            <div className="col-sm-4">
                                <input type="number" className="form-control form-control-sm" id="numberRemaining"  onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="reorderLevel" className="col-sm-2 col-form-label col-form-label-sm">
                                Reorder Level<span className="text-warning h5"> *</span>
                            </label>
                            <div className="col-sm-4">
                                <input type="number" className="form-control form-control-sm" id="reorderLevel"  onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="initialCost" className="col-sm-2 col-form-label col-form-label-sm">
                                Cost<span className="text-warning h5"> *</span>
                            </label>
                            <div className="col-sm-4">
                                <input type="text" className="form-control form-control-sm" id="averageUnitCost"   onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Description</label>
                            <div className="col-sm-6">
                                <textarea rows="3" className="form-control w-100 rounded" id="description"  onChange={this.handleChange}>

                                </textarea>
                            </div>
                        </div>
                        <input type="submit" className="btn btn-sm btn-success mr-2" value="Save"  onClick={this.handleSubmit}/>
                    </form>
                </div>
            </section>

            
        )
    }
}