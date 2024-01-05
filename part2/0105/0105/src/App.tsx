import { useState } from "react";
import React from "react";

let box: JSX.Element = <div></div>;
export default function App() {
    let [user, setUser] = useState(["jiyunee"]);

    return (
        <div>
            <h4>안녕</h4>
            <Profile name="철수" age="20"></Profile>
        </div>
    );
}

function Profile(props: { name: String; age: string }): JSX.Element {
    return <div>{props.name}프로필입니다.</div>;
}
