import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect } from "react";

const qrcodeRegionId = "html5qr-code-full-region";

// Creates the configuration object for Html5QrcodeScanner.
const createConfig = (props: any) => {
  let config = {
    fps: undefined,
    qrbox: undefined,
    aspectRatio: undefined,
    disableFlip: undefined,
  };
  if (props.fps) {
    config.fps = props.fps;
  }
  if (props.qrbox) {
    config.qrbox = props.qrbox;
  }
  if (props.aspectRatio) {
    config.aspectRatio = props.aspectRatio;
  }
  if (props.disableFlip !== undefined) {
    config.disableFlip = props.disableFlip;
  }
  return config;
};
let html5QrcodeScanner: any;

const codeEx = (props: any) => {
  // when component mounts
  const config = createConfig(props);
  const verbose = props.verbose === true;
  // Suceess callback is required.
  if (!props.qrCodeSuccessCallback) {
    throw "qrCodeSuccessCallback is required callback.";
  }
  if (!html5QrcodeScanner?.getState()) {
    html5QrcodeScanner = new Html5QrcodeScanner(
      qrcodeRegionId,
      config,
      verbose
    );
    console.log(html5QrcodeScanner);

    html5QrcodeScanner.render(
      props.qrCodeSuccessCallback,
      props.qrCodeErrorCallback
    );
  }
  return () => {
    html5QrcodeScanner.clear().catch((error: any) => {
      console.error("Failed to clear html5QrcodeScanner. ", error);
    });
  };
};

const Html5QrcodePlugin = (props: any) => {
  useEffect(() => {
    codeEx(props);
  }, []);

  return <div id={qrcodeRegionId} />;
};

export default Html5QrcodePlugin;
