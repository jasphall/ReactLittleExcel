import * as React from "react";
import {isNumber} from "../../math-utils";

/**
 * Komponent zawartości tabeli
 */
class TableBody extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            edit: null,
        };

        this._getCellClassName = this._getCellClassName.bind(this);
        this._showEditor = this._showEditor.bind(this);
        this._save = this._save.bind(this);
    }

    /**
     * Zwraca nazwę klasy dla wartości liczbowych w tabeli
     * @param cell
     * @returns {string}
     * @private
     */
    _getCellClassName(cell) {
        return isNumber(cell) ? "right-aligned" : "";
    }

    /**
     * Wyświetla edytor wartości komórki
     * @param e
     * @private
     */
    _showEditor(e) {
        let row = e.target.dataset.row;
        let cell = e.target.cellIndex;

        this.setState({
            edit: {
                row: parseInt(row, 10),
                cell: cell
            }
        });
    }

    /**
     * Zapisuje nową wartość w komórce
     * @param e
     * @private
     */
    _save(e) {
        // Aby strona się nie przeładowywałą
        e.preventDefault();

        let input = e.target.firstChild;
        let data = Array.from(this.props.data);

        data[this.state.edit.row][this.state.edit.cell] = input.value;

        this.setState({
            edit: null
        });
    }

    render() {
        let _this = this;
        return (
            <tbody onDoubleClick={_this._showEditor}>
            {
                this.props.data.map(function (row, rowId) {
                    return (
                        <tr key={rowId}>
                            {
                                row.map(function (cell, cellId) {
                                    let content = cell;
                                    let currentlyEdit = _this.state.edit;

                                    if (currentlyEdit && currentlyEdit.row === rowId && currentlyEdit.cell === cellId) {
                                        content = React.DOM.form({
                                            onSubmit: _this._save,
                                        }, React.DOM.input({
                                            type: "text",
                                            className: "form-control",
                                            defaultValue: content
                                        }));
                                    }

                                    return React.DOM.td({
                                        key: cellId,
                                        'data-row': rowId,
                                        className: _this._getCellClassName(cell)
                                    }, content);
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