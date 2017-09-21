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

        this._preSearchData = null;

        this._search = this._search.bind(this);
        this._toggleSearch = this._toggleSearch.bind(this);
        this._renderSearch = this._renderSearch.bind(this);
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

    _search(e) {
        let searchText = e.target.value.toLowerCase();

        if (!searchText) {
            this.setState({
                data: this._preSearchData
            });
        }

        let columnId = e.target.dataset.id;
        let filteredData = this._preSearchData.filter(function (row) {
            return row[columnId].toString().toLowerCase().indexOf(searchText) > -1;
        });

        this.setState({
            data: filteredData
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
                            'data-id': id,
                            className: "form-control",
                        }));
                })
            }
            </tr>
        );
    }

    _toggleSearch() {
        if (this.state.search) {
            this.setState({
               search: false,
               data: this._preSearchData
            });
            this._preSearchData = null;
        } else {
            this.setState({
                search: true
            });
            this._preSearchData = this.state.data;
        }
    }

    _renderTable() {
        return (
            <table className="table">
                <TableHeader headers={this.props.headers}
                    callbackParent={(e, sortedAscending) => this._onSortChanged(e, sortedAscending)}
                />
                {this._renderSearch()}
                <TableBody data={this.state.data} />
            </table>
        );
    }

    _renderToolbar() {
        return (
            <button className="toolbar" onClick={this._toggleSearch}>Wyszukaj</button>
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