import { BotTemplates } from "../components/BotTemplates/BotTemplates";
import { MyBots } from "../components/MyBots/MyBots";

export default function Dashboard() {
  return (
    <>
      <h1>Дашборд</h1>
      <BotTemplates />
      <MyBots />
    </>
  );
}
