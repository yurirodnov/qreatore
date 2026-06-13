// src/components/qr/Qr.tsx

import { useEffect, useRef } from "react";
import QRCode from "qrcode";
import { Button } from "../button/Button";
import { useStateContext } from "../../context/StateProvider";
import { NoQr } from "../no-qr/NoQr";
import styles from "./Qr.module.css";

export const Qr = () => {
  const { userInput, isQrGenerated, handleQrGeneration } = useStateContext();

  const canvasRef = useRef(null);

  const createQr = () => {
    QRCode.toCanvas(canvasRef.current, userInput, () => {
      handleQrGeneration();
    });
  };

  const resetQr = () => {
    canvasRef.current = null;
    canvasRef.current;
    console.log("canvas ref", canvasRef.current);
  };

  return (
    <>
      <div className={styles.qrBlock}>
        {!isQrGenerated ? <NoQr /> : null}
        <canvas ref={canvasRef} width={1} height={1} className={styles.canvas}></canvas>
      </div>
      <div className={styles.buttonsBlock}>
        <Button title="Generate" disabled={!userInput} onClick={createQr} buttonType="submit" />
        {isQrGenerated ? <Button title="Reset" onClick={resetQr} buttonType="reset" /> : null}
      </div>
    </>
  );
};
