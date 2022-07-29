import { createContext, useReducer, ReactNode } from "react";
import actions, { initialState } from "./reducer";
//create a context, with createContext api
export const Global = createContext(initialState);
interface IGlobalProvider {
  children: ReactNode;
}
const GlobalProvider = (props: IGlobalProvider) => {
  const [state, dispatch] = useReducer(actions, initialState);
  const globalContextValue = {
    state,
    dispatch,
  };
  return (
    <Global.Provider value={globalContextValue}>
      {props.children}
    </Global.Provider>
  );
};

export default GlobalProvider;
