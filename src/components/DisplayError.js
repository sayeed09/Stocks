import React from 'react'
import Modal from 'react-responsive-modal';

class DisplayError extends React.Component {

    onCloseModal() {
        window.location.reload();
    }
    render() {
        return <Modal open={true} onClose={this.onCloseModal} center>
            {this.props.hasError ? <p className="mt-3 px-3 py-3">Server not responding at the moment! <br />
                Please try again after sometime</p>
                : <p className="mt-3 px-3 py-3">You need to allow load unsafe scripts to run this application,
            <br /> you see shield icon in address bar</p>}
        </Modal>
    }
}
export default DisplayError;