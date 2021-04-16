import { createFood,foodRequests } from "../js/admin.js";

let createFoodBtn = document.getElementById('create-btn');
createFoodBtn.addEventListener('click',e =>{
    createFood();
})
foodRequests('http://localhost:8000/api/all');
