import React from 'react';


export default class AddNewVehicle extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            number: '',
            description: '',
        };
    }

    handleChange = (event)=>{
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit = (event)=>{
        event.preventDefault()
        this.props.onSubmit(this.state);
        this.clearState();
        document.getElementById('closeNewVehicleModal').click()
    }

    clearState(){
        this.setState({number:'', description:''})
    }

    render() {
        return (
                <form className="bg-white p-0">
                    <div className="form-group row">
                        <label htmlFor="vehicleFor" className="col-md-3 pr-0 col-form-label col-form-label-sm">
                            Plate Number <span className="text-warning h5"> *</span>
                        </label>
                        <div className="col-md-9">
                            <input type="text" className="form-control form-control-sm" id="number" onChange={this.handleChange} value={this.state.number} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="vehicleFor" className="col-md-3 pr-0 col-form-label col-form-label-sm">
                            Description
                        </label>
                        <div className="col-md-9">
                            <textarea className="form-control" id="description" onChange={this.handleChange} value={this.state.description} >
                            </textarea>
                        </div>
                    </div>
                    <input type="submit" className="btn btn-sm btn-success float-right" onClick={this.handleSubmit} value="Submit"/>
                </form>
        )
    }
}