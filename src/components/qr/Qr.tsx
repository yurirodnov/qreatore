import { useRef, useState } from "react";
import QRCode from "qrcode";
import { Button } from "../button/Button";
import { useStateContext } from "../../context/StateProvider";
import { NoQr } from "../no-qr/NoQr";

import styles from "./Qr.module.css";

export const Qr = () => {
  const { userInput } = useStateContext();
  const [isQrGenerated, setQrGenerated] = useState<boolean>(false);

  const canvasRef = useRef(null);

  const handleQrGeneration = () => {
    setQrGenerated((prev) => !prev);
    console.log("Is qr generated", isQrGenerated);
  };

  const createQr = () => {
    QRCode.toCanvas(canvasRef.current, userInput, () => {
      handleQrGeneration();
    });
  };

  return (
    <>
      <div className={styles.qrBlock}>
        {!isQrGenerated ? <NoQr /> : null}
        <canvas ref={canvasRef} width={1} height={1} className={styles.canvas}></canvas>
      </div>
      <Button title="Generate" disabled={!userInput} onClick={createQr} />
    </>
  );
};
