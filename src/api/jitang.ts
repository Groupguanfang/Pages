import axios from "axios";
import jitangTXT from "./jitangTXT";

export default function JiTang() {
  const data = jitangTXT.split("\n");
  const random = Math.floor(Math.random() * (data.length - 1) + 0);
  return data[random];
}
