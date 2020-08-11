import React from 'react';


export default class VehicleInfoSm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            vehiclePlateNumber: this.props.vehiclePlateNumber,
            vehicleColor:  this.props.vehicleColor,
            vehicleDriver:  this.props.vehicleDriver,
            lastLisenceRenewal:  this.props.lastLisenceRenewal,
        };
    }

    handleChange = (stateKey,id)=>{
        console.log(id);
        this.setState({ [stateKey]: document.getElementById(id).value});
        console.log(this.state)
    }

   handleSubmit = (event)=>{
        event.preventDefault()
    }

    makeFieldsEditable(vehiclePlateNumber){
        const allFieldsIds = [(vehiclePlateNumber + 'text'), (vehiclePlateNumber + 'color'),(vehiclePlateNumber + 'driver'),
        (vehiclePlateNumber + 'lastLisenceRenewal')]
        allFieldsIds.map((id)=>{
            document.getElementById(id).readOnly = false;
            document.getElementById(id).classList.remove('border-0')
        }) 
        this.toggleSaveAndEdit(vehiclePlateNumber);
    }
    makeFieldsReadOnly(vehiclePlateNumber){
        const allFieldsIds = [(vehiclePlateNumber + 'text'), (vehiclePlateNumber + 'color'),(vehiclePlateNumber + 'driver'),(vehiclePlateNumber + 'lastLisenceRenewal')]
        allFieldsIds.map((id)=>{
            document.getElementById(id).readOnly = true;
            document.getElementById(id).classList.add('border-0')
        })
        this.toggleSaveAndEdit(vehiclePlateNumber);
    }

    toggleSaveAndEdit(vehiclePlateNumber){
        if(document.getElementById(vehiclePlateNumber + 'save-btn').classList.contains('d-none')){
            document.getElementById(vehiclePlateNumber + 'save-btn').classList.remove('d-none')
            document.getElementById(vehiclePlateNumber + 'edit-btn').classList.add('d-none')
        }else if(document.getElementById(vehiclePlateNumber + 'edit-btn').classList.contains('d-none')){
            document.getElementById(vehiclePlateNumber + 'edit-btn').classList.remove('d-none')
            document.getElementById(vehiclePlateNumber + 'save-btn').classList.add('d-none')
        }
    }

    renderHistory = ()=>{
        if(this.props.history !== undefined){
            return(
                this.props.history.map((history) =>{
                    return(
                        <tr key={this.props.history.indexOf(history)}>
                            <td>
                                {history.itemList.map((item) =>{
                                    return(
                                        <button key={item.itemName} type="button" className="btn btn-sm btn-info mr-1">
                                            {item.itemName} <span className="badge badge-light">{item.quantity}</span>
                                        </button>
                                    )
                                })}
                            </td>
                            <td>{history.purpose}</td>
                            <td>{history.authorizedBy}</td>
                            <td>{history.dateGiven}</td>
                        </tr>
                    )
                })
            )
        }
    }

    render() {
        const styles = {
            input:{
                boxShadow: 'none',
                color: '#4A5A95',
            },
            editnSaveBtn:{
                position: 'absolute',
                top: '.5rem',
                right: '.5rem',
                zIndex: '10',
                display: 'block',
                padding: '.25rem .5rem',
                fontSize: '75%',
                color: '#818a91',
                backgroundColor:'transparent',
                border: '0',
                borderRadius: '.25rem'
            }
        }

        return (
            <>
            <form className="container-fluid bg-white py-3 rounded clearfix mb-3" onSubmit={this.handleSubmit}>
                <div className="form-group row border-bottom mb-2">
                    <label className="d-flex align-items-center h6 px-0 pl-3 col-10 col-sm-4 mb-0 font-weight-bold">Vehicle Plate Number</label>
                    <div className="col-10 col-sm-6 px-0">
                        <input type="text" style={styles.input} className="form-control border-0 bg-white font-weight-bold px-0 pl-3 py-0" 
                        readOnly defaultValue={this.props.vehiclePlateNumber} onChange = {()=>{
                            this.handleChange('vehiclePlateNumber',this.props.vehiclePlateNumber + 'text')
                        }} 
                        id={this.props.vehiclePlateNumber + 'text'} />
                    </div>
                    <div className="col-2 d-inline-block clearfix px-0">
                        <button className="btn btn-sm btn-outline-secondary float-right mr-1 mr-sm-3"
                            onClick={() => this.makeFieldsEditable(this.props.vehiclePlateNumber)}
                            id={this.props.vehiclePlateNumber + 'edit-btn'} >Edit
                        </button>

                        <a className="btn btn-sm btn-outline-success float-right d-none mr-1 mr-sm-3"
                            onClick={(event) =>{
                                 event.preventDefault()
                                 this.makeFieldsReadOnly(this.props.vehiclePlateNumber)
                                 this.props.updateFunc(this.props.position, this.state)
                                }
                            }
                            id={this.props.vehiclePlateNumber + 'save-btn'}>
                            Save
                        </a>
                    </div>
                </div>

                <div className="form-group row border-bottom mb-2">
                    <label className="d-flex align-items-center h6 px-0 pl-3 col-10 col-sm-4 mb-0 font-weight-bold">
                        Vehicle Color
                    </label>
                    <div className="col-10 col-sm-6 px-0">
                        <input type="text" style={styles.input} className="form-control border-0 bg-white font-weight-bold  px-0 pl-3 py-0" 
                        readOnly defaultValue={this.props.vehicleColor} onChange = {()=>{
                            this.handleChange('vehicleColor',this.props.vehiclePlateNumber + 'color')
                        }}  
                        id={this.props.vehiclePlateNumber + 'color'} />
                    </div>
                </div>

                <div className="form-group row border-bottom mb-2">
                    <label className="d-flex align-items-center h6 px-0 pl-3 col-10 col-sm-4 mb-0 font-weight-bold">
                        Vehicle Driver
                    </label>
                    <div className="col-10 col-sm-6 px-0">
                        <input type="text" style={styles.input} className="form-control border-0 bg-white font-weight-bold px-0 pl-3 py-0" 
                         readOnly defaultValue={this.props.vehicleDriver} onChange = {()=>{
                            this.handleChange('vehicleDriver',this.props.vehiclePlateNumber + 'driver')
                        }}  
                        id={this.props.vehiclePlateNumber + 'driver'} />
                    </div>
                </div>

                <div className="form-group row border-bottom mb-2">
                    <label className="d-flex align-items-center h6 px-0 pl-3 col-10 col-sm-4 mb-0 font-weight-bold">
                        Last Lisence Renewal
                    </label>
                    <div className="col-10 col-sm-6 px-0">
                        <input type="date" style={styles.input} className="form-control border-0 bg-white font-weight-bold px-0 pl-3 py-0"  
                        readOnly defaultValue={this.props.lastLisenceRenewal} onChange = {()=>{
                            this.handleChange('lastLisenceRenewal',this.props.vehiclePlateNumber + 'lastLisenceRenewal')
                        }}  
                         id={this.props.vehiclePlateNumber + 'lastLisenceRenewal'} />
                    </div>
                </div>

                


                <div className="accordion w-100 clearfix" id="accordionExample">
                    <div className="card">
                        <div className="card-header p-0" id="headingOne">
                                <button className="btn btn-link text-decoration-none" type="button" data-toggle="collapse" data-target={"#" + this.props.vehiclePlateNumber + 'collapse'} aria-expanded="true" aria-controls="collapseOne">
                                    Spare Part Usage History
                                </button>
                        </div>

                        <div id={this.props.vehiclePlateNumber + 'collapse'} className="collapse"  data-parent="#accordionExample">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Items Used</th>
                                            <th scope="col">Purpose</th>
                                            <th scope="col">Authorized By</th>
                                            <th scope="col">Date Given</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.renderHistory()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            </>
        )
    }
}