import React from "react";
import PropTypes from "prop-types";
import TableHeader from "./table/table-header";
import TableBody from "./table/table-body";

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
            data: this.props.data,
            search: false
        };

        this._renderSearch = this._renderSearch.bind(this);
    }

    _search(e) {
        // TODO
    }

    /**
     * Handler dla zmiany sortowania
     * @param e
     * @param sortedAscending
     * @private
     */
    _onSortChanged(e, sortedAscending) {
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
        return (
            <table className="table">
                <TableHeader headers={this.props.headers}
                    callbackParent={(e, sortedAscending) => this._onSortChanged(e, sortedAscending)}
                />
                <TableBody data={this.state.data} />
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