/* eslint-disable */
// jshint ignore: start

import * as React from 'react';
import { Jockey } from '../Jockey/Jockey';
import { RaceTrack } from '../RaceTrack/RaceTrack';
import data from '../team.json';

const random = () => {
    return Math.floor(Math.random() * data.length);
};

export class JockeyList extends React.Component {
    state = {
        horses: []
    }

    componentWillMount() {
        let people = [data[random()], data[random()], data[random()], data[random()]];
        this.setState({horses: people});
    }
    
    render() {
        // console.log(this.state.horses);
        return (
            <div>
                {this.state.horses.map((person, i) => {
                    return (
                        <Jockey 
                            key={i}
                            avatar_url={person.avatar_url}
                            login={person.login}
                        />
                    );
                })}
            <RaceTrack />
            </div>
        )
    }
}