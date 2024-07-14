import React from "react";
import { styled } from "styled-components";

const TodoContainer = styled.div`
    margin: 10px auto;
    padding: 1.4vmin 2vmin;
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
    margin-right: 10px;
    cursor: pointer;
`;

const Todo = ({ todo, setTodo }) => {
    const HandleTodoCheck = (id) => {
        const newTodo = todo.map(t => 
            t.id === id ? { ...t, isChecked: !t.isChecked } : t
        );
        setTodo(newTodo);
    }
    return (
        <div>
        {todo ? (
            todo.map((t)=>(
            <TodoContainer key={t.id}>
                <div>
                <Label htmlFor={`t-${t.id}`} className={t.isChecked ? "checked" : ''}>
                    <Input 
                        type="checkbox" 
                        id={`t-${t.id}`} 
                        checked={t.isChecked} 
                        onChange={() => HandleTodoCheck(t.id)} 
                    /> 
                    {t.text ? t.text : "할 일을 입력하세요"}
                </Label>
                </div>
            </TodoContainer>
        ))) : (
            <div>
                <div>
                    할 일이 없습니다.
                </div>
                <div>
                    <a href="/">카테고리</a> 또는 
                    <a href="/">할 일</a> 추가
                </div>
            </div>
        )}
        </div>
    )
}

export default Todo;