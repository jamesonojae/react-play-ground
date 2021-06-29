import React from 'react';

const Printable = () => {
  const printableAreaRef = React.useRef();
  const handlePrintClick = () => {
    const w = window.open();
    if (printableAreaRef.current?.innerHTML) {
      w?.document.write(printableAreaRef.current.innerHTML);
      w?.print();
    }
    w?.close();
  };
  return (
      <>
        <button type="button" onClick={handlePrintClick}>
          Click To Print
        </button>
        <div ref={printableAreaRef}>I want to print this</div>
      </>
  );
};

export default Printable;
