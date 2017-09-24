import * as ReactDOM from "react-dom";
import * as React from "react";
import Provider from "react-redux/es/components/Provider";
import createStore from "redux/es/createStore";
import tableReducer from "./reducers/tableReducer";
import Table from "./components/table/table";

const store = createStore(tableReducer);

ReactDOM.render(
    <Provider store={store}>
        <Table />
    </Provider>,
    document.getElementById("app")
);