import React, { Component } from 'react';

import Modal from '../Modal'

class RowInfo extends Component {
    state = {
        isShow:false
    }

  handleInfo = () => {
    
    this.setState({isShow: !this.state.isShow})
    
  };
  

  render() {
    const { id, firstName, lastName, email, phone, adress } = this.props;
    return <tr onClick={this.handleInfo}>
        <td>{id}</td>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <Modal show={this.state.isShow} firstName={firstName} adress={adress}>
            <button className='modal_btn' onClick={this.handleInfo}>Закрыть</button>
        </Modal>
      </tr>;
  }
}
 
export default RowInfo;