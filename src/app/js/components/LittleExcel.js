import * as React from "react";

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
        }
    }

    render() {
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
                                    return <td key={id}>{cell}</td>
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
    headers: React.PropTypes.arrayOf(
        React.PropTypes.string
    ),
    data: React.PropTypes.array
};

export default LittleExcel;