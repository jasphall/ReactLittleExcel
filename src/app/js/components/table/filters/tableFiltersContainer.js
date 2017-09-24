import * as React from "react";
import TableFilters from "./tableFilters";

const TableFiltersContainer = props => {
    const { columnsLength, filtering, onFilterToggle, onFilterChange } = props;

    return (
        <div>
            <TableFilters
                className="main-table-filters"
                columnsLength={columnsLength}
                filtering={filtering}
                onFilterChange={onFilterChange}
            />
            <button
                type="button"
                className="btn btn-primary"
                onClick={onFilterToggle}>Filtruj
            </button>
        </div>
    );

};

export default TableFiltersContainer;