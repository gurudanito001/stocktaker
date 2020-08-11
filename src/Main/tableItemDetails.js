import React from 'react';
import EditItemForm from './editItemForm';

export default class TableItemDetails extends React.Component{

    returnValue = (value)=>{
        if(value === ''){
            return 'Not Specified'
        }else {
            return value
        } 
    }

    render(){
        let month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
        let today = new Date();
        let date = today.getDate()+'/'+(today.getMonth()+1)+ '/'+ today.getFullYear();
        return(
            <>

            <section className="card">
                <header className="card-header bg-white clearfix">
                    <h5 className="d-inline-block text-secondary mb-0">Details For <span className="text-info">{this.props.itemName}</span></h5>
                </header>
                <div className="card-body clearfix">
                        <div className="row mb-0">
                            <span className="col-sm-2 text-secondary">Spare Part Name</span>
                            <span className="col-sm-6">{this.returnValue(this.props.itemName)}</span>
                            <span className="col-sm-4">
                                <button className="btn btn-sm btn-outline-secondary float-right" data-toggle="modal" data-target="#exampleModal">Edit</button>
                            </span>
                            
                        </div>

                        <div className="row mb-2">
                            <span className="col-sm-2 text-secondary">Spare Part Number</span>
                            <span className="col-sm-6">{this.returnValue(this.props.partNumber)}</span>
                        </div>


                        <div className="row mb-2">
                            <span className="col-sm-2 text-secondary">Manufacturer</span>
                            <span className="col-sm-6">{this.returnValue(this.props.manufacturer)}</span>
                        </div>

                        <div className="row mb-2">
                            <span className="col-sm-2 text-secondary">Model</span>
                            <span className="col-sm-6">{this.returnValue(this.props.model)}</span>
                        </div>

                        <div className="row mb-2">
                            <span className="col-sm-2 text-secondary">Serial Number</span>
                            <span className="col-sm-6">{this.returnValue(this.props.serialNumber)}</span>
                        </div>

                        <div className="row mb-2">
                            <span className="col-sm-2 text-secondary">Category</span>
                            <span className="col-sm-6">{this.returnValue(this.props.category)}</span>
                        </div>

                        <div className="row mb-2">
                            <span className="col-sm-2 text-secondary">On Hand</span>
                            <span className="col-sm-6">{this.returnValue(this.props.numberRemaining)}</span>
                        </div>

                        <div className="row mb-2">
                            <span className="col-sm-2 text-secondary">Reorder Level</span>
                            <span className="col-sm-6">{this.returnValue(this.props.reorderLevel)}</span>
                        </div>

                        <div className="row mb-2">
                            <span className="col-sm-2 text-secondary">Average Unit Cost</span>
                            <span className="col-sm-6">{this.returnValue(this.props.cost)}</span>
                        </div>

                        <div className="row mb-2">
                            <span className="col-sm-2 text-secondary">Created On</span>
                            <span className="col-sm-6">{date + ' '}({this.returnValue(this.props.currentUser)})</span>
                        </div>

                        <div className="row mb-2">
                            <span className="col-sm-2 text-secondary">Description</span>
                            <span className="col-sm-6">{this.returnValue(this.props.description)}</span>
                        </div>
                </div>
                
                <div className="card-footer">
                    <header className="clearfix">
                        <h6 className="text-secondary d-inline-block">Statistics For {month[today.getMonth()]} {new Date().getFullYear()} </h6>
                        <button className="btn btn-link float-right py-0 text-secondary" onClick={()=>{
                            this.props.setNewScreen('Item History', 'Item History')
                            this.props.itemHistory(this.props.position)
                        }}>View History</button>
                    </header>

                    <div className="dropdown-divider"></div>
                    <table className="table table-borderless">
                        <tbody>
                            <tr>
                            <td className="text-center lead text-info">15</td>
                            <td className="text-center lead text-info">{this.props.totalNumberPurchased}</td>
                            <td className="text-center lead text-info">{this.props.totalNumberUsed}</td>
                            <td className="text-center lead text-info">{this.props.numberRemaining}</td>
                            <td className="text-center lead text-info">₦{Math.ceil(this.props.totalNumberUsed * this.props.cost / 100) * 100}</td>
                            <td className="text-center lead text-info">₦{Math.ceil(this.props.numberRemaining * this.props.cost / 100) * 100}</td>
                            </tr>
                            <tr>
                            <th className="text-center py-0 border-right" scope="col">Began Month With</th>
                            <th className="text-center py-0 border-right" scope="col">Number Purchased</th>
                            <th className="text-center py-0 border-right" scope="col">Number Used</th>
                            <th className="text-center py-0 border-right" scope="col">Number On Hand</th>
                            <th className="text-center py-0 border-right" scope="col">Value Used</th>
                            <th className="text-center py-0 " scope="col">Value On Hand</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>





            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-secondary" id="exampleModalLabel">Edit {this.props.itemName} Details</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <EditItemForm 
                                position={this.props.position}
                                itemName={this.props.itemName}
                                category={this.props.category}
                                manufacturer={this.props.manufacturer}
                                partNumber={this.props.partNumber}
                                model={this.props.model}
                                serialNumber={this.props.serialNumber}
                                reorderLevel={this.props.reorderLevel}
                                description={this.props.description}
                                onSubmit={this.props.updateDetails}
                                setSuccessMessage={this.props.setSuccessMessage}
                                setWarningMessage={this.props.setWarningMessage}
                                doesItemNameExistInTable ={this.props.doesItemNameExistInTable}
                                allCategories={this.props.allCategories}
                            />
                        </div>
                    </div>
                </div>
            </div>
            </>
            
        )
    }
}





