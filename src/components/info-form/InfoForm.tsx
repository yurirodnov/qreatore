import { useStateContext } from "../../context/StateProvider";

export const InfoForm = () => {
  const { handleUserInput } = useStateContext();

  return (
    <form>
      <input type="text" onChange={handleUserInput} />
    </form>
  );
};
