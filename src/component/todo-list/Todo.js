import React, { useState } from "react";
import { styled } from "styled-components";

const TodoContainer = styled.div`
    margin: 10px auto;
    padding: 1.4vmin 2.5vmin;
    border: 1px solid black;
    border-radius: 7px;
    width: 60vw;
`;

const Label = styled.label`
    position: relative;
    cursor: pointer;
    border-radius: 5px;

    &.checked {
        color: gray;
        text-decoration: 1px line-through;
    }
`;

const Input = styled.input`
    cursor: pointer;
`;

const Todo = ({ text }) => {
    const [isChecked, setIsChecked] = useState(0);
    const HandleTodoCheck = () => {
        setIsChecked(isChecked => !isChecked);
    }
    return (
        <TodoContainer>
            <Label htmlFor="todo" className={isChecked ? "checked" : ''} onClick={HandleTodoCheck}>
                <Input type="checkbox" id="todo" className={isChecked ? "checked" : ''} onClick={HandleTodoCheck} /> {text ? text : "할 일을 입력하세요"}
            </Label>
        </TodoContainer>
    )
}

export default Todo;