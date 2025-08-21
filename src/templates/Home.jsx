import '../static/Home.css';
import { logoutUrl } from '../path/BaseUrl';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const logoutButton = async () => {
        try {
            await logoutUrl(); // wait for API response
            localStorage.removeItem('jwtToken'); // remove token after successful logout
            navigate('/');
        } catch (error) {
            console.error('Logout failed:', error);
            alert('Something went wrong while logging out');
        }
    };

    return (
        <div className='alpha'>
            <div className="chat-container" id="chat-page">
                <div className="users-list">
                    <div className="users-list-container">
                        <h2>Online Users</h2>
                        <ul id="connectedUsers"></ul>
                    </div>
                    <div>
                        <p id="connected-user-fullname"></p>
                        <button className="logout" id="logout" onClick={logoutButton}>
                            Logout
                        </button>
                    </div>
                </div>

                <div className="chat-area">
                    <div className="chat-area" id="chat-messages"></div>

                    <form id="messageForm" name="messageForm" className="hidden">
                        <div className="message-input">
                            <input type="text" id="message" placeholder="Type your message..." />
                            <button>Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Home;
