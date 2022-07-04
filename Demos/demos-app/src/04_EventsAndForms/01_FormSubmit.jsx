import React from 'react';
import './bootstrap.min.css'

export default class Contuct extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "", email: "" };

        this.nameChanged = this.nameChanged.bind(this);
        this.emailChanged = this.emailChanged.bind(this);
    }

    nameChanged(e) {

    }

    emailChanged(e) {

    }

    render() {
        return (
            <div className="container" style={{ width: "700px" }}>
                <div className='jumbotron' >
                    <h1>Send Your Email:</h1>
                    <form>
                        <div className="form-group row">
                            <label for="name" className="col-sm-2 col-form-label">Name:</label>
                            <input type="text" onChange={this.nameChanged} className="form-control" id="name" placeholder="name" />
                        </div>
                        <div className="form-group row">
                            <label for="inputEmail" className="form-label mt-4">Your Email:</label>
                            <input type="email" onChange={this.emailChanged} className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }

}