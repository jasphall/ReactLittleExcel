import * as React from "react";

class TableFilters extends React.Component {

    render() {
        const { columnsLength, filtering, onFilterChange } = this.props;

        if (!filtering) {
            return null;
        }

        let inputs = [];
        for (let i=0; i<columnsLength; i++) {
            inputs.push(
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
                <tr onChange={(e) => onFilterChange(e.target.dataset.id, e.target.value)}>
                    {inputs}
                </tr>
                </tbody>
            </table>
        );
    }

}

export default TableFilters;