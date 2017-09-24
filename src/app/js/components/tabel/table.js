import * as React from "react";
import PropTypes from 'prop-types'
import connect from "react-redux/es/connect/connect";
import TableHeader from "./header/tableHeader";
import TableBody from "./body/tableBody";
import {EDIT, FILTER_CHANGED, FILTER_TOGGLED, SORT} from "../../constants/actions";
import TableFiltersContainer from "./filters/tableFiltersContainer";

class Table extends React.Component {

    render() {
        const {headers, data, sort, filter, onSort, onEdit, onFilterToggle, onFilterChange} = this.props;

        return (
            <div>
                <table className="table">
                    <TableHeader headers={headers} sort={sort} onSort={onSort} />
                    <TableBody data={data} onEdit={onEdit} />
                </table>
                <TableFiltersContainer columnsLength={headers.length} filtering={filter.currentlyFiltering} onFilterToggle={onFilterToggle} onFilterChange={onFilterChange} />
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        headers: state.headers,
        data: state.data,
        sort: state.sort,
        filter: state.filter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSort: (columnId) => dispatch({
            type: SORT,
            columnId: columnId
        }),
        onEdit: (input, edit) => dispatch({
            type: EDIT,
            input: input,
            edit: edit
        }),
        onFilterToggle: () => dispatch({
            type: FILTER_TOGGLED
        }),
        onFilterChange: (columnId, filterText) => dispatch({
            type: FILTER_CHANGED,
            columnId: columnId,
            filterText: filterText
        })
    }
};

Table.propTypes= {
    headers: PropTypes.array,
    data: PropTypes.array,
    sort: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);