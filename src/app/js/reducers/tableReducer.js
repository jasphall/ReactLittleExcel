import {
    EDIT,
    FILTER_CHANGED,
    FILTER_TOGGLED,
    SORT
} from "../constants/actions";
import {
    filter,
    sort,
    switchValue
} from "../components/table/utils/dataUtils";
import tableInitialState from "../constants/initState";

export default (state = tableInitialState, action) => {
    switch (action.type) {
        case SORT: {
            return Object.assign({}, state, {
                    sort: {
                        ascending: !state.sort.ascending,
                        columnId: action.columnId
                    },
                    data: sort(state.data, !state.sort.ascending, action.columnId),
                }
            )
        }
        case EDIT: {
            return Object.assign({}, state, {
                sort: {
                    ascending: !state.sort.ascending,
                    columnId: action.columnId
                },
                data: switchValue(state.data, action.input, action.edit.row, action.edit.cell),
            })
        }
        case FILTER_TOGGLED: {
            let data = state.filter.currentlyFiltering ? state.filter.preFilteredData : state.data;
            let filter = state.filter.currentlyFiltering ?
                { currentlyFiltering: false, preFilteredData: null } :
                { currentlyFiltering: true, preFilteredData: state.data };

            return Object.assign({}, state, {
                data: data,
                filter: filter
            })
        }
        case FILTER_CHANGED: {
            return Object.assign({}, state, {
                data: filter(state.filter.preFilteredData, action.columnId, action.filterText)
            });
        }
        default:
            return state;
    }
};