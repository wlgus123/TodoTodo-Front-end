import React from "react";
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

const Todo = ({ todo }) => {
    const HandleTodoCheck = ({ id }) => {
        
    }
    return (
        <div>
        {todo ? (
            todo.map((t)=>(
            <TodoContainer key={t.id}>
                <div>
                <Label htmlFor="todo" className={t.isChecked ? "checked" : ''}>
                    <Input type="checkbox" id={t.id} checked={t.isChecked} onClick={HandleTodoCheck} /> {t.text ? t.text : "할 일을 입력하세요"}
                </Label>
                </div>
            </TodoContainer>
        ))) : (
            <div>
                할 일이 없습니다.
            </div>
        )}
        </div>
    )
}

export default Todo;