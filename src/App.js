import React from 'react';
import {From} from './Form';


class App extends React.Component {
 // set data in local storage
/*  setData() {
    let obj = {
      name: 'Onoja',
      age:12, email: 'myemail@gamil.com'
    }
    // localStorage.setItem('myData', JSON.stringify(obj));

    // set data in session storage
    sessionStorage.setItem('myData', JSON.stringify(obj))
  }

  //get data
  getData() {
    // let data = localStorage.getItem('myData');
    let data = sessionStorage.getItem('myData');
    data = JSON.parse(data);
    console.log(data);
  }*/
  render() {
    return (
      <div>
      <From />
      </div>
    );
  }
}

export default App;
