import * as React from "react";
import TableFilters from "./tableFilters";

const TableFiltersContainer = props => {
    const { columnsLength, filtering, onFilterToggle, onFilterChange } = props;

    return (
        <div>
            <hr />
            <button type="button" className="btn btn-primary" onClick={onFilterToggle}>Filtruj</button>
            <TableFilters
                columnsLength={columnsLength}
                filtering={filtering}
                onFilterChange={onFilterChange}
            />
        </div>
    );

}

export default TableFiltersContainer;