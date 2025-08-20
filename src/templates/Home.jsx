import '../static/Home.css';

const Home =() =>{
    return (
        <div className='alpha'>
            <div className="chat-container" id="chat-page">
                <div className="users-list">
                    <div className="users-list-container">
                        <h2>Online Users</h2>
                        <ul id="connectedUsers">
                        </ul>
                    </div>
                    <div>
                        <p id="connected-user-fullname"></p>
                        {/* <a class="logout" href="javascript:void(0)" id="logout">Logout</a> */}
                    </div>
                </div>

                <div className="chat-area">
                    <div className="chat-area" id="chat-messages">
                    </div>

                    <form id="messageForm" name="messageForm" className="hidden">
                        <div className="message-input">
                            <input type="text" id="message" placeholder="Type your message..." />
                            <button>Send</button>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>


    )
}
export default Home;