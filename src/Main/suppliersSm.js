import React from 'react';


export default class SuppliersSm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            id: this.props.id,
            ['name' + this.props.id]: '',
            ['phoneNumber' + this.props.id]: '',
            ['warehouseAddress' + this.props.id]: '',
            ['email' + this.props.id]: '',
            ['itemsSupplied' + this.props.id]: []
        };
    }

    handleChange = (event)=>{
        this.setState({ [event.target.id]: event.target.value });
        console.log(this.state);
    }

   handleSubmit = (event)=>{
        event.preventDefault()
        /* console.log(this.state)
        this.props.onSubmit(this.state); */
    }
    
    makeFieldsEditable = (id)=>{
        const allFieldsIds = [('name' + id), ('phoneNumber' + id),('warehouseAddress' + id),
        ('email' + id)];
        allFieldsIds.map((itemId)=>{
            document.getElementById(itemId).readOnly = false;
            document.getElementById(itemId).classList.remove('border-0')
        })
        this.toggleSaveAndEdit(id);
    }
    makeFieldsReadOnly = (id)=>{
        const allFieldsIds = [('name' + id), ('phoneNumber' + id),('warehouseAddress' + id),
        ('email' + id)];
        allFieldsIds.map((itemId)=>{
            document.getElementById(itemId).readOnly = true;
            document.getElementById(itemId).classList.add('border-0');
        })
        this.toggleSaveAndEdit(id);
    }

    toggleSaveAndEdit = (id)=>{
        if(document.getElementById('save-btn' + id).classList.contains('d-none')){
            document.getElementById('save-btn' + id).classList.remove('d-none')
            document.getElementById('edit-btn' + id).classList.add('d-none')
        }else if(document.getElementById('edit-btn' + id).classList.contains('d-none')){
            document.getElementById('edit-btn' + id).classList.remove('d-none')
            document.getElementById('save-btn' + id).classList.add('d-none')
        }
    }

    listOfSuppliedItems = ()=>{
        return(
        this.props.itemsSupplied.map((item)=>{
            return(
                <h5 key={this.props.itemsSupplied.indexOf(item)} className="d-inline-block mb-0 mr-2">
                    <span className="badge badge-secondary small p-2">{item}</span>
                </h5>
            )
        })
        )
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
                    <label className="d-flex align-items-center h6 px-0 pl-3 col-10 col-sm-4 mb-0 font-weight-bold text-secondary">Name</label>
                    <div className="col-10 col-sm-6 px-0">
                        <input type="text" style={styles.input} className="form-control border-0 bg-white font-weight-bold px-0 pl-3 py-0" 
                        readOnly defaultValue={this.props.name} onChange={this.handleChange} id={'name' + this.props.id} />
                    </div>
                    <div className="col-2 d-inline-block clearfix px-0">
                        <button className="btn btn-sm btn-outline-secondary float-right mr-1 mr-sm-3"
                            onClick={() => this.makeFieldsEditable(this.props.id)}
                            id={'edit-btn' +  + this.props.id} >Edit
                        </button>

                        <button className="btn btn-sm btn-outline-success float-right d-none mr-1 mr-sm-3"
                            onClick={() => this.makeFieldsReadOnly(this.props.id)}
                            id={'save-btn' + this.props.id}>
                            Save
                        </button>
                    </div>
                </div>

                <div className="form-group row border-bottom mb-2">
                    <label className="d-flex align-items-center h6 px-0 pl-3 col-10 col-sm-4 mb-0 font-weight-bold text-secondary">
                        Phone Number
                    </label>
                    <div className="col-10 col-sm-6 px-0">
                        <input type="text" style={styles.input} className="form-control border-0 bg-white font-weight-bold  px-0 pl-3 py-0" 
                        readOnly defaultValue={this.props.phoneNumber} onChange={this.handleChange} id={'phoneNumber' + this.props.id} />
                    </div>
                </div>

                <div className="form-group row border-bottom mb-2">
                    <label className="d-flex align-items-center h6 px-0 pl-3 col-10 col-sm-4 mb-0 font-weight-bold text-secondary">
                        Warehouse Address
                    </label>
                    <div className="col-10 col-sm-6 px-0">
                        <input type="text" style={styles.input} className="form-control border-0 bg-white font-weight-bold px-0 pl-3 py-0" 
                         readOnly defaultValue={this.props.warehouseAddress} onChange={this.handleChange} id={'warehouseAddress' + this.props.id} />
                    </div>
                </div>

                <div className="form-group row border-bottom mb-2">
                    <label className="d-flex align-items-center h6 px-0 pl-3 col-10 col-sm-4 mb-0 font-weight-bold text-secondary">
                        Email
                    </label>
                    <div className="col-10 col-sm-6 px-0">
                        <input type="text" style={styles.input} className="form-control border-0 bg-white font-weight-bold px-0 pl-3 py-0"  
                        readOnly defaultValue={this.props.email} onChange={this.handleChange} id={'email' + this.props.id} />
                    </div>
                </div>

                <div className="form-group row border-bottom mb-2">
                    <label className="d-flex align-items-center h6 px-0 pl-3 col-10 col-sm-4 mb-0 font-weight-bold text-secondary">
                        Items Supplied
                    </label>
                    <div className="col-12 col-sm-8">
                        {this.listOfSuppliedItems()}
                    </div>
                </div>
            </form>
            </>
        )
    }
}