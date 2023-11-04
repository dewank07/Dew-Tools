"use client";
import QRCode1 from "react-qr-code";
import QRCode from "qrcode";
import { CanvasHTMLAttributes, useEffect, useState } from "react";
export default function QrGenerator() {
  const [src, setSrc] = useState<any>("");
  const [valueInput, setValueInput] = useState<string>("");

  const handleChange = (e: any) => {
    setValueInput(e.target.value);
  };
  const handleClick = () => {
    QRCode.toCanvas(
      valueInput,
      { errorCorrectionLevel: "H" },
      function (err, canvas) {
        if (err) throw err;

        let container = document.getElementById("container") as HTMLElement;
        canvas.id = "qrID";
        container.appendChild(canvas);
      }
    );
    let link = document.createElement("a");
    link.download = "qr.png";
    link.href = (
      document.getElementById("qrID") as HTMLCanvasElement
    ).toDataURL("image/png");
    link.click();
  };

  return (
    <div className='w-full h-full flex flex-col gap-10 items-center'>
      <h1 className='text-4xl font-semibold font-sans'>Generate your QR</h1>
      <div className='p-2 dark:border-white border-black border-2'>
        <QRCode1 value={valueInput} id='qrCodeDown' />
      </div>
      <input
        className='border-slate-950 border rounded-md h-10 w-72 font-medium p-4  dark:text-white'
        value={valueInput}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <button
        className='bg-orange-600 w-28 h-8 rounded-lg text-white'
        onClick={handleClick}
      >
        Download
      </button>
      <div className='hidden' id='container'></div>
    </div>
  );
}
