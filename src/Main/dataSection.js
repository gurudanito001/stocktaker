import React, { Fragment } from 'react';
import NewtableItemform from './addNewITemForm'
import TableItemLg from './tableItem-lg';
import TableItemSm from './tableItem-sm';
import TableItemDetails from './tableItemDetails';
import PurchaseItem from './purchaseItem';
import UseItems from './useItems';
import VehicleInfo from './vehicleInfo';
import ItemHistory from './itemHistory';
import AppHistory from './appHistory';
import AddNewVehicle from './addNewVehicle';
import UpdateVehicle from './updateVehicle';

export default class DataSection extends React.Component{

    constructor(props){
        super(props);
        this.state = { 
            alertDisplayWarning: false,
            alertDisplaySuccess: false,
            alertMessageWarning: '',
            alertMessageSuccess: '',
            currentScreen: '',
            currentUser: 'Daniel Nwokocha',
            displayInfoOfItemNum: 0,
            updateVehicleAtPosition: 0,
            windowWidth: window.innerWidth,
            tableItems: [
                {   
                    id: '1',
                    partNumber: '1232267',
                    itemName: 'Brake Lining',
                    manufacturer: 'Mercedes',
                    model: 'Truck Model',
                    serialNumber: '00199872',
                    category: 'Brakes',
                    numberRemaining: 30,
                    reorderLevel: 15,
                    averageUnitCost:2000,
                    description: 'This is the description for Brakes',
                    history: {
                        
                        purchase:[
                            {datePurchased:'2020-06-07', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'},
                            {datePurchased:'2020-06-06', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'},
                            {datePurchased:'2020-06-05', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'},
                            {datePurchased:'2020-06-04', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'},
                            {datePurchased:'2020-06-03', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'}
                        ],
                        usage:[
                            {dateUsed:'2020-06-07', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'},
                            {dateUsed:'2020-06-06', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'},
                            {dateUsed:'2020-06-05', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'},
                            {dateUsed:'2020-06-04', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'},
                            {dateUsed:'2020-06-03', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'}

                        ],
                        adjustments:[]
                    }
                },
                {   
                    id: '2',
                    partNumber: '1232267',
                    itemName: 'Clutch Cylinder',
                    manufacturer: 'Mercedes',
                    model: 'Truck Model',
                    serialNumber: '00199872',
                    category: 'Gear Box',
                    numberRemaining: 30,
                    reorderLevel: 15,
                    averageUnitCost:2000,
                    description: 'This is the description for Clutch Cylinder',
                    history: {
                        
                        purchase:[
                            {datePurchased:'2020-06-07', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'},
                            {datePurchased:'2020-06-06', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'},
                            {datePurchased:'2020-06-05', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'},
                            {datePurchased:'2020-06-04', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'},
                            {datePurchased:'2020-06-03', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'}
                        ],
                        usage:[
                            {dateUsed:'2020-06-07', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'},
                            {dateUsed:'2020-06-06', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'},
                            {dateUsed:'2020-06-05', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'},
                            {dateUsed:'2020-06-04', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'},
                            {dateUsed:'2020-06-03', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'}

                        ],
                        adjustments:[]
                    }
                },
                {   
                    id: '3',
                    partNumber: '',
                    itemName: 'Complete Differential',
                    manufacturer: 'Mercedes',
                    model: 'Truck Model',
                    serialNumber: '00199872',
                    category: 'Body Parts',
                    numberRemaining: 30,
                    reorderLevel: 15,
                    averageUnitCost:2000,
                    description: 'This is the description for Complete Differential',
                    history: {
                        
                        purchase:[
                            {datePurchased:'2020-06-07', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'},
                            {datePurchased:'2020-06-06', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'},
                            {datePurchased:'2020-06-05', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'},
                            {datePurchased:'2020-06-04', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'},
                            {datePurchased:'2020-06-03', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'}
                        ],
                        usage:[
                            {dateUsed:'2020-06-07', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'},
                            {dateUsed:'2020-06-06', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'},
                            {dateUsed:'2020-06-05', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'},
                            {dateUsed:'2020-06-04', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'},
                            {dateUsed:'2020-06-03', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'}

                        ],
                        adjustments:[]
                    }
                },
                {   
                    id: '4',
                    partNumber: '1232267',
                    itemName: 'Compressor',
                    manufacturer: 'Mercedes',
                    model: 'Truck Model',
                    serialNumber: '00199872',
                    category: 'Reservoir',
                    numberRemaining: 30,
                    reorderLevel: 15,
                    averageUnitCost:2000,
                    description: 'This is the description for Compressor',
                    history: {
                        
                        purchase:[
                            {datePurchased:'2020-06-07', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'},
                            {datePurchased:'2020-06-06', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'},
                            {datePurchased:'2020-06-05', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'},
                            {datePurchased:'2020-06-04', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'},
                            {datePurchased:'2020-06-03', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'}
                        ],
                        usage:[
                            {dateUsed:'2020-06-07', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'},
                            {dateUsed:'2020-06-06', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'},
                            {dateUsed:'2020-06-06', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'},
                            {dateUsed:'2020-06-04', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'},
                            {dateUsed:'2020-06-03', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'}

                        ],
                        adjustments:[]
                    }
                },
                {   
                    id: '5',
                    partNumber: '1232267',
                    itemName: 'Cooling Filter',
                    manufacturer: 'Mercedes',
                    model: 'Truck Model',
                    serialNumber: '00199872',
                    category: 'Engine',
                    numberRemaining: 30,
                    reorderLevel: 15,
                    averageUnitCost:2000,
                    description: 'This is the description for Cooling Filter',
                    history: {
                        
                        purchase:[
                            {datePurchased:'2020-06-07', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'},
                            {datePurchased:'2020-06-06', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'},
                            {datePurchased:'2020-06-05', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'},
                            {datePurchased:'2020-06-04', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'},
                            {datePurchased:'2020-06-03', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'}
                        ],
                        usage:[
                            {dateUsed:'2020-06-07', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'},
                            {dateUsed:'2020-06-06', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'},
                            {dateUsed:'2020-06-05', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'},
                            {dateUsed:'2020-06-04', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'},
                            {dateUsed:'2020-06-03', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'}

                        ],
                        adjustments:[]
                    }
                },
                {   
                    id: '6',
                    partNumber: '1232267',
                    itemName: 'Cooling Pump',
                    manufacturer: 'Mercedes',
                    model: 'Truck Model',
                    serialNumber: '00199872',
                    category: 'Engine',
                    numberRemaining: 30,
                    reorderLevel: 15,
                    averageUnitCost:2000,
                    description: 'This is the description for Cooling Pump',
                    history: {
                        
                        purchase:[
                            {datePurchased:'2020-06-07', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'},
                            {datePurchased:'2020-06-06', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'},
                            {datePurchased:'2020-06-05', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'},
                            {datePurchased:'2020-06-04', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'},
                            {datePurchased:'2020-06-03', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'}
                        ],
                        usage:[
                            {dateUsed:'2020-06-07', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'},
                            {dateUsed:'2020-06-06', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'},
                            {dateUsed:'2020-06-05', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'},
                            {dateUsed:'2020-06-04', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'},
                            {dateUsed:'2020-06-03', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'}

                        ],
                        adjustments:[]
                    }
                },
                {   
                    id: '7',
                    partNumber: '1232267',
                    itemName: 'Rear Axle',
                    manufacturer: 'Mercedes',
                    model: 'Truck Model',
                    serialNumber: '00199872',
                    category: 'Body Parts',
                    numberRemaining: 30,
                    reorderLevel: 15,
                    averageUnitCost:2000,
                    description: 'This is the description for Rear Axle',
                    history: {
                        
                        purchase:[
                            {datePurchased:'2020-06-07', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'},
                            {datePurchased:'2020-06-06', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'},
                            {datePurchased:'2020-06-05', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'},
                            {datePurchased:'2020-06-04', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'},
                            {datePurchased:'2020-06-03', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'}
                        ],
                        usage:[
                            {dateUsed:'2020-06-07', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'},
                            {dateUsed:'2020-06-06', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'},
                            {dateUsed:'2020-06-05', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'},
                            {dateUsed:'2020-06-04', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'},
                            {dateUsed:'2020-06-03', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'}

                        ],
                        adjustments:[]
                    }
                },
                {   
                    id: '8',
                    partNumber: '1232267',
                    itemName: 'Tyres-sm-103',
                    manufacturer: 'Mercedes',
                    model: 'Truck Model',
                    serialNumber: '00199872',
                    category: 'Tyres',
                    numberRemaining: 30,
                    reorderLevel: 15,
                    averageUnitCost: 2000,
                    description: 'This is the description for Tyres-sm-103',
                    history: {
                        
                        purchase:[
                            {datePurchased:'2020-06-07', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'},
                            {datePurchased:'2020-06-06', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'},
                            {datePurchased:'2020-06-05', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'},
                            {datePurchased:'2020-06-04', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'},
                            {datePurchased:'2020-06-03', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'}
                        ],
                        usage:[
                            {dateUsed:'2020-06-07', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'},
                            {dateUsed:'2020-06-06', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'},
                            {dateUsed:'2020-06-05', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'},
                            {dateUsed:'2020-06-04', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'},
                            {dateUsed:'2020-06-03', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'}

                        ],
                        adjustments:[]
                    }
                },
                {   
                    id: '9',
                    partNumber: '1232267',
                    itemName: 'Tyres-sm-104',
                    manufacturer: 'Mercedes',
                    model: 'Truck Model',
                    serialNumber: '00199872',
                    category: 'Tyres',
                    numberRemaining: 30,
                    reorderLevel: 15,
                    averageUnitCost:2000,
                    description: 'This is the description for Tyres-sm-104',
                    history: {
                        
                        purchase:[
                            {datePurchased:'2020-06-07', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'},
                            {datePurchased:'2020-06-06', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'},
                            {datePurchased:'2020-06-05', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'},
                            {datePurchased:'2020-06-04', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'},
                            {datePurchased:'2020-06-03', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'}
                        ],
                        usage:[
                            {dateUsed:'2020-06-07', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'},
                            {dateUsed:'2020-06-06', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'},
                            {dateUsed:'2020-06-05', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'},
                            {dateUsed:'2020-06-04', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'},
                            {dateUsed:'2020-06-03', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'}

                        ],
                        adjustments:[]
                    }
                },
                {   
                    id: '10',
                    partNumber: '1232267',
                    itemName: 'Tyres-sm-105',
                    manufacturer: 'Mercedes',
                    model: 'Truck Model',
                    serialNumber: '00199872',
                    category: 'Tyres',
                    numberRemaining: 30,
                    reorderLevel: 15,
                    averageUnitCost:2000,
                    description: 'This is the description for Tyres-sm-105',
                    history: {
                        
                        purchase:[
                            {datePurchased:'2020-06-07', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'},
                            {datePurchased:'2020-06-06', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'},
                            {datePurchased:'2020-06-05', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'},
                            {datePurchased:'2020-06-04', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'},
                            {datePurchased:'2020-06-03', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'}
                        ],
                        usage:[
                            {dateUsed:'2020-06-07', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'},
                            {dateUsed:'2020-06-06', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'},
                            {dateUsed:'2020-06-05', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'},
                            {dateUsed:'2020-06-04', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'},
                            {dateUsed:'2020-06-03', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'}

                        ],
                        adjustments:[]
                    }
                },
                {   
                    id: '11',
                    partNumber: '1232267',
                    itemName: 'Tyres-sm-106',
                    manufacturer: 'Mercedes',
                    model: 'Truck Model',
                    serialNumber: '00199872',
                    category: 'Tyres',
                    numberRemaining: 30,
                    reorderLevel: 15,
                    averageUnitCost:2000,
                    description: 'This is the description for Tyres-sm-106',
                    history: {
                        
                        purchase:[
                            {datePurchased:'2020-06-07', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'},
                            {datePurchased:'2020-06-06', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'},
                            {datePurchased:'2020-06-05', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'},
                            {datePurchased:'2020-06-04', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'},
                            {datePurchased:'2020-06-03', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'}
                        ],
                        usage:[
                            {dateUsed:'2020-06-07', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'},
                            {dateUsed:'2020-06-06', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'},
                            {dateUsed:'2020-06-05', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'},
                            {dateUsed:'2020-06-04', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'},
                            {dateUsed:'2020-06-03', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'}

                        ],
                        adjustments:[]
                    }
                },
                
                {   
                    id: '12',
                    partNumber: '1232267',
                    itemName: 'Visco Fan',
                    manufacturer: 'Mercedes',
                    model: 'Truck Model',
                    serialNumber: '00199872',
                    category: 'Engine',
                    numberRemaining: 30,
                    reorderLevel: 15,
                    averageUnitCost:2000,
                    description: 'This is the description for Visco fan',
                    history: {
                        
                        purchase:[
                            {datePurchased:'2020-06-07', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'},
                            {datePurchased:'2020-06-06', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'},
                            {datePurchased:'2020-06-05', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'},
                            {datePurchased:'2020-06-04', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'},
                            {datePurchased:'2020-06-03', quantity:5, cost:15000, supplier:'Supplier Tincan', invoiceNumber: '000124587'}
                        ],
                        usage:[
                            {dateUsed:'2020-06-07', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'},
                            {dateUsed:'2020-06-06', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'},
                            {dateUsed:'2020-06-05', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'},
                            {dateUsed:'2020-06-04', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'},
                            {dateUsed:'2020-06-03', quantity:2, vehicleFor: 'vehicle A', authorizedBy: 'James Kalu', purpose: 'Repairs for vehicle'}

                        ],
                        adjustments:[]
                    }
                },
                
                
                
                
                
                
            ],
            history: {
                purchase: [
                    {itemName: 'Tyres-sm-103', datePurchased:'2020-06-03', quantity:5, cost:15000, supplier:'Supplier Oshodi', invoiceNumber: '000124587'},
                    {itemName: 'Tyres-sm-104', datePurchased:'2020-06-03', quantity:5, cost:15000, supplier:'Supplier Oshodi', invoiceNumber: '000154673'},
                    {itemName: 'Compressor', datePurchased:'2020-06-03', quantity:5, cost:15000, supplier:'Supplier Oshodi', invoiceNumber: '000154673'},
                    {itemName: 'Brakes', datePurchased:'2020-06-03', quantity:5, cost:15000, supplier:'Supplier Oshodi', invoiceNumber: '000154673'},
                    {itemName: 'Gear Box', datePurchased:'2020-06-03', quantity:5, cost:15000, supplier:'Supplier Oshodi', invoiceNumber: '000154673'}
                ],
                usage: [
                    {itemName: 'Tyres-sm-103', dateUsed:'2020-06-03', quantity:2, vehicleFor:'Vehicle A', authorizedBy:'James Kalu', purpose: 'Vehicle Repairs'},
                    {itemName: 'Tyres-sm-104', dateUsed:'2020-06-03', quantity:2, vehicleFor:'Vehicle A', authorizedBy:'James Kalu', purpose: 'Vehicle Repairs'},
                    {itemName: 'Compressor', dateUsed:'2020-06-03', quantity:2, vehicleFor:'Vehicle A', authorizedBy:'James Kalu', purpose: 'Vehicle Repairs'},
                    {itemName: 'Brakes', dateUsed:'2020-06-03', quantity:2, vehicleFor:'Vehicle A', authorizedBy:'James Kalu', purpose: 'Vehicle Repairs'},
                    {itemName: 'Gear Box', dateUsed:'2020-06-03', quantity:2, vehicleFor:'Vehicle A', authorizedBy:'James Kalu', purpose: 'Vehicle Repairs'}
                ],
                edits: [],
            },
            vehicles: [
                {
                    number: "JKY-NGJ-LAG",
                    description: "This is the description of vehicle with plate number JKY-NGJ-LAG"
                },
                {
                    number: "QPT-MOV-LAG",
                    description: "This is the description of vehicle with plate number QPT-MOV-LAG"
                },
                {
                    number: "VFU-NYU-LAG",
                    description: "This is the description of vehicle with plate number VFU-NYU-LAG"
                },
                {
                    number: "BHR-SWP-LAG",
                    description: "This is the description of vehicle with plate number BHR-SWP-LAG"
                },
                {
                    number: "AXZ-TRY-LAG",
                    description: "This is the description of vehicle with plate number AXZ-TRY-LAG"
                }
            ]
        }
    }

    reportWindowSize = ()=>{
        this.setState({windowWidth: window.innerWidth})
    }
    alertMessageWarning = ()=>{
        if(this.state.alertDisplayWarning){
            return(
                <div className="alert alert-danger sticky-top" role="alert">
                    <strong>{this.state.alertMessageWarning}</strong>
                    <button type="button" className="ml-2 mb-1 close"
                    onClick={()=>this.closeAlertMessageWarning()} >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            )
        }
    }
    alertMessageSuccess = ()=>{
        if(this.state.alertDisplaySuccess){
            return(
                <div className="alert alert-success sticky-top" role="alert">
                    <strong>{this.state.alertMessageSuccess}</strong>
                    <button type="button" className="ml-2 mb-1 close"
                    onClick={()=>this.closeAlertMessageSuccess()} >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            )
        }
    }
    setWarningMessage = (warningMessage)=>{
        this.setState({alertMessageWarning: warningMessage})
        this.setState({alertDisplayWarning: true})
    }
    setSuccessMessage = (successMessage)=>{
        this.setState({alertMessageSuccess: successMessage})
        this.setState({alertDisplaySuccess: true})
    }

    closeAlertMessageWarning = ()=>{
        this.setState({alertDisplayWarning:false, alertMessage: ''})
    }
    closeAlertMessageSuccess = ()=>{
        this.setState({alertDisplaySuccess:false, alertMessage: ''})
    }

    changeScreen = (screenName, screenHeader)=>{
        this.setState({currentScreen: screenName, currentHeader: screenHeader});
    }
    allItemNames = ()=>{
        let arrayOfItems = [];
        this.state.tableItems.map((post) => {
            arrayOfItems.push(post.itemName)
        })
        let uniqueArrayOfItems = [...new Set([...arrayOfItems])];
        return uniqueArrayOfItems
    }

    allVehiclePlateNumbers = ()=>{
        let arrayOfPlateNumbers = [];
        this.state.vehicles.map((post) => {
            arrayOfPlateNumbers.push(post.vehiclePlateNumber)
        })
        return arrayOfPlateNumbers
    }
    allCategories = ()=>{
        let arrOfCategories = [];
        this.state.tableItems.map((item)=>{
            arrOfCategories.push(item.category);
        })
        let uniqueArrOfCategories = [...new Set([...arrOfCategories])];
        return uniqueArrOfCategories;
    }

    /*-----------------------------------    Inventory Application  Parts    -------------------------------------------------------  */


    /* ------------------------------------- Spare perts Table Methods start here -------------------------------------------------   */

    calcAverageUnitCost = (prevData, newData)=>{
        let lastCost, lastQty, newCost, newQty;
        lastCost = parseInt(prevData.averageUnitCost) ;
        lastQty = parseInt(prevData.numberRemaining) ;
        newCost = parseInt(newData.cost) ;
        newQty = parseInt(newData.quantity) ;

        console.log(lastCost);
        console.log(newCost);

        let averageUnitCost = ((lastCost * lastQty)+(newCost * newQty)) / (lastQty + newQty);
        return Math.ceil(averageUnitCost/100)*100;
    }

    sortTableItems = ()=>{
        let allItems = [];
        this.state.tableItems.map((item) => {
            allItems.push(item.itemName);
        })
        let sortedItems = allItems.sort();
        let sortedTableItems = [];
        sortedItems.map((sortedItem) => {
            this.state.tableItems.map((tableItem) => {
                if (sortedItem === tableItem.itemName) {
                    sortedTableItems.push(tableItem);
                }
            })
        })
        this.setState({tableItems: sortedTableItems});
    }


    inventoryRecords = ()=>{
        if(this.props.currentScreen === 'Inventory Records'){
            return(
                <>
                    <header className="clearfix">
                        <h4 className="float-left text-secondary pl-1">Spare Part Inventory</h4>
                        <span className="d-none d-md-inline float-right">
                            <button className="btn btn-sm btn-outline-success mr-2"
                                onClick={()=>this.props.setScreenDetails('Add New Item','Add New Item')}>+New Spare Part
                            </button>

                            <button className="btn btn-sm btn-outline-success mr-2" data-toggle="modal" data-target="#purchaseModal">
                                Purchase Spare Parts
                            </button>

                            <button className="btn btn-sm btn-outline-danger mr-2" data-toggle="modal" data-target="#UsageModalLabel">
                                Use Item 
                            </button>
                        </span>

                        <span className="d-block d-md-none float-right mr-1">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Actions
                                </button>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <button className="dropdown-item" type="button">Reorder Item</button>
                                    <button className="dropdown-item" type="button">Add New Item</button>
                                    <button className="dropdown-item" type="button">Give Out Item</button>
                                </div>
                            </div>
                        </span>
                        
                    </header>
                    {this.displayInventoryRecordsLargeScreen()}
                    {this.displayInventoryRecordsSmallScreen()}
                    
                </>
            )
        }
        
    }


    displayTableItemDetails = (serialNumber)=>{
        this.props.setScreenDetails('Table Item Details','Table Item Details')
        this.setState({displayInfoOfItemNum:serialNumber})
    }

    tableItemDetails = ()=>{
        if(this.props.currentScreen === 'Table Item Details'){
            let element = this.state.tableItems[this.state.displayInfoOfItemNum]

            return(
                <>
                <TableItemDetails 
                    position={this.state.displayInfoOfItemNum}
                    itemName={element.itemName}
                    partNumber={element.partNumber}
                    manufacturer={element.manufacturer}
                    model={element.model}
                    serialNumber={element.serialNumber}
                    category={element.category}
                    numberRemaining={element.numberRemaining}
                    reorderLevel={element.reorderLevel}
                    cost={element.averageUnitCost}
                    description={element.description}
                    currentUser={this.state.currentUser}
                    updateDetails={this.updateTableItemsData}
                    deleteItem={this.deleteItem}
                    setSuccessMessage={this.setSuccessMessage}
                    setWarningMessage={this.setWarningMessage}
                    setNewScreen={this.props.setScreenDetails}
                    doesItemNameExistInTable ={this.doesItemNameExistInTable}
                    allCategories={this.allCategories()}
                    itemHistory={this.itemHistory}
                    totalNumberPurchased={this.totalNumberPurchased(this.state.displayInfoOfItemNum)}
                    totalNumberUsed={this.totalNumberUsed(this.state.displayInfoOfItemNum)}
                />
                </>
            )
        }
    }

    totalNumberPurchased = (position)=>{
        let allTableItems = this.state.tableItems;
        let numberPurchased = 0;
        allTableItems[position].history.purchase.map((item)=>{
            numberPurchased += parseInt(item.quantity);
        })
        return numberPurchased
    }

    totalNumberUsed = (position)=>{
        let allTableItems = this.state.tableItems;
        let numberUsed = 0;
        allTableItems[position].history.usage.map((item)=>{
            numberUsed += parseInt(item.quantity);
        })
        return numberUsed
    }

    displayInventoryRecordsLargeScreen= ()=>{
        if(this.state.windowWidth > 765){
            return(
                <table className="table rounded bg-white">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col" style={{minWidth:'250px'}}>Item Name</th>
                            <th scope="col">Category</th>
                            <th scope="col">On Hand</th>
                            <th scope="col">Av. Unit Cost</th>
                            <th scope="col" style={{minWidth:'100px'}}>Actions</th>
                        </tr>
                    </thead>
                    <tbody> 
                        {this.state.tableItems.map((post) => {
                            return(
                                <tr key={this.state.tableItems.indexOf(post) + 1}>
                                    <TableItemLg
                                    serialNumber={this.state.tableItems.indexOf(post) + 1}
                                    itemName={post.itemName}
                                    category={post.category}
                                    numberRemaining={post.numberRemaining}
                                    unitCost ={post.averageUnitCost}
                                    tableItemDetails={this.tableItemDetails}
                                    displayTableItemDetails={this.displayTableItemDetails}
                                    saveChanges={this.changeTableItemsData}
                                    doesItemNameExistInTable ={this.doesItemNameExistInTable} />
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            )
        }
    }
    
    displayInventoryRecordsSmallScreen= ()=>{
        if(this.state.windowWidth < 765){
            return(
                this.state.tableItems.map((post) => {
                    return(
                        <section key={this.state.tableItems.indexOf(post) + 1}>
                            <TableItemSm
                            serialNumber={this.state.tableItems.indexOf(post) + 1}
                            itemName={post.itemName}
                            numberRemaining={post.numberRemaining}
                            reorderLevel={post.reorderLevel}
                            saveChanges={this.changeTableItemsData}
                            doesItemNameExistInTable ={this.doesItemNameExistInTable} />
                        </section>
                    )
                })
            )
        }
    }

    updateTableItemsData = (position, newData)=>{
        console.log(this.doesItemNameExistInTable(position, newData))
        if(this.doesItemNameExistInTable(position, newData) === false){
            let element = this.state.tableItems;
            element[position].itemName = newData.itemName
            element[position].category = newData.category
            element[position].manufacturer = newData.manufacturer
            element[position].partNumber = newData.partNumber
            element[position].model = newData.model
            element[position].serialNumber = newData.serialNumber
            element[position].reorderLevel = newData.reorderLevel
            element[position].description = newData.description
            this.setState({tableItems: element});
        }else{
            console.log('Duplication of Table Item Data');
        }
    } 

    deleteItem = (position)=>{
        let element = this.state.tableItems;
        element.splice(position, 1)
        this.setState({tableItems: element})
    }

    addNewTableItem = (data)=>{
        if(this.doesItemNameExistInTable('', data) === false){
            const allTableItems = this.state.tableItems;
            allTableItems.push(data);
            this.setState({tableItems: allTableItems});
            this.setSuccessMessage(data.itemName + " has been created")
            this.sortTableItems();
        }else{
            this.setWarningMessage(data.itemName + " already exists")
        }
    }

    doesItemNameExistInTable = (position, data)=>{
        let result = false;
        let element = this.state.tableItems[position];
        if(position !== '' && element.itemName.toLowerCase().trim() === data.itemName.toLowerCase().trim()){
            result = false
        }else{
            this.state.tableItems.map((item)=>{
                if(item.itemName.toLowerCase().trim() === data.itemName.toLowerCase().trim()){
                    result = true;
                }
            });
        }
        return result;
    }


    addNewItem = () =>{
        if(this.props.currentScreen === "Add New Item"){
            return(
                <>
                <header className="clearfix">
                    <h4 className="text-secondary d-inline-block float-left pl-1">Add New Spare Part</h4>
                    <nav aria-label="breadcrumb" className="float-right">
                        <ol className="breadcrumb mb-0 p-1">
                            <li className="breadcrumb-item"><button className="btn btn-link btn-sm" onClick={()=>{
                                this.props.setScreenDetails('Inventory Records','Inventory Records');
                            }}>Back</button></li>
                        </ol>
                    </nav>
                </header>
                
                <NewtableItemform
                onSubmit ={this.addNewTableItem} 
                allCategories={this.allCategories}
                setWarningMessage={this.setWarningMessage}/>
                </>
            )
        }
    }

    addPurchasedSpareParts = (data)=>{
        let tableItems = this.state.tableItems
        tableItems.map((tableItem)=>{
            if(tableItem.itemName === data.itemName){
                console.log(tableItem.averageUnitCost)
                tableItem.numberRemaining = parseInt(tableItem.numberRemaining) + parseInt(data.quantity);
                console.log(tableItem.numberRemaining)
                tableItem.averageUnitCost = this.calcAverageUnitCost(tableItem, data) 
            }
            this.setState({tableItems:tableItems})
        })
        this.recordPurchase(data);
    }

    recordPurchase = (data)=>{
        let tableItems = this.state.tableItems;
        let history = this.state.history;
        tableItems.map((item)=>{
            if(item.itemName === data.itemName){
                console.log(data)
                item.history.purchase.unshift(data)
                history.purchase.unshift(data);
            }
        })
        this.setState({tableItems: tableItems})
        this.setState({history: history})
    }

    recordUsage = (data)=>{
        let tableItems = this.state.tableItems;
        let history = this.state.history;
        data.items.map((dataItem)=>{
            tableItems.map((tableItem)=>{ 
                if(dataItem['itemName' + dataItem.id] === tableItem.itemName){
                    let finalData = {
                        itemName: dataItem['itemName' + dataItem.id],
                        dateUsed:data.dateUsed, 
                        quantity: dataItem['quantity' + dataItem.id] ,
                        vehicleFor: data.vehicleFor, 
                        authorizedBy: data.authorizedBy, 
                        purpose: data.purpose,
                    }

                    tableItem.history.usage.unshift(finalData);
                    history.usage.unshift(finalData);
                }
            })
        })
        this.setState({tableItems: tableItems})
        this.setState({history: history})
    }

    subtractUsedSpareParts = (UsedItemsInfo)=>{
        let tableItems = this.state.tableItems;
        UsedItemsInfo.items.map((usedItem)=>{
            tableItems.map((item)=>{
                if(item.itemName === usedItem['itemName' + usedItem.id]){
                    item.numberRemaining  = parseInt(item.numberRemaining) - parseInt(usedItem['quantity' + usedItem.id])
                }
            })
        })
        this.setState({tableItems: tableItems});
        this.recordUsage(UsedItemsInfo)
    }

    itemHistory = ()=>{
        if(this.props.currentScreen === "Item History"){
            let tableItem = this.state.tableItems[this.state.displayInfoOfItemNum];
            /* console.log(tableItem.history) */
            return(
                <ItemHistory 
                history={tableItem.history}
                itemName={tableItem.itemName}/>
            )
        } 
    }



    appHistory = ()=>{
        if(this.props.currentScreen === 'App History'){
            return(
                <AppHistory 
                purchaseHistory={this.state.history.purchase}
                usageHistory={this.state.history.usage}/>
            )
        }
    }




















    /*---------------------------------------- Vehicles Section Starts here -------------------------------------------- */

    allVehicles = ()=>{
        if(this.props.currentScreen === "All Vehicles"){
            return(
                <>
                <header className="clearfix">
                    <h4 className="float-left text-secondary pl-1">All Vehicles</h4>
                    <button className="btn btn-sm btn-outline-success float-right mr-2"  data-toggle="modal" data-target="#NewVehicleModalLabel">
                        Add New vehicle
                    </button>
                </header> 


                <section className="card">
                
                    <div className="card-body p-1 p-lg-3 clearfix">
                        {this.renderAllVehicles()}
                    </div>
                
                </section>

                </>
            )
        }
    }

    renderAllVehicles = ()=>{
        return(
            <>
                {this.state.vehicles.map((vehicle) => {
                return(
                    <Fragment key={this.state.vehicles.indexOf(vehicle)}>
                        <VehicleInfo
                        position={this.state.vehicles.indexOf(vehicle)}
                        number={vehicle.number}
                        description={vehicle.description}
                        dataOfVehicleToUpdate={this.dataOfVehicleToUpdate}
                        setVehicleToUpdate={this.setVehicleToUpdate}
                        />
                    </Fragment>
                )
                })}
            </>
        )
    }

    addNewVehicle = (data) =>{
        let allVehicles = this.state.vehicles;
        allVehicles.push(data);
        this.setState({vehicles: allVehicles});
    }

    updateVehicleInfo = (newInfo) =>{
        let allVehicles = this.state.vehicles;
        allVehicles[this.state.updateVehicleAtPosition] = newInfo;
        this.setState({vehicles: allVehicles})
    }
    setVehicleToUpdate = (position)=>{
        this.setState({updateVehicleAtPosition: position});
    } 
    dataOfVehicleToUpdate = (position)=>{
        return{
            number: this.state.vehicles[position].number,
            description: this.state.vehicles[position].description
        }
    } 


    render(){
        return(
            
            <section className="px-1 px-sm-3 py-4">
                {this.alertMessageWarning()}
                {this.alertMessageSuccess()}
                {window.addEventListener('resize', this.reportWindowSize)}
                {this.inventoryRecords()}
                {this.addNewItem()}
                {this.tableItemDetails()}
                {this.itemHistory()}
                {this.appHistory()}
                {this.allVehicles()}























                
            <div className="modal fade" id="purchaseModal" tabIndex="-1" role="dialog" aria-labelledby="purchaseModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-secondary" id="exampleModalLabel">Spare Parts Purchases</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <PurchaseItem 
                            allItemNames={this.allItemNames()}
                            onSubmit={this.addPurchasedSpareParts}
                            setSuccessMessage={this.setSuccessMessage}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="UsageModalLabel" tabIndex="-1" role="dialog" aria-labelledby="UsageModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-secondary" id="exampleModalLabel">Spare Parts Usage</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <UseItems
                            allItemNames={this.allItemNames()}
                            setSuccessMessage={this.setSuccessMessage}
                            onSubmit={this.subtractUsedSpareParts}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="NewVehicleModalLabel" tabIndex="-1" role="dialog" aria-labelledby="NewVehicleModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-secondary" id="exampleModalLabel">Add New Vehicle</h5>
                            <button type="button" id="closeNewVehicleModal" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <AddNewVehicle 
                            onSubmit={this.addNewVehicle}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="EditVehicleModalLabel" tabIndex="-1" role="dialog" aria-labelledby="EditVehicleModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-secondary" id="exampleModalLabel">Edit Vehicle </h5>
                            <button type="button" id="closeEditVehicleModal" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <UpdateVehicle 
                                position={this.state.updateVehicleAtPosition}
                                number={this.dataOfVehicleToUpdate(this.state.updateVehicleAtPosition).number}
                                description={this.state.vehicles[this.state.updateVehicleAtPosition].description}
                                dataOfVehicleToUpdate={this.dataOfVehicleToUpdate}
                                //onSubmit={this.updateVehicleInfo}
                            />
                        </div>
                    </div>
                </div>
            </div>


            </section>
        )
    }
    
}