import React from 'react';



export default class VehicleInfo extends React.Component{

    render() {
        return (
            <>
            <section className="card p-3 my-2 clearfix">
                <div className="row mb-0">
                    <div className="col-10 mb-0">
                        <div className="row">
                            <span className="col-sm-3 text-secondary">Plate Number</span>
                            <span className="col-sm text-dark">{this.props.number}</span>
                        </div>
                    </div>
                    <div className="col-2 px-0 px-sm-3 mb-0 text-center text-sm-right">
                        <button className="btn btn-sm btn-outline-secondary p-1" onClick={()=>{
                            this.props.setVehicleToUpdate(this.props.position)
                        }}
                        data-toggle="modal" data-target="#EditVehicleModalLabel">Edit</button>
                    </div>
                    <div className="col-12 col-sm-10 mt-2 mt-sm-0 mb-0">
                        <div className="row">
                            <span className="col-sm-3 text-secondary">Description</span>
                            <span className="col-sm">{this.props.description}</span>
                        </div>
                    </div>
                </div>

            </section>
            
            </>
        )
    }
}