import reducer from "./reducer";
import createStore from "redux/es/createStore";

const store = createStore(reducer);

export default store;