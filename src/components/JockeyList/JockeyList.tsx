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

export class JockeyList extends React.Component<JockeyProps, JockeyListState> {
    constructor(props: JockeyProps) {
        super(props);

        this.state = {
            arrayJockey: randomArr().map((person: PersonInterface, i: number) => (
                {name: person.login, avatar_url: person.avatar_url}
            ))
        };
    }

    render() {
        // console.log(this.state.horses);
        return (
            <div>
                {this.state.arrayJockey.map((person, i) => {
                    return (
                        <Jockey
                            key={i}
                            avatar_url={person.avatar_url}
                            login={person.name}
                        />
                    );
                })}
                <RaceTrack />
            </div>
        );
    }
}
