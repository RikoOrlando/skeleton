export const initialState: any = {
  isLogin: false,
};

export default function actions(
  state = initialState,
  { type, payload }: { type: string; payload: any }
) {
  switch (type) {
    case "setLogin":
      return {
        ...state,
        isLogin: payload,
      };
    default:
      return state;
  }
}
