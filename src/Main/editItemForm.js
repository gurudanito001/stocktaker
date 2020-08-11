import React from 'react';


export default class EditItemForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            id: '',
            itemName: this.props.itemName,
            category: this.props.category,
            manufacturer: this.props.manufacturer,
            partNumber: this.props.partNumber,
            model: this.props.model,
            serialNumber:this.props.serialNumber,
            reorderLevel: this.props.reorderLevel,
            description: this.props.description
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
        }
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        const data = this.state;
        if(this.props.doesItemNameExistInTable(this.props.position, data) === false){
            this.props.onSubmit(this.props.position, data);
            document.getElementById('cancelEditItemForm').click();
            this.props.setSuccessMessage('This item has been updated')
        }else{
            this.props.setWarningMessage('This item already exists')
        }
    }

    categoryOptions(){
        let allCategories = this.props.allCategories;
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
            <form className="bg-white">
                <div className="form-group row">
                    <label htmlFor="itemName" className="col-sm-4 col-form-label col-form-label-sm">
                        Item Name
                    </label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control form-control-sm" id="itemName" defaultValue={this.props.itemName} onChange={this.handleChange}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 col-form-label col-form-label-sm">Category</label>
                    <div className="col-sm-4 pr-0">
                        <select className="form-control form-control-sm" id="category" onChange={this.handleChange}>
                            {this.categoryOptions()}
                        </select>
                    </div>
                    <div className="col-sm-4 pl-0">
                        <input type="text" className="form-control form-control-sm" id="newCategory" placeholder="New Category"  onChange={this.handleChange}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="manufacturer" className="col-sm-4 col-form-label col-form-label-sm">Manufacturer</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control form-control-sm" id="manufacturer" defaultValue={this.props.manufacturer} onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="partNumber" className="col-sm-4 col-form-label col-form-label-sm">Part Number</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control form-control-sm" id="partNumber" defaultValue={this.props.partNumber} onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="model" className="col-sm-4 col-form-label col-form-label-sm">Model</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control form-control-sm" id="model" defaultValue={this.props.model} onChange={this.handleChange} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="serialNumber" className="col-sm-4 col-form-label col-form-label-sm">Serial Number</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control form-control-sm" id="serialNumber" defaultValue={this.props.serialNumber}  onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="reorderLevel" className="col-sm-4 col-form-label col-form-label-sm">
                        Reorder Level
                    </label>
                    <div className="col-sm-8">
                        <input type="number" className="form-control form-control-sm" id="reorderLevel" defaultValue={this.props.reorderLevel}  onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="colFormLabelSm" className="col-sm-4 col-form-label col-form-label-sm">Description</label>
                    <div className="col-sm-8">
                        <textarea rows="3" className="w-100 rounded"  defaultValue={this.props.description} id="description"  onChange={this.handleChange}>

                        </textarea>
                    </div>
                </div>
                <input type="submit" className="btn btn-sm btn-success float-right" onClick={this.handleSubmit} value="Save" />
                <a className="btn btn-sm btn-secondary text-white float-right mr-2" id="cancelEditItemForm" data-dismiss="modal">Cancel</a>
            </form>

            
        )
    }
}