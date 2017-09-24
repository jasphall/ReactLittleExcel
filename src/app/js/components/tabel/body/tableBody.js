import * as React from "react";

class TableBody extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            edit: null
        };

        this.changeLastEditedCell = this.changeLastEditedCell.bind(this);
        this._onEdit = this._onEdit.bind(this);
    }

    changeLastEditedCell(e) {
        let row = e.target.dataset.row;
        let cell = e.target.cellIndex;

        this.setState({
            edit: {
                row: parseInt(row, 10),
                cell: cell
            }
        });
    }

    _onEdit(e) {
        const { onEdit } = this.props;
        e.preventDefault();

        let input = e.target.firstChild.value;

        onEdit(input, this.state.edit);

        this.setState({
            edit: null
        });
    }

    render() {
        let currentEdit = this.state.edit;
        let _this = this;

        return (
            <tbody onDoubleClick={this.changeLastEditedCell}>
            {
                this.props.data.map(function (row, rowId) {
                    return (
                        <tr key={rowId}>
                            {
                                row.map(function (cell, cellId) {
                                    if (currentEdit && currentEdit.row === rowId && currentEdit.cell === cellId) {
                                        cell = React.DOM.form({
                                            onSubmit: _this._onEdit
                                        }, React.DOM.input({
                                            type: "text",
                                            className: "form-control",
                                            defaultValue: cell
                                        }));
                                    }

                                    return React.DOM.td({
                                        key: cellId,
                                        'data-row': rowId,
                                    }, cell);
                                })
                            }
                        </tr>
                    );
                })
            }
            </tbody>
        );
    }

}

export default TableBody;