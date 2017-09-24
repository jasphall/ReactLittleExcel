import * as React from "react";

const TableHeader = props => {
    const { headers, sort, onSort } = props;
    const onClick = ev => {
        onSort(ev.target.cellIndex)
    };

    return (
        <thead onClick={onClick}>
        <tr>
            {
                headers.map(function (title, id) {
                    if (sort.columnId === id) {
                        title += sort.ascending ? ' \u2193' : ' \u2191';
                    }
                    return <th key={id}>{title}</th>
                })
            }
        </tr>
        </thead>
    );
};

export default TableHeader;