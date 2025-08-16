import '../static/Home.css';

const Home =() =>{
    return (
        <div className='alpha'>
            <div class="chat-container" id="chat-page">
                <div class="users-list">
                    <div class="users-list-container">
                        <h2>Online Users</h2>
                        <ul id="connectedUsers">
                        </ul>
                    </div>
                    <div>
                        <p id="connected-user-fullname"></p>
                        {/* <a class="logout" href="javascript:void(0)" id="logout">Logout</a> */}
                    </div>
                </div>

                <div class="chat-area">
                    <div class="chat-area" id="chat-messages">
                    </div>

                    <form id="messageForm" name="messageForm" class="hidden">
                        <div class="message-input">
                            <input autocomplete="off" type="text" id="message" placeholder="Type your message..." />
                            <button>Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    )
}
export default Home;