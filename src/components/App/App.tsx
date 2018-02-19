import * as React from 'react';
import './App.css';

interface Props {
    samplePropProp?: string;
}

interface State {
    sampleStateProp?: string;
}

export class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }
    render() {
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
    }
}
