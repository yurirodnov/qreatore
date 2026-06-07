// src/components/main/Main.tsx

import { InfoForm } from "../info-form/InfoForm";
import { Qr } from "../qr/Qr";
import { NoQr } from "../no-qr/NoQr";
import { useStateContext } from "../../context/StateProvider";
import { Button } from "../button/Button";

export const Main = () => {
  const { isQrGenerated, handleQrGeneration } = useStateContext();

  return (
    <main>
      <InfoForm />

      {isQrGenerated ? <Qr /> : <NoQr />}
    </main>
  );
};
