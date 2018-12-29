import React, { Component } from 'react';
import SignIn from "./SignIn"


class Modal extends Component {
    state = {
        fadeIn: false
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.show === false && this.props.show === true) {
            requestAnimationFrame(() => this.setState({fadeIn: true}));
            document.body.style.overflow = "hidden";
        }
    }

    onClose = e => {
        this.setState({fadeIn: false}, () => setTimeout(this.props.onClose, 300));
        document.body.style.overflow = "auto";
    }

    render() { 
       
        if (!this.props.show){
         return  null;
        }
        ;
        return ( 
            <div className="modal-container" style={{opacity: this.state.fadeIn ? 1 : 0}} onClick={this.onClose}>
                <SignIn/>
            </div>
         );
    }
}
 
export default Modal;