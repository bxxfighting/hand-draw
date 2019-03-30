import {
    SET_PEN_SIZE,
    SET_PIC_DATA,
} from '../../constants/action';


const initState = {
    penSize: "2.5",
    picData: "",
}

const handDraw = (state = initState, action) => {
    switch(action.type) {
        case SET_PEN_SIZE:
            return Object.assign({}, state, {
                penSize: action.size,
            })
        case SET_PIC_DATA:
            return Object.assign({}, state, {
                picData: action.picData,
            })
        default:
            return state;
    }
}

export default handDraw;