﻿/// <reference path="./typings/index.d.ts" />
import * as React from "react";
import * as ReactDOM from "react-dom";
import MyComponent from "./MyComponent";

window.onload = () => {
    ReactDOM.render(<MyComponent foo="test"/>, document.getElementById('content'));
};