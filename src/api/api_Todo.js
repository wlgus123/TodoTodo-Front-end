import axios from "axios";
import React from "react";

const axios = require('axios');  // axios 모듈 가져오기

export const getTodo = async ({todo}) => {
    try {
        const response = await axios.post('http://localhost:8080/todo/todos');
        return response;
    } catch (error) {
        console.error("Create Post Error: ", error);
        throw error;
    }
}