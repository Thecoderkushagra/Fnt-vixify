import { Stomp } from "@stomp/stompjs";
import SockJS from "sockjs-client";

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
}

function onError() {
    const errorMessage = "some error occcured!! please refresh the page."
    return errorMessage;
}

