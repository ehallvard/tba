import { createStore, Store, bindActionCreators } from "redux";
import * as currentTime from "./modules/currentTime";

export const configureStore: Store<{}> = (): Store<{}> => {
  const store: Store<{}> = createStore(currentTime.reducer);

  const actions = {
    currentTime: bindActionCreators(currentTime.actions, store.dispatch)
  };

  return { store, actions };
};

export default configureStore;
