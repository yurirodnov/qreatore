import { useRef } from "react";
import QRCode from "qrcode";
import { Button } from "../button/Button";
import { useStateContext } from "../../context/StateProvider";

export const Qr = () => {
  const { userInput } = useStateContext();

  const canvasRef = useRef(null);

  const createQr = () => {
    QRCode.toCanvas(canvasRef.current, userInput);
  };

  return (
    <div>
      <canvas ref={canvasRef}></canvas>
      <Button title="Generate" onClick={createQr} />
    </div>
  );
};
