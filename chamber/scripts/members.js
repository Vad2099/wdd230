const url = "https://vad2099.github.io/wdd230/chamber/data/members.json";
const menu = document.querySelector('#menu');
const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');
const display = document.querySelector("article");

// Function to fetch and display my own data
async function getMyJson(url) {
    try {
        const response = await fetch(url);
        if(response.ok) {
            const data = await response.json();
            console.log(data);
        } else {
            throw Error(await response.text());
        }
    } catch(error) {
        console.log(error);
    }
}

getMyJson();
