import axios from 'axios';




const instance = axios.create({
  baseURL: 'http://www.filltext.com/',
});

export const getSmallDb = () =>
  instance(
    '?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&adress={addressObject}&description={lorem|32}');

export const getBigDb = () => instance('?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&adress={addressObject}&description={lorem|32}');


export const setLocalSmallDb = (data) => localStorage.setItem('smallDb', JSON.stringify(data))
export const getLocalSmallDb = () => localStorage.getItem('smallDb')

export const setLocalBigDb = (data) => localStorage.setItem('bigDb', JSON.stringify(data))
export const getLocalBigDb = () => localStorage.getItem('bigDb')

