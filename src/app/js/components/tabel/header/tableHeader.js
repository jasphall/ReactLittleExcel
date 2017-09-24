import * as React from "react";

class TableHeader extends React.Component {

    render() {
        const { headers, sort, onSort } = this.props;

        return (
            <thead onClick={(e) => onSort(e.target.cellIndex)}>
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
    }

}

export default TableHeader;