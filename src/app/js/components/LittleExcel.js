import React from "react";
import PropTypes from "prop-types";

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
            data: this.props.initialData
        };

        this.isNumber = this.isNumber.bind(this);
    }

    isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);;
    }

    getCellClassName(cell) {
        if (this.isNumber(cell)) {
            return "right-aligned";
        } else {
            return "";
        }
    }

    render() {
        let _this = this;
        return (
            <table className="table">
                <thead>
                <tr>
                {
                    this.props.headers.map(function (title, idx) {
                        return <th key={idx}>{title}</th>;
                    })
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