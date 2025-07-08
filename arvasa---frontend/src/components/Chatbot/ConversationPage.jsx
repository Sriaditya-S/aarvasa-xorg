import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaPaperPlane } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';

const ConversationPage = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [recentSearches, setRecentSearches] = useState([
        '4BHK Flats', 'Villas', 'Apartments', 'Garage', 'Trends', 'More'
    ]);
    const sidebarRef = useRef();
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [typing, setTyping] = useState(false);
    const controllerRef = useRef(null);

    useEffect(() => {
        const savedMessages = localStorage.getItem('chatMessages');
        if (savedMessages) {
            setMessages(JSON.parse(savedMessages));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('chatMessages', JSON.stringify(messages));
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const newUserMsg = { sender: 'user', message: input };
        const updatedMessages = [...messages, newUserMsg];
        setMessages(updatedMessages);
        setTyping(true);
        setRecentSearches(prev => [input, ...prev.slice(0, 9)]);
        setInput('');

        const historyPairs = [];
        for (let i = 0; i < updatedMessages.length - 1; i++) {
            if (updatedMessages[i].sender === 'user' && updatedMessages[i + 1]?.sender === 'bot') {
                historyPairs.push([updatedMessages[i].message, updatedMessages[i + 1].message]);
            }
        }

        const botMessage = { sender: 'bot', message: '' };
        setMessages(prev => [...prev, botMessage]);

        controllerRef.current = new AbortController();

        try {
            const res = await fetch(`${import.meta.env.VITE_CHATBOT_URL}/stream_chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: input, history: historyPairs }),
                signal: controllerRef.current.signal
            });

            const reader = res.body.getReader();
            const decoder = new TextDecoder('utf-8');
            let finalText = '';

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                const chunk = decoder.decode(value, { stream: true });
                finalText += chunk;
                setMessages(prev => {
                    const updated = [...prev];
                    updated[updated.length - 1] = { sender: 'bot', message: finalText };
                    return updated;
                });
            }
        } catch (err) {
            setMessages(prev => [...prev, {
                sender: 'bot',
                message: "Oops! There was a problem reaching our servers."
            }]);
        } finally {
            setTyping(false);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isSidebarOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setSidebarOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isSidebarOpen]);

    const renderMessage = (msg) => {
        if (msg.sender === 'bot') {
            return (
                <div className="text-white text-sm">
                    <ReactMarkdown
                        components={{
                            a: ({ children, href }) => (
                                <a href={href} className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">
                                    {children}
                                </a>
                            ),
                            li: ({ children }) => (
                                <li className="list-disc ml-6">{children}</li>
                            )
                        }}
                    >
                        {msg.message}
                    </ReactMarkdown>
                </div>
            );
        }
        return <div>{msg.message}</div>;
    };

    return (
        <div className="h-full text-white font-[poppins] relative px-3 pt-20 md:px-16 pb-12">

            {/* Sidebar */}
            <div
                ref={sidebarRef}
                className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-[#6D1E3DB0] to-[#121212] p-6 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 z-50 shadow-lg`}
            >
                <h2 className="text-lg font-semibold mb-4 mt-36">Recent Searches</h2>
                <ul className="space-y-2">
                    {recentSearches.map((item, index) => (
                        <li key={index} className="text-sm text-white p-2">{item}</li>
                    ))}
                </ul>
            </div>

            {/* Page Content */}
            <div className="md:pt-28">

                {/* Header */}
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold mb-2">What would you like to know?</h1>
                    <p className="text-sm sm:text-base">Start the Conversation</p>
                </div>

                {/* Message Area */}
                <div className="flex flex-col space-y-8 md:mx-28 mb-10 px-2 sm:px-10">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`rounded-3xl px-6 py-4 border border-[#613A4A] max-w-[80%] text-sm font-semibold
                                ${msg.sender === 'user' ? 'bg-[#551B32]' : 'bg-[#FFFFFF26]'}`}>
                                {renderMessage(msg)}
                            </div>
                        </div>
                    ))}

                    {typing && (
                        <div className="flex justify-start">
                            <div className="rounded-3xl px-6 py-4 border border-[#613A4A] w-fit text-sm font-semibold bg-[#FFFFFF26] animate-pulse">
                                <span className="dot-flash">Typing...</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Input */}
                <div className="flex items-center justify-between bg-[#FFFFFF26] px-6 mx-auto md:px-6 py-3 rounded-full md:max-w-3xl">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask anything"
                        className="flex-grow bg-transparent text-white text-sm outline-none"
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    />
                    <button onClick={handleSend} className="w-fit text-white">
                        <FaPaperPlane size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConversationPage;
