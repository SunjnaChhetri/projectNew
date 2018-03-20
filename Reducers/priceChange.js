export default function (state = 0, action) {
	
    switch (action.type) {
        case 'PRICE_CHANGED':
            return action.payload;
            break;
    }
    return state;
}