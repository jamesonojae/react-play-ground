import React from 'react';

const Print = () => {
  const printContent = (e) => {
    let restorePage = document.body.innerHTML;
    let printPageContent = document.getElementById(e).innerHTML;
    document.body.innerHTML = printPageContent;
    window.print();
    document.body.innerHTML = restorePage;

  }

  return (
      <>
        <div id="div1" className="">
          first print div1
        </div>
        <div id="div2" className="">
          first print div2
        </div>
        <button onClick={() => printContent('div1')} className="btn btn-primary">print content</button>
        <button onClick={() => printContent('div2')} className="btn btn-primary">print content</button>
      </>
  );
};

export default Print;
