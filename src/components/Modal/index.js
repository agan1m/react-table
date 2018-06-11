import React, { Component} from 'react';
import ReactDOM from 'react-dom'

import './Modal.css'

class Modal extends Component {
        
    
    render() { 
        const { firstName, adress, show, children} = this.props;
        if(show) {return ReactDOM.createPortal(<div className='modal'>
            <p>
              Выбран пользователь: <b>{firstName}</b>
            </p>
            <p>
              Адрес проживания: <b>{adress.streetAddress}</b>
            </p>
            <p>
              Город: <b>{adress.city}</b>
            </p>
            <p>
              Провинция/штат: <b>{adress.state}</b>
            </p>
            <p>
              Индекс: <b>{adress.zip}</b>
            </p>
            {children}
          </div>, document.getElementById('portal'))};
          return null
    }
}
 
export default Modal;