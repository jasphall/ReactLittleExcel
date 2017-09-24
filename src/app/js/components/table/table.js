import * as React from "react";
import PropTypes from 'prop-types'
import connect from "react-redux/es/connect/connect";
import TableHeader from "./header/tableHeader";
import {EDIT, FILTER_CHANGED, FILTER_TOGGLED, SORT} from "../../constants/actions";
import TableFiltersContainer from "./filters/tableFiltersContainer";
import TableBodyContainer from "./body/tableBodyContainer";

const Table = props => {
    const {headers, data, sort, filter, onSort, onEdit, onFilterToggle, onFilterChange} = props;
    const { title } = props;

    return (
        <div className="main-table-wrapper">
            <h3>{title}</h3>
            <table className="table table-striped main-table">
                <TableHeader
                    headers={headers}
                    sort={sort}
                    onSort={onSort}
                />
                <TableBodyContainer
                    data={data}
                    onEdit={onEdit}
                />
            </table>
            <TableFiltersContainer
                columnsLength={headers.length}
                filtering={filter.currentlyFiltering}
                onFilterToggle={onFilterToggle}
                onFilterChange={onFilterChange}
            />
        </div>
    );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(Table);