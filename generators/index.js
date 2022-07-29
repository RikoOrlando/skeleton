// import { NodePlopAPI } from "plop";
import componentStep from "./component.js";
export default function (plop) {
  // create your generators here
  plop.setGenerator("component", componentStep);
}
