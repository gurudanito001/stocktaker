import React from 'react';
import moreOptions from '../images/more-options.svg';
import PurchaseHistory from './purchaseHistory';
import UsageHistory from './usageHistory';

export default class ItemHistory extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            windowWidth: window.innerWidth,
        }
    }

    
    render(){

        return(
            <section className="card">
                <header className="card-header bg-white clearfix">
                    <h5 className="d-inline-block text-secondary mb-0">{this.props.itemName} History</h5>
                </header>
                
                <div className="card-body clearfix">

                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <a className="nav-link active" onClick={()=>{console.log(this.props.history.purchase)}}
                            id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Purchase</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link"  onClick={()=>{console.log(this.props.history.usage)}}
                            id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Usage</a>
                        </li>
                        {/* <li className="nav-item" role="presentation">
                            <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Adjustments</a>
                        </li> */}
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-purchase-tab">
                            <PurchaseHistory 
                            purchaseHistory={this.props.history.purchase}/>
                        </div>
                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-usage-tab">
                            <UsageHistory 
                            usageHistory={this.props.history.usage}/>
                        </div>
                        {/* <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-adjustment-tab">...</div> */}
                    </div>
                </div>
            </section>
        )
    }
}