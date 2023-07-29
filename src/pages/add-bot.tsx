import { Button } from "../components/Button/Button";
import { IconButton } from "../components/CopyButton/CopyButton";
import { PlusButton } from "../components/PlusButton/PlusButton";
import { CopyIcon } from "../components/icons/Copy/Copy";

export default function AddBot() {
  return (
    <div>
      <Button type="blue" onClick={() => console.log("click")} text="СИНЯЯ КНОПКА" width={180} height={46}/>
      <Button type="blue" disabled onClick={() => console.log("click")} text="СИНЯЯ КНОПКА" width={180} height={46}/>
      <PlusButton onClick={() => console.log("click")}/>
      <PlusButton onClick={() => console.log("click")} disabled/>
      <Button type="green" onClick={() => console.log("click")} text="ЗЕЛЁНАЯ КНОПКА" width={180} height={46}/>
      <Button type="green" disabled onClick={() => console.log("click")} text="ЗЕЛЁНАЯ КНОПКА" width={180} height={46}/>
      <Button type="grey" onClick={() => console.log("click")} text="СЕРАЯ КНОПКА" width={180} height={46}/>
      <Button type="grey" onClick={() => console.log("click")} disabled text="СЕРАЯ КНОПКА" width={180} height={46}/>
      <IconButton onClick={() => console.log("click")} width={40} height={40} icon={<CopyIcon width={40} height={40}/>}/>
      <IconButton onClick={() => console.log("click")} disabled width={40} height={40} icon={<CopyIcon width={40} height={40}/>}/>
    </div>
  );
}
