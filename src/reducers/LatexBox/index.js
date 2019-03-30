import {
    SET_LATEX_BOX,
} from '../../constants/action';


const initState = {
    number_id: null,
    latex: "0",
}

const handDraw = (state = initState, action) => {
    switch(action.type) {
        case SET_LATEX_BOX:
            return Object.assign({}, state, {
                number_id: action.number_id,
                latex: action.latex,
            })
        default:
            return state;
    }
}

export default handDraw;