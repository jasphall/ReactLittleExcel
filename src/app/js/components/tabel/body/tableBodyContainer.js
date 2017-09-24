import * as React from "react";
import TableBody from "./tableBody";

class TableBodyContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            edit: null
        };

        this.changeLastEditedCell = this.changeLastEditedCell.bind(this);
        this.onEdit = this.onEdit.bind(this);
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

    onEdit(e) {
        const { onEdit } = this.props;
        let input = e.target.firstChild.value;

        onEdit(input, this.state.edit);

        this.setState({
            edit: null
        });
    }

    render() {
        return (
            <TableBody data={this.props.data} edit={this.state.edit} onChangeLastEditedCell={this.changeLastEditedCell} onCellEdit={this.onEdit} />
        );
    }

}

export default TableBodyContainer;