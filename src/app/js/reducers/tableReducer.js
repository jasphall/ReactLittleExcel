import {EDIT, FILTER_CHANGED, FILTER_TOGGLED, SORT} from "../constants/actions";
import {TABLE_DATA, TABLE_HEADERS} from "../constants/testData/tableTestData";
import {filter, sort, switchValue} from "../components/tabel/utils/dataUtils";

let initialState = {
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

export default (state = initialState, action) => {
    switch (action.type) {
        case SORT: {
            return {
                headers: state.headers,
                sort: {
                    ascending: !state.sort.ascending,
                    columnId: action.columnId
                },
                data: sort(state.data, !state.sort.ascending, action.columnId),
                filter: state.filter
            }
        }

        case EDIT: {
            return {
                headers: state.headers,
                sort: {
                    ascending: !state.sort.ascending,
                    columnId: action.columnId
                },
                data: switchValue(state.data, action.input, action.edit.row, action.edit.cell),
                filter: state.filter
            }
        }

        case FILTER_TOGGLED: {
            let newState = {
                headers: state.headers,
                sort: state.sort,
            };

            if (state.filter.currentlyFiltering) {
                newState.data = state.filter.preFilteredData;
                newState.filter = {
                    currentlyFiltering: false,
                    preFilteredData: null
                }
            } else {
                newState.data = state.data;
                newState.filter = {
                    currentlyFiltering: true,
                    preFilteredData: state.data
                }
            }

            return newState;
        }

        case FILTER_CHANGED: {
            let currentData = state.data;

            if (!action.filterText) {
                currentData = filter.preFilteredData;
            }

            return {
                headers: state.headers,
                sort: state.sort,
                data: filter(state.filter.preFilteredData, action.columnId, action.filterText),
                filter: {
                    currentlyFiltering: state.filter.currentlyFiltering,
                    preFilteredData: state.filter.preFilteredData
                }
            }
        }

        default:
            return state;
    }
};