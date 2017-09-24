import * as ReactDOM from "react-dom";
import * as React from "react";
import Provider from "react-redux/es/components/Provider";
import createStore from "redux/es/createStore";
import tableReducer from "./reducers/tableReducer";
import Table from "./components/table/table";

const store1 = createStore(tableReducer);
const store = createStore(tableReducer);

ReactDOM.render(
    <div>
        <Provider store={store}>
            <Table title="Najciekawsze bestsellery w 2010 r."/>
        </Provider>
        <hr />
        <Provider store={store1}>
            <Table title="Najciekawsze bestsellery w 2011 r."/>
        </Provider>
    </div>,
    document.getElementById("app")
);