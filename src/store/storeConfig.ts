import { GlobalStore, IGlobalStore } from "redux-micro-frontend";
import { Actions } from "./actionEnums";
import { AuthReducer } from "./authReducer";

const configureStore = (): IGlobalStore => {
  const globalStore = GlobalStore.Get();

  globalStore.CreateStore("AuthApp", AuthReducer, []);
  globalStore.RegisterGlobalActions("AuthApp", [Actions.LOGIN]);

  return globalStore;
};

export default configureStore;
