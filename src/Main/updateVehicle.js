import React from 'react';


export default class UpdateVehicle extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            position: this.props.position,
            number: this.props.number,
            description:  this.props.description,
        };
    }

    handleChange = (event)=>{
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit = (event)=>{
        event.preventDefault()
        this.props.onSubmit(this.state);
        //document.getElementById('closeEditVehicleModal').click()
    }

    render() {
        console.log(this.props.position)
        return (
            
            <form className="bg-white p-0">
                <div className="form-group row">
                    <label htmlFor="number" className="col-md-3 pr-0 col-form-label col-form-label-sm">
                        Plate Number <span className="text-warning h5"> *</span>
                    </label>
                    <div className="col-md-9">
                        <input type="text" className="form-control form-control-sm" id="number" onChange={this.handleChange} defaultValue={this.props.dataOfVehicleToUpdate(this.props.position).number}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="description" className="col-md-3 pr-0 col-form-label col-form-label-sm">
                        Description
                    </label>
                    <div className="col-md-9">
                        <textarea className="form-control" id="description" onChange={this.handleChange} defaultValue={this.props.description} >
                        </textarea>
                    </div>
                </div>
                <input type="submit" className="btn btn-sm btn-success float-right" onClick={this.handleSubmit} value="Submit"/>
            </form>
        )
    }
} 