import request from '../../network/request';
import { apiLatexCreate } from '../../network/api';
import {
    SET_LATEX_BOX,
} from '../../constants/action';


export const setLatexBox = (id, latex)=> ({
    type: SET_LATEX_BOX,
    number_id: id,
    latex: latex,
})

export const latexCreate = () => {
    return (dispatch, getState) => {
        const option = {
            method: 'POST',
        }
        return request(apiLatexCreate, option)
                .then(
                    data => {
                        dispatch(setLatexBox(data.id, data.latex));
                    }
                )
    }
}