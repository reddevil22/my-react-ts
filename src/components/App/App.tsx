import * as React from 'react';
import './App.css';
import { JockeyList } from '../JockeyList/JockeyList';
import { Progress, Button } from 'antd';
const ButtonGroup = Button.Group;

interface State {
    percent: number;
}

export class App extends React.Component<React.Props<{}>, State> {
    constructor(props: React.Props<{}>) {
        super(props);

        this.state = {
            percent: 0
        };
    }

    increase = () => {
        let percent = this.state.percent + 10;
        if (percent > 100) {
            percent = 100;
        }
        this.setState({ percent });
    }

    decline = () => {
        let percent = this.state.percent - 10;
        if (percent < 0) {
            percent = 0;
        }
        this.setState({ percent });
    }
    /* render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img
                        src={require('../../images/logo.svg')}
                        className="App-logo"
                        alt="logo"
                    />
                    <h1 className="App-title">
                        {' '}
                        Welcome to React with Typescript{' '}
                    </h1>
                    <h2 className="App-sub-title"> Kurtosys Grads </h2>
                </header>
                <p className="App-intro">
                    To get started, edit{' '}
                    <code> src / components / App / App.tsx </code> and save to
                    reload.
                </p>
            </div>
        );
    } */

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img
                        src={require('../../images/logo.svg')}
                        className="App-logo"
                        alt="logo"
                    />
                    <h1 className="App-title">Welcome to React</h1>
                    <h2 className="App-sub-title">Kurtosys Grads</h2>
                </header>

                <body>
                    <div id="horses">
                        <h2>Horses</h2>
                        <JockeyList />
                    </div>

                    <div id="track">
                        <h2>Race Track</h2>
                        <ButtonGroup>
                            <Button onClick={this.increase} type="primary">Start Race</Button>
                            <Button onClick={this.decline} type="danger">Reset Race</Button>
                        </ButtonGroup>
                        {/* <div id="grass">
                            <div id="line-1" />
                            <div id="line-2" />
                            <div id="line-3" />
                        </div> */}
                        <Progress percent={this.state.percent} showInfo={false} />
                        <Progress percent={this.state.percent} showInfo={false} />
                        <Progress percent={this.state.percent} showInfo={false} />
                        <Progress percent={this.state.percent} showInfo={false} />
                    </div>

                    <div id="scoreboard">
                        <h2>Scoreboard</h2>
                        <p>1: Joel</p>
                    </div>
                </body>
            </div>
        );
    }
}
