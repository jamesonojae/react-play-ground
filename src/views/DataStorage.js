import React from 'react';

const DataStorage = () => {
  function setData() {
    let obj = {
      name: 'Onoja',
      age:12, email: 'myemail@gamil.com'
    }
    // localStorage.setItem('myData', JSON.stringify(obj));

    // set data in session storage
    sessionStorage.setItem('myData', JSON.stringify(obj))
  }

  //get data
  const getData = () => {
    // let data = localStorage.getItem('myData');
    let data = sessionStorage.getItem('myData');
    data = JSON.parse(data);
    console.log(data);
  }
  render()
  {
    return (
        <div>
          <button onClick={this.setData}>Set Data</button>
          <button onClick={this.getData}>Get Data</button>

        </div>
    );
  }
};

export default DataStorage;
