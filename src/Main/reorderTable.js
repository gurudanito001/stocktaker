import React from 'react';
import ReorderTableItem from './reorderTableItem';


export default class ReorderTable extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            itemList:[
                {itemName:'', quantity:'', supplier:''}
            ]
        };
    }

    addToReorderList = ()=>{
        let allItemsList = this.state.itemList
        allItemsList.push({itemName:'', quantity:'', supplier:''})
        this.setState({itemList: allItemsList})
    }

    itemNamesOptions = ()=>{
        return(
            <>
                <option value="">Spare Part Name</option>
                {this.props.itemNames.map((item)=>{
                    return(
                        <option key={item} value={item}> {item}</option>
                    )
                })
                }
            </>
        )
    }

    /* suppliersOptions = (itemName)=>{
        return(
            <>
                <option value="">Choose Supplier</option>
                {this.props.suppliers(itemName).map((item)=>{
                    console.log(item)
                    return(
                        <option key={item} value={item}> {item}</option>
                    )
                })
                }
            </>
        )
    } */

    updateItemListState = (newValue)=>{
        let allItemsList = this.state.itemList;
        allItemsList.map((item)=>{
            if(this.state.itemList.indexOf(item) === newValue.id){
                allItemsList[this.state.itemList.indexOf(item)] = newValue;
            }
        })
        this.setState({itemList: allItemsList})
    }



    handleSubmit = (event)=>{
        event.preventDefault()
        this.props.handleSubmit(this.state.itemList);
    }

    clearState(data){
        if(this.props.onSubmit(data) === false){
            this.setState({
                id: '',itemName: '',numberUsed: '',numberRemaining: '',reorderLevel: '',lastReorder: ''
            })
        }
    } 

    render() {
        return (
            <>
            <header className="clearfix">
                <h4 className="float-left text-secondary">Reorder Items</h4>
            </header>
            <form className="card clearfix" onSubmit={this.handleSubmit}>
                <table className="table card-body">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">ItemName</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Supplier</th>
                            <th scope="col" className="py-1 clearfix"><button className="btn btn-sm btn-outline-secondary float-right" onClick={this.addToReorderList}>+Add to List</button></th>
                        </tr>
                    </thead>
                
                    <tbody>
                        {this.state.itemList.map((item) => {
                            return (
                                <tr key={this.state.itemList.indexOf(item)} >
                                    <ReorderTableItem
                                    id ={this.state.itemList.indexOf(item)} 
                                    key={this.state.itemList.indexOf(item)}
                                    selectOptions={this.itemNamesOptions()}
                                    suppliers={this.props.suppliers}
                                    updateFunc={this.updateItemListState}/>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <div className="card-footer">
                    <input type="submit" className="btn btn-sm btn-success float-right" value="Submit"/>
                </div>
            </form>
            
          </>
        )
    }
}