import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Navbar, NavbarBrand, Toast, ToastBody, ToastHeader} from 'reactstrap';
import Loader from '../../components/Loader/Loader';
import PropTypes from "prop-types";

class MainContainer extends Component {
    render() {
        const {loading, error, selectedArticle, children} = this.props;

        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand style={{color: '#fff'}}>
                        Ny Times Most
                        Popular {selectedArticle && selectedArticle.section ? '- ' + selectedArticle.section : null}
                    </NavbarBrand>
                </Navbar>
                {error &&
                <div className="p-3">
                    <Toast>
                        <ToastHeader>
                            Error
                        </ToastHeader>
                        <ToastBody>
                            Something went wrong. Please refresh and try again!
                        </ToastBody>
                    </Toast>
                </div>}
                {loading && <Loader/>}
                {children}
            </div>
        )
    }
}

MainContainer.propTypes = {
    loading: PropTypes.bool.isRequired,
    selectedArticle: PropTypes.shape({
        section: PropTypes.string.isRequired
    }),
    error: PropTypes.any
};

const mapStateToProps = state => {
    return {
        loading: state.article.loading,
        error: state.article.error,
        selectedArticle: state.article.selectedArticle
    }
};

export default connect(mapStateToProps)(MainContainer);
