import * as React from "react";
import TableFilters from "./tableFilters";

class TableFiltersContainer extends React.Component {

    render() {
        const { columnsLength, filtering, onFilterToggle, onFilterChange } = this.props;

        return (
            <div>
                <hr />
                <button type="button" className="btn btn-primary" onClick={onFilterToggle}>Filtruj</button>
                <TableFilters columnsLength={columnsLength} filtering={filtering} onFilterChange={onFilterChange} />
            </div>
        );
    }

}

export default TableFiltersContainer;