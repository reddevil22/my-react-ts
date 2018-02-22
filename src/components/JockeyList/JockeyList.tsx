import * as React from 'react';
import Jockey from '../Jockey/Jockey';
// import RaceTrack from '../RaceTrack/RaceTrack';
import JockeyProps from '../../interfaces';
import PersonInterface from '../../interfaces';

const data = require('json-loader!../../team.json');

interface JockeyListState {
    arrayJockey: Array<object>;
}

const random = () => {
    return Math.floor(Math.random() * data.length);
};

const randomArr = () => {
    let people = [
        data[random()],
        data[random()],
        data[random()],
        data[random()]
    ];

    return people;
};

export class JockeyList extends React.Component<React.Props<{}>, JockeyListState> {
    constructor(props: React.Props<{}>) {
        super(props);

        this.state = {
            arrayJockey: randomArr().map((person: PersonInterface, i: number) => (
                {avatar_url: person.avatar_url, login: person.login}
            ))
        };
    }

    render() {
        // console.log(this.state.horses);
        return (
            <div>
                {this.state.arrayJockey.map((person: PersonInterface, i: number) => {
                    return (
                        <Jockey
                            key={i}
                            avatar_url={person.avatar_url}
                            login={person.login}
                        />
                    );
                })}
                {/* <RaceTrack /> */}
            </div>
        );
    }
}
