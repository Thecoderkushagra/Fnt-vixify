import { Stomp } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import { onlineUser } from "../path/BaseUrl";

let stompClient = null;
const loggedUser = localStorage.getItem('uzer');

export function connect() {
    const socketFactory = () => new SockJS('http://localhost:8080/ws');
    stompClient = Stomp.over(socketFactory);
    stompClient.connect({}, onConnected, onError);
}

function onConnected() {  
    stompClient.subscribe(`/user/${loggedUser}/querry/message`)
    stompClient.subscribe(`/user/status`);
    document.querySelector('#connected-user-fullname').textContent = `${loggedUser}`;
    findAndDisplayConnectedUsers().then();
}

function onError() {
    const errorMessage = "some error occcured!! please refresh the page."
    return errorMessage;
}

async function findAndDisplayConnectedUsers() {
    try {
        const response = await onlineUser(); 
        if (response && response.data) {            
            const allUsers = response.data; 
            console.log(allUsers);     
            const userListElement = document.getElementById('connectedUsers');
            if (!userListElement) return; 

            userListElement.innerHTML = '';
            allUsers.forEach(user => {
                const li = document.createElement('li');
                li.textContent = user;
                li.classList.add('separator');
                userListElement.appendChild(li);
            });

            console.log('Online users (excluding logged user):');
        } else {
            console.error('No data received from onlineUser API');
        }
    } catch (error) {
        console.error('Error fetching online users:', error);
    }
}

