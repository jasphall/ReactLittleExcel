import {TABLE_DATA, TABLE_HEADERS} from "./testData/tableTestData";

const tableInitialState = {
    headers: TABLE_HEADERS,
    data: TABLE_DATA,
    sort: {
        ascending: false,
        columnId: null,
    },
    filter: {
        currentlyFiltering: false,
        preFilteredData: null
    }
};

export default tableInitialState;