import * as  React from 'react';

interface Props {
    avatar_url: string;
    login: string;
}

export class Jockey extends React.Component<Props, {}> {
    render() {
        return(
            <div>
                <img width="50" src={this.props.avatar_url} alt=""/>
                <p>{this.props.login}</p>
            </div>
        );
    }
}