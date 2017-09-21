import React from "react";
import PropTypes from "prop-types";
import {isNumber} from "../math-utils";
import TableHeader from "./table/TableHeader";

/**
 * Komponent bezstanowy małego arkusza
 *
 * @param props
 * @constructor
 */
class LittleExcel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.initialData,
            sortedBy: null,
            sortedAscending: false,
            edit: null,
            search: false
        };

        this.getCellClassName = this.getCellClassName.bind(this);
        this._showEditor = this._showEditor.bind(this);
        this._save = this._save.bind(this);
        this._renderSearch = this._renderSearch.bind(this);
    }

    getCellClassName(cell) {
        return isNumber(cell) ? "right-aligned" : "";
    }

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

    _save(e) {
        // Aby strona się nie przeładowywałą
        e.preventDefault();

        let input = e.target.firstChild;
        let data = Array.from(this.state.data);

        data[this.state.edit.row][this.state.edit.cell] = input.value;

        this.setState({
            edit: null,
            data: data
        });
    }

    _search(e) {
        // TODO
    }

    onSortChanged(e, sortedAscending) {
        let column = e.target.cellIndex;
        let data = Array.from(this.state.data);

        data.sort(function (a, b) {
            return sortedAscending ? a[column] > b[column] ? -1 : 1 : a[column] > b[column] ? 1 : -1;
        });

        this.setState({
            data: data
        });
    }

    _renderSearch() {
        if (!this.state.search) {
            return null;
        }

        return (
            <tr onChange={this._search}>
            {
                this.props.headers.map(function (_ignore, id) {
                    return React.DOM.td({key: id,},
                        React.DOM.input({
                            type: "text",
                            'data-id': id
                        }));
                })
            }
            </tr>
        );
    }

    _renderTable() {
        let _this = this;
        return (
            <table className="table">
                <TableHeader headers={this.props.headers}
                             callbackParent={(e, sortedAscending) => this.onSortChanged(e, sortedAscending)} />
                <tbody onDoubleClick={_this._showEditor}>
                {
                    this.state.data.map(function (row, rowId) {
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
                                            defaultValue: content
                                        }));
                                    }

                                    return React.DOM.td({
                                        key: cellId,
                                        'data-row': rowId,
                                        className: _this.getCellClassName(cell)
                                    }, content);

                                    // return <td className={_this.getCellClassName(cell)} key={cellId}>{content}</td>
                                })
                            }
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>
        );
    }

    _renderToolbar() {
        return (
            <button className="toolbar" onClick={this._renderSearch}>Wyszukaj</button>
        );
    }

    render() {
        return (
            <div>
                {this._renderToolbar()}
                {this._renderTable()}
            </div>
        );
    }

}

LittleExcel.propTypes = {
    headers: PropTypes.arrayOf(
        PropTypes.string
    ),
    data: PropTypes.array
};

export default LittleExcel;