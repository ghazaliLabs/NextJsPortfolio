import ChatBot from 'react-simple-chatbot';
 
const steps = [
    {
        id: '0',
        message: 'Hey There!',
        trigger: '1'
    },
    {
        id:'1',
        message: 'How can I help you today?',
        trigger: '2'
    },
    {
        id:'2',
        options: [
            {value: 1, label: "/faq", trigger: "3"}
        ]
    },
    {
        id:'3',
        message: 'Loren Ipsum',
        end: true
    }
];
 
 
// Set some properties of the bot
const config = {
    botAvatar: "chat-icon.png",
    floating: true,
};
 
function App() {
    return (
        <div className="App">
                <ChatBot
 
                    // This appears as the header
                    // text for the chat bot
                    headerTitle="Bot"
                    steps={steps}
                    {...config}
 
                />
        </div>
    );
}
 
export default App;