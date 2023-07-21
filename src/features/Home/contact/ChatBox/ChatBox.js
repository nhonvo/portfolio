import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineSend } from 'react-icons/ai'; // Import the send icon from react-icons
import './ChatBox.css';
import { RobotFilled } from '@ant-design/icons';


const ChatBox = () => {
    const [showChat, setShowChat] = useState(false);
    const [chatMessages, setChatMessages] = useState([]);
    const chatContainerRef = useRef(null);

    const toggleChat = () => {
        setShowChat((prevShowChat) => !prevShowChat);
    };

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (chatContainerRef.current && !chatContainerRef.current.contains(e.target)) {
                setShowChat(false);
            }
        };

        if (showChat) {
            window.addEventListener('click', handleOutsideClick);
        }

        return () => {
            window.removeEventListener('click', handleOutsideClick);
        };
    }, [showChat]);

    const handleSend = () => {
        const userInput = document.getElementById('user-input').value;
        if (userInput.trim() !== '') {
            setChatMessages((prevMessages) => [...prevMessages, { type: 'user', content: userInput }]);
            document.getElementById('user-input').value = '';
            // Simulate the bot's response after a short delay (for demonstration purposes)
            setTimeout(() => {
                setChatMessages((prevMessages) => [
                    ...prevMessages,
                    { type: 'bot', content: 'Hello! How can I help you?' },
                ]);
            }, 1000);
        }
    };

    return (
        <div className="chat-container" ref={chatContainerRef}>
            {showChat ? (
                <div className="chat-box">
                    {/* Chat box header */}
                    <div className="chat-header">
                        <span className="bot-icon">🤖</span>
                        <h3>Hello, I am Chat Bot</h3>
                    </div>

                    {/* Chat box content (messages) */}
                    <div className="chat-messages">
                        {chatMessages.map((message, index) => (
                            <div key={index} className={`chat-message ${message.type}`}>
                                {message.content}
                            </div>
                        ))}
                    </div>

                    {/* Chat box input and send button */}
                    <div className="chat-input">
                        <input
                            type="text"
                            id="user-input"
                            placeholder="Type your message..."
                            autoFocus
                            onBlur={() => {
                                document.getElementById('user-input').placeholder = 'Can I help you?';
                            }}
                            onFocus={() => {
                                document.getElementById('user-input').placeholder = '';
                            }}
                        />
                        <button className="send-button" onClick={handleSend}>
                            <AiOutlineSend />
                        </button>
                    </div>
                </div>
            ) : (
                <div className="chat-bubble" onClick={toggleChat}>
                    <span className="bubble-icon" >
                        < RobotFilled />
                    </span>
                </div>
            )}
        </div>
    );
};

export default ChatBox;
