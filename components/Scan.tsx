"use client";
import React, { useState } from "react";
import { useCopyToClipboard } from "usehooks-ts";
import Html5QrcodePlugin from "./scanner/Html5QrcodePlugin";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
const Scan = () => {
  const [value, copy] = useCopyToClipboard();
  const [data, setData] = useState("Scan your QR");
  const [copied, setCopied] = useState(false);
  const onNewScanResult = (decodedText: any, decodedResult: any) => {
    setData(decodedText);
    console.log(decodedResult);
  };

  return (
    <div className='flex flex-col gap-16 py-2 justify-center max-w-screen'>
      <div className='flex flex-col gap-8 items-center'>
        <div>
          <Html5QrcodePlugin
            fps={10}
            qrbox={250}
            disableFlip={false}
            qrCodeSuccessCallback={onNewScanResult}
          />
        </div>
      </div>
      <div className='flex items-center justify-center gap-4 '>
        <Input id='link' defaultValue={data} readOnly />
        <Button
          variant='default'
          className='rounded-sm w-10 bg-orange-600'
          size='lg'
          onClick={() => {
            copy(data);
            setCopied(!copied);
          }}
        >
          {copied ? "copied" : "copy"}
        </Button>
      </div>
    </div>
  );
};

export default Scan;
