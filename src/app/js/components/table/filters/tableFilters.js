import * as React from "react";

const TableFilters = props => {
    const { columnsLength, filtering, onFilterChange } = props;

    const onChange = ev => {
        onFilterChange(ev.target.dataset.id, ev.target.value);
    };

    if (!filtering) {
        return null;
    }

    let filters = [];
    for (let i=0; i<columnsLength; i++) {
        filters.push(
            React.DOM.td({key: i},
                React.DOM.input({
                    type: "text",
                    'data-id': i,
                    className: "form-control",
                }))
        )
    }

    return (
        <table className="table">
            <tbody>
            <tr onChange={onChange}>
                {filters}
            </tr>
            </tbody>
        </table>
    );
}

export default TableFilters;