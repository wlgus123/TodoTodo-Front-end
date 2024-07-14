import React, { useState } from "react";
import { styled } from "styled-components";
import Todo from "./Todo";

const TodoList = () => {
    const [todo, setTodo] = useState([
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
    ])

    return (
        <div>
            <Todo todo={todo.length > 0 && todo ? todo : undefined} setTodo={setTodo} />
        </div>
    )
}

export default TodoList;