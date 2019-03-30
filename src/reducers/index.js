import { combineReducers } from 'redux';

import latexBox from './LatexBox';
import drawPad from './DrawPad';

const handDraw = combineReducers(
    {
        latexBox: latexBox,
        drawPad: drawPad,
    },
)

export default handDraw;