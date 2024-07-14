import React, { useState } from "react";
import { styled } from "styled-components";
import Todo from "./Todo";

const BackgroundStyle = styled.div`
    
`;

const TodoList = () => {
    const todo = [
        {
            id: 1,
            text: "깃허브 이미지 바꾸깅^_____^",
            isChecked: false,
        },
        {
            id: 2,
            text: "노션 정리하기",
            isChecked: false,
        },
        {
            id: 3,
            text: "체크된 투두",
            isChecked: true,
        },
    ]

    return (
        <BackgroundStyle>
            <Todo todo={todo && todo.length > 0 ? todo : undefined} />
        </BackgroundStyle>
    )
}

export default TodoList;