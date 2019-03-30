import request from '../../network/request';
import { apiLatexCreate } from '../../network/api';
import {
    SET_PEN_SIZE,
    SET_PIC_DATA,
} from '../../constants/action';


export const setPenSize = (size)=> ({
    type: SET_PEN_SIZE,
    size: size,
})

export const setPicData = (data)=> ({
    type: SET_PIC_DATA,
    picData: data,
})


export const savePic = () => {
    return (dispatch, getState) => {
        const state = getState();
        const option = {
            method: 'POST',
            body: JSON.stringify({
                number_id: state.latexBox.number_id,
                url: state.drawPad.picData,
            })
        }
        return request(apiLatexCreate, option)
                .then(
                )
    }
}