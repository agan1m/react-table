import React, { Component } from 'react';
import { connect } from "react-redux";
import Spinner from 'react-svg-spinner';

import {
  bigRequest,
  getError,
  getData,
  getIsLoading,
  sortByUp,
  sortByDown,
} from '../../ducks/bigDb';
import RowInfo from '../RowInfo';
import '../SmallDb/SmallDb.css'

class BigDb extends Component {
  state = {
    sortBy: '',
    direction: false,
    data: [],
    start_count: 10,
    pageLength: 0,
  };

  componentDidMount() {
    const { bigRequest } = this.props;
    bigRequest();
  }

  handleSort = e => {
    const { sortByUp, sortByDown } = this.props;
    this.setState({ sortBy: e.target.innerHTML });
    if (!this.state.direction) {
      this.setState({ direction: true });
      sortByUp(this.props.data, e.target.innerHTML);
      e.target.className = 'arrow_down';
    } else {
      sortByDown(this.props.data, e.target.innerHTML);
      this.setState({ direction: false });
      e.target.className = 'arrow_up';
    }
  };

  handlePaginationLeft = () => {
    if (this.state.pageLength === 0) return null;
    this.setState({ pageLength: this.state.pageLength - this.state.start_count });
  };
  handlePaginationRight = () => {
    const { data } = this.props;

    if (data.length - this.state.pageLength < this.state.start_count) return null;
    this.setState({ pageLength: this.state.pageLength + this.state.start_count });
  };

  render() {
    const { data } = this.props;
    let pages = Array.from(data.slice(this.state.pageLength));
    if (this.props.isLoading) return <div className='spinner'>
                                  <Spinner size="64px" color="fuchsia" gap={5} />
                                </div>;

    if (this.props.error) return <p className='error'>{this.props.error}</p>
    
    return (
      <div className="wrapper">
        <table className="table_blur">
          <thead>
            <tr>
              <th onClick={this.handleSort}>id</th>
              <th onClick={this.handleSort}>firstName</th>
              <th onClick={this.handleSort}>lastName</th>
              <th onClick={this.handleSort}>email</th>
              <th onClick={this.handleSort}>phone</th>
            </tr>
          </thead>
          <tbody className="table_blur__body">
            {pages.map((item, index) => {
              if (index < this.state.start_count) {
                return (
                  <RowInfo
                    key={Math.random()}
                    id={
                      item.id //запрос дал одинаковые id
                    }
                    firstName={item.firstName}
                    lastName={item.lastName}
                    email={item.email}
                    phone={item.phone}
                    adress={item.adress}
                  />
                );
              }
            })}
          </tbody>
        </table>
        <ul className="btn__menu">
          <button className="btn btn_left" onClick={this.handlePaginationLeft}>
            Сюда
          </button>
          <button className="btn btn_right" onClick={this.handlePaginationRight}>
            Туда
          </button>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: getError(state),
  isLoading: getIsLoading(state),
  data: getData(state),
});

const mapDispatchToProps = {
  bigRequest,
  sortByUp,
  sortByDown,
};

export default connect(mapStateToProps, mapDispatchToProps)(BigDb);