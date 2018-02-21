import JockeyProps from '../../interfaces';
import * as  React from 'react';

export default class Jockey extends React.Component<JockeyProps, {}> {
    render() {
        return(
            <div>
                <img width="50" src={this.props.avatar_url} alt=""/>
                <p>{this.props.login}</p>
            </div>
        );
    }
}