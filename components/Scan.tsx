"use client";
import React, { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
const Scan = () => {
  const [data, setData] = useState(null);
  const [counter, setCounter] = useState(0);
  const [newQr, setNewQr] = useState(true);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      {
        qrbox: {
          width: 400,
          height: 400,
        },
        fps: 5,
      },
      true
    );
    scanner.render(success, error);
    function success(result: any) {
      scanner.clear();
      setData(result);
      result == "GFGPULLNMERGE"
        ? setCounter(counter + 1)
        : console.warn("Invalid QR ");
    }
    function error(err: any) {
      console.log(err);
    }
  }, [counter]);

  return (
    <div className='flex flex-col gap-4 py-2 justify-center w-screen  items-center'>
      <h1 className='text-2xl'>People Entered {counter}</h1>
      <div className='flex flex-col gap-8 items-center'>
        <div>
          <div id='reader'></div>
        </div>
        {/* <div
          className='w-64 bg-slate-500 h-16 text-center p-4 rounded-md text-white text-lg'
          onClick={() => {
            data == "GFGPULLNMERGE"
              ? setCounter(counter + 1)
              : console.warn("Invalid QR ");
          }}
        >
          New Entry
        </div> */}
      </div>
    </div>
  );
};

export default Scan;
