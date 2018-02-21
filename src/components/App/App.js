"use strict";
var __extends =
    (this && this.__extends) ||
    (function() {
        var extendStatics =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
                function(d, b) {
                    d.__proto__ = b;
                }) ||
            function(d, b) {
                for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
            };
        return function(d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype =
                b === null
                    ? Object.create(b)
                    : ((__.prototype = b.prototype), new __());
        };
    })();
exports.__esModule = true;
var React = require("react");
require("./App.css");
var App = /** @class */ (function(_super) {
    __extends(App, _super);
    function App(props) {
        return _super.call(this, props) || this;
    }
    App.prototype.render = function() {
        return (
            <div className="App">
                <header className="App-header">
                    <img
                        src={require("../../images/logo.svg")}
                        className="App-logo"
                        alt="logo"
                    />
                    <h1 className="App-title">
                        {" "}
                        Welcome to React with Typescript{" "}
                    </h1>
                    <h2 className="App-sub-title"> Kurtosys Grads </h2>
                </header>
                <p className="App-intro">
                    To get started, edit{" "}
                    <code> src / components / App / App.tsx </code> and save to
                    reload.
                </p>
            </div>
        );
    };
    return App;
})(React.Component);
exports.App = App;
