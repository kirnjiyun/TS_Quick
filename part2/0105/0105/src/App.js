"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_2 = require("react");
var box = <div></div>;
function App() {
    var _a = (0, react_1.useState)(["jiyunee"]), user = _a[0], setUser = _a[1];
    return (<div>
            <h4>안녕</h4>
            <Profile name="철수" age="20"></Profile>
        </div>);
}
exports.default = App;
function Profile(props) {
    return <div>{props.name}프로필입니다.</div>;
}
