import * as React from "react";

const TableBody = props => {
    const { edit, onChangeLastEditedCell, onCellEdit } = props;

    const onDoubleClick = ev => {
        onChangeLastEditedCell(ev);
    };

    const onInputSubmit = ev => {
        ev.preventDefault();
        onCellEdit(ev);
    };

    return (
        <tbody onDoubleClick={onDoubleClick}>
        {
            props.data.map(function (row, rowId) {
                return (
                    <tr key={rowId}>
                        {
                            row.map(function (cell, cellId) {
                                if (edit && edit.row === rowId && edit.cell === cellId) {
                                    cell = React.DOM.form({
                                        onSubmit: onInputSubmit
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

};

export default TableBody;