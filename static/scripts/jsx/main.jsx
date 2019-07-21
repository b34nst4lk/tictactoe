import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {cloneDeep} from 'lodash';

class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            O: [],
            X: [],
            turn: "X", // enum(X, O)
        }
        this.create_rows = this.create_rows.bind(this);
        this.onclick = this.onclick.bind(this);
    }

    onclick(x, y) {
        let payload = _.cloneDeep(this.state)
        payload[this.state.turn].push([x, y])
        axios.post("submit_turn", payload)
            .then(response => {
                this.setState(response.data)
            })
            .catch(error => console.log(error))
    }

    create_rows(no_of_rows, no_of_cols) {
        const row_count = [...Array(no_of_rows).keys()];
        let rows = row_count.map(row => {
            const col_count = [...Array(no_of_cols).keys()];
            var columns = col_count.map(col =>
                <Square 
                    value={null} 
                    onclick={() => this.onclick(row, col)}
                    key={row*100 + col}
                />
            )

            return (
                <div className="row" key={row}>
                    {columns}
                </div>
            )
        })
        return rows;
    }

    render() {
        return (
            <div>
                {this.create_rows(3,3)}
            </div>
        )
    }
}


function Square(props) {
    return (
        <div className="square" onClick={props.onclick}>
            <span>{props.value}</span>
        </div>
    )
}

ReactDOM.render(<Board />, document.getElementById("main"))
