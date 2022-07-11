import React, { Component } from 'react'
import CounterEdit from './counter'



export default class Counters extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div class="container">
                {
                    this.props.data.map(d =>
                        <CounterEdit counter={d}></CounterEdit>
                    )
                }

            </div>





        );
    }
}
