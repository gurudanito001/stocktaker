import React from 'react';



class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (event)=> {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit = (event)=> {
        event.preventDefault()
        this.props.onSubmit(this.state)
    }

    render(){
        return(
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="password"  onChange={this.handleChange}/>
                </div>
                <button type="submit" class="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
            </form>
        )
    }
}



class Register extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            name: '',
            email: '',
            mobile_phone: '',
            password: '',
            password_confirmation: ''
        }
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault()
        
    }

    render(){
        return(
            <form>
                <div className="form-group">
                    <label for="exampleInputName">Full Name</label>
                    <input type="text" className="form-control" id="exampleInputName" aria-describedby="NameHelp" />
                </div>
                <div className="form-group">
                    <label for="exampleInputPhone">Phone Number</label>
                    <input type="text" className="form-control" id="exampleInputPhone" aria-describedby="PhoneHelp" />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword2">Confirm Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword2" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}


export default class LoginOrRegister extends React.Component{
    /* constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    } */

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }
    

    render(){
        const styles = {
            body:{
                backgroundColor: '#3a3f51',
                height: '100vh',
            },
            card: {
                width: '380px'
            },
            navTabs: {
                boxShadow: 'none'
            }
        }
        return(
            <section className="d-flex align-items-center justify-content-center" style={styles.body}>
                
                <div style={styles.card}>
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item w-50">
                            <a className="nav-link btn text-white active" style={styles.navTabs} id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Login</a>
                        </li>
                        <li className="nav-item w-50">
                            <a className="nav-link btn text-white" style={styles.navTabs} id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Register</a>
                        </li>
                    </ul>
                    <div className="tab-content card" id="pills-tabContent">
                        <div className="tab-pane fade show active p-3" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <Login onSubmit={this.props.onSubmit}/>
                        </div>

                        <div className="tab-pane fade p-3" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <Register />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}