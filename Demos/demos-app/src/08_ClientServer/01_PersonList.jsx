import React from 'react';
import axios from 'axios';
import api from './api'

export default class PersonList extends React.Component {
    state = {
        persons: []
    }

    //Triggered Only Once when Component is Initilized and Rendered to UI
    //Initilized Component EVENT
    componentDidMount() {
        api.get(`users`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    }

    render() {
        return (
            <>
                <h1>Users:</h1>

                <ul className='list-group'>
                    {
                        this.state.persons
                            .map(person =>
                                <li className='list-group-item d-flex justify-content-between align-items-center' key={person.id}>{person.name}</li>

                            )
                    }
                </ul>

            </>
        )
    }
}