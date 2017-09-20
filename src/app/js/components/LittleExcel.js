import React from "react";
import PropTypes from "prop-types";
import {isNumber} from "../math-utils";

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
            sortedAscending: false
        };

        this.getCellClassName = this.getCellClassName.bind(this);
        this.sort = this.sort.bind(this);
    }

    getCellClassName(cell) {
        return isNumber(cell) ? "right-aligned" : "";
    }

    sort(e) {
        let column = e.target.cellIndex;
        let sortedAscending = this.state.sortedBy === column && !this.state.sortedAscending;
        let data = Array.from(this.state.data);

        data.sort(function (a, b) {
            return sortedAscending ? a[column] > b[column] ? -1 : 1 : a[column] > b[column] ? 1 : -1;
        });

        this.setState({
            data: data,
            sortedBy: column,
            sortedAscending: sortedAscending
        });
    }

    render() {
        let _this = this;
        return (
            <table className="table">
                <thead onClick={_this.sort}>
                <tr>
                {
                    this.props.headers.map(function (title, idx) {
                        if (this.state.sortedBy === idx) {
                            title += this.state.sortedAscending ? ' \u2193' : ' \u2191';
                        }
                        return <th key={idx}>{title}</th>;
                    }, this)
                }
                </tr>
                </thead>
                <tbody>
                {
                    this.state.data.map(function (row, id) {
                        return (
                            <tr key={id}>
                            {
                                row.map(function (cell, id) {
                                    return <td className={_this.getCellClassName(cell)} key={id}>{cell}</td>
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
}

LittleExcel.propTypes = {
    headers: PropTypes.arrayOf(
        PropTypes.string
    ),
    data: PropTypes.array
};

export default LittleExcel;