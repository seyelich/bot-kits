import { AddBotButton } from "../components/AddBotButton/AddBotButton";
import { PlusButton } from "../components/PlusButton/PlusButton";

export default function AddBot() {
  return (
    <div>
      <AddBotButton type="blue" onClick={() => console.log("click")}/>
      <AddBotButton type="green" onClick={() => console.log("click")}/>
      <PlusButton onClick={() => console.log("click")}/>
      <PlusButton onClick={() => console.log("click")}/>
      <AddBotButton type="blue" disabled onClick={() => console.log("click")}/>
      <AddBotButton type="green" disabled onClick={() => console.log("click")}/>
    </div>
  );
}
