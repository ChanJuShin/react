const React = require("react");
const { useState, useRef } = React;

const GuGuDan = () => {
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = useState("");
    const [result, setResult] = useState("");
    const inputRef = useRef();

    const onChange = e => {
        setValue(e.target.value);
    };

    const onClick = () => {
        if (parseInt(value) === first * second) {
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue("");
            setResult(`정답: ${value}`);
        } else {
            setValue("");
            setResult("땡");
        }
        inputRef.current.focus();
    };

    return (
        <>
            <div>{first} 곱하기 {second}는?</div>
            <input ref={inputRef} type="number" value={value} onChange={onChange} />
            <button onClick={onClick}>입력</button>
            <div>{result}</div>
        </>
    );
};

module.exports = GuGuDan;