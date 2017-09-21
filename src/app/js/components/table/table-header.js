import * as React from "react";

class TableHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sortedBy: null,
            sortedAscending: false
        };

        this.sort = this.sort.bind(this);
    }

    sort(e) {
        let column = e.target.cellIndex;
        let sortedAscending = this.state.sortedBy === column && !this.state.sortedAscending;

        this.setState({
            sortedBy: column,
            sortedAscending: sortedAscending
        });

        this.props.callbackParent(e, sortedAscending);
    }

    render() {
        let _this = this;
        return (
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
        );
    }

}

export default TableHeader;