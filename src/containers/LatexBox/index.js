import { connect } from 'react-redux';
import LatexBox from '../../components/LatexBox';

const mapStateToProps = state => {
    return {
        latex: state.latexBox.latex,
    };
};

const mapDispatchToProps = dispatch => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LatexBox);