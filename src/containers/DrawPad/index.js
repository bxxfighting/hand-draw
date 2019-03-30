import { connect } from 'react-redux';
import DrawPad from '../../components/DrawPad';
import {
    setPicData,
    savePic,
} from '../../actions';

const mapStateToProps = state => {
    return {
        penSize: state.drawPad.penSize,
    };
};

const mapDispatchToProps = dispatch => ({
    setPicData: (data) => dispatch(setPicData(data)),
    savePic: (data) => dispatch(savePic(data))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DrawPad);