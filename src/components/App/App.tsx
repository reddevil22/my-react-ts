import * as React from 'react';
import './App.css';
import { JockeyList } from '../JockeyList/JockeyList';

export class App extends React.Component<React.Props<{}>, {}> {
    constructor(props: React.Props<{}>) {
        super(props);
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
                    <img src={require('../../images/logo.svg')} className="App-logo" alt="logo" />
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
                        <button>Start Race</button>
                        <button type="reset">Reset Race</button>
                        <div id="grass">
                            <div id="line-1" />
                            <div id="line-2" />
                            <div id="line-3" />
                        </div>
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
