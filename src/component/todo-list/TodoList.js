import React from "react";
import { styled } from "styled-components";
import Todo from "./Todo";

const BackgroundStyle = styled.div`
    
`;

const TodoList = () => {
    return (
        <BackgroundStyle>
            <Todo text="깃허브 이미지 바꾸깅^_____^" />
        </BackgroundStyle>
    )
}

export default TodoList;