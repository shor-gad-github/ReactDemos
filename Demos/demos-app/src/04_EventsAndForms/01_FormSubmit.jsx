import React from 'react';
import './bootstrap.min.css'

export default class Contuct extends React.Component {
    constructor(props) {
        super(props);
        this.state = { firstname: "", email: "" };


    }

    render() {
        return (
            <div className='jumbotron' style={{ width: "700px" }}>
                <h1>Send Your Mail and we will contact you:</h1>
                <form>
                    <div className="form-group row">

                        <div className="col-sm-10">
                            <label for="name" className="col-sm-2 col-form-label">Email</label>
                            <input type="text" className="form-control" id="name" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="inputEmail" className="form-label mt-4">Email address</label>
                        <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>


                </form>
            </div>
        );
    }


}