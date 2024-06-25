import React from "react";
import NavBar from "../component/NavBar";
import Todo from "../component/todo-list/Todo";
import TodoList from "../component/todo-list/TodoList";

function MainPage() {
    return (
        <div>
            <NavBar />
            <TodoList />
        </div>
    )
}

export default MainPage;