import React, { Component } from 'react'



export default class CounterEdit extends Component {

    //01 Constractor 
    constructor(props) {
        super(props);

        //02 Set State 
        this.state =
        {
            id: "1",
            value: 10,
            min: 10,
            max: 20,
            interval: 1,
            isEdit: false
        }
        //03 Set Event Handlers Binded this enabled
        this.plus = this.plus.bind(this);
        this.minus = this.minus.bind(this);
        this.reset = this.reset.bind(this);
        this.setEditMode = this.setEditMode.bind(this);
        this.changeInput = this.changeInput.bind(this);
        this.saveState = this.saveState.bind(this);

        //04 html elements References
        // this.minInput = React.createRef();
        //this.maxInput = React.createRef();
        // this.valueInput = React.createRef();
        // this.intervalInput = React.createRef();

    }

    //04 Rendering 
    render() {

        //Percetnt calculate for Progress element
        let progressPercent = ((this.state.value + 1 - this.state.min) / Math.abs(this.state.max + 1 - this.state.min)) * 100;
        //jsx content according isEdit state
        let contentView = "";

        //Work Mode rendered
        if (!this.state.isEdit) {
            contentView =
                <React.Fragment>
                    <h3 className="card-title">{this.state.value}</h3>
                    <table>
                        <tr>
                            <td>{this.state.min}</td>
                            <td style={{ width: "100%" }}>
                                {/* <input style={{ width: "100%" }} type="range" min="1" max="100" value="50"></input> */}

                                <div className="progress">

                                    <div className="progress-bar progress-bar-striped"
                                        role="progressbar"
                                        style={{ width: `${progressPercent}%` }}
                                        aria-valuenow={this.state.value}
                                        aria-valuemin={this.state.min}
                                        aria-valuemax={this.state.max}></div>
                                </div>
                            </td>
                            <td>{this.state.max}</td>
                        </tr>
                    </table>
                    <div style={{ marginTop: "7px" }}>
                        <button onClick={this.plus} type="button" className="btn btn-info">Plus</button>
                        <button onClick={this.minus} type="button" className="btn btn-warning">Minus</button>
                        <button onClick={this.reset} type="button" className="btn btn-danger">reset</button>

                    </div>
                </React.Fragment >
        }
        //Edit Mode Renderd
        else {
            contentView =

                <React.Fragment >
                    <div class="form-group">

                        <div className="row">
                            <div className="col-lg-2">

                                <label className="control-label" for="minInput">Min Value:</label>
                                <input onChange={this.changeInput} className="form-control" id="min" type="text" value={this.state.min}  ></input>

                            </div>
                            <div className="col-lg-2">
                                <fieldset >
                                    <label className="control-label" for="maxInput">Max Value:</label>
                                    <input onChange={this.changeInput} className="form-control" id="max" type="text" value={this.state.max}  ></input>
                                </fieldset>
                            </div>
                            <div className="col-lg-2">
                                <fieldset >
                                    <label className="control-label" for="vlaueInput">Current Value:</label>
                                    <input onChange={this.changeInput} className="form-control" id="value" type="text" value={this.state.value} ></input>
                                </fieldset>
                            </div>
                            <div className="col-lg-2">
                                <fieldset >
                                    <label className="control-label" for="intervalInput">Interval:</label>
                                    <input onChange={this.changeInput} className="form-control" id="interval" type="text" value={this.state.interval} ></input>
                                </fieldset>
                            </div>
                            <div className="col-lg-2">

                            </div>
                            <div className="col-lg-2">

                            </div>
                        </div>

                    </div>
                    <button onClick={this.saveState} type="button" className="btn btn-info">update</button>
                </React.Fragment>

        }

        //the JSX Frame Rendering Component View
        return (
            <div className="card border-primary mb-3" style={{ maxwidth: '20rem' }}>
                <div style={{ fontSize: "20px" }} className="card-header">
                    <button onClick={this.setEditMode} style={{ float: "right" }} type="button" className="btn btn-link">Edit Counter</button>
                    #{this.state.id}

                    <br></br>
                    {this.state.min} - {this.state.max}
                </div>
                <div className="card-body">
                    {contentView}
                </div>
            </div>
        );
    }

    //Add Plus Clicked
    plus(e) {
        if (this.state.value + this.state.interval > this.state.max) {
            // alert("cant increment value is bigger then max value");
        }
        //Set state only if in Range
        else {
            this.setState({ value: this.state.value + this.state.interval });
        }
    }

    //Add inus Clicked
    minus(e) {
        if (this.state.value - this.state.interval < this.state.min) {
            // alert("cant decrement value is lower then min value ");
        }
        //Set state only if in Range
        else {
            this.setState({ value: this.state.value - this.state.interval });
        }
    }

    //Reset Clicked
    reset(e) {
        this.setState({ value: this.state.min });
    }

    saveState(e) {
        //get Inputs Values
        // let newMin = this.minInput.current.value;
        // let newMinVal = parseInt(newMin);
        // let newMax = this.maxInput.current.value;
        // let newMaxVal = parseInt(newMax);
        // let newInterval = this.intervalInput.current.value;
        // let newIntervalVal = parseInt(newInterval);
        // let newValue = this.valueInput.current.value;
        // let newValueVal = parseInt(newValue);


        // this.setState({
        //     min: newMinVal,
        //     max: newMaxVal,
        //     interval: newIntervalVal,
        //     value: newValueVal,
        //     isEdit: false
        // });

    }

    //Changed View Mode toggeled by clicked
    setEditMode(e) {
        this.setState({ isEdit: !this.state.isEdit });
    }

    //User Cahnged Inputs
    changeInput(e) {
        //can do validate Here
        this.setState({ [e.target.id]: parseInt(e.target.value) })
    }
}

//Get Root Element By ID(document API)
//let rootDiv = document.querySelector("#root");
//ReactDOM.render(<Counter />, rootDiv);
