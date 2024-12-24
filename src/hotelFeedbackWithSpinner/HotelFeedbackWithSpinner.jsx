import { useState } from 'react';

export default function FeedbackForm() {
    const [text, setText] = useState('');
    const [status, setStatus] = useState('typing')

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('sending')
        await sendText(text);
        setStatus('send')
    }

    const isSending = status === 'sending';
    const isSend = status === 'send';
    if (isSend) {
        return <h1>Thank for send</h1>
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>How your stay at Hotel?</p>
            <textarea
                value={text}
                onChange={e => setText(e.target.value)}
                disabled={isSending}

            ></textarea>
            <br />
            <button
                type='submit' disabled={isSending}
            >Send</button>
            {isSending && (
                <div style={spinnerContainerStyle}>
                    <div style={spinnerStyle}></div> </div>)
            }

        </form>
    )
}
function sendText(text) {
    return new Promise(resolve => {
        setTimeout(resolve, 3000)
    });
}
const spinnerContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10px',
};
const spinnerStyle = {
    width: '20px',
    height: '20px',
    border: '3px solid rgba(0, 0, 0, 0.2)',
    borderTopColor: '#000',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
};


const globalStyles = `
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
`;


document.head.insertAdjacentHTML('beforeend', `<style>${globalStyles}</style>`);

