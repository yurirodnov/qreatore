// src/components/qr/Qr.tsx

import { useEffect, useRef } from "react";
import QRCode from "qrcode";
import { Button } from "../button/Button";
import { useStateContext } from "../../context/StateProvider";
import { NoQr } from "../no-qr/NoQr";
import styles from "./Qr.module.css";

export const Qr = () => {
  const { userInput, isQrGenerated, isInputValid, handleQrGeneration, handleQrReset, clearUserInput } =
    useStateContext();

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    handleQrReset();
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      }
    }
  }, [userInput]);

  const createQr = () => {
    QRCode.toCanvas(canvasRef.current, userInput, () => {
      handleQrGeneration();
    });
  };

  const resetQr = () => {
    clearUserInput();
  };

  return (
    <>
      <div className={styles.qrBlock}>
        {!isQrGenerated ? <NoQr /> : null}
        {userInput !== "" ? (
          <canvas
            ref={canvasRef}
            width={1}
            height={1}
            className={`${styles.canvas} ${!isQrGenerated ? styles.hidden : ""}`}
          ></canvas>
        ) : null}
      </div>
      <div className={styles.buttonsBlock}>
        <Button title="Generate" disabled={!userInput || !isInputValid} onClick={createQr} buttonType="submit" />
        {isQrGenerated ? <Button title="Reset" onClick={resetQr} buttonType="reset" /> : null}
      </div>
    </>
  );
};
