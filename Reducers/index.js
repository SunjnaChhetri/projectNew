import {combineReducers} from 'redux';
import dummyFoodDetails from './dummyFoodDetails';
import checkOutDetails from './checkOutDetails';
import priceChanged from './priceChange';

const allReducers = combineReducers({
    MenuDetails: dummyFoodDetails,
    checkOutDetails: checkOutDetails    ,
    priceDetails:priceChanged
});

export default allReducers
