import { useState } from 'react';
import { sculptureList } from './data.jsx';

export default function Gallery() {

    const [index, setIndex] = useState(0);
    const sculpture = sculptureList[index];
    const [show, setShow] = useState(false);

    let nextIndex = index < sculptureList.length - 1;
    let prevIndex = index > 0;

    function previous() {
        setIndex(index - 1)
    }
    function next() {
        setIndex(index + 1);
    }
    function hide() {
        setShow(!show)
    }
    function Button({ comand, onClick, children }) {
        return (
            <button onClick={onClick} disabled={comand}>{children}</button>
        )
    }
    return (
        <>
            <Button onClick={previous} comand={!prevIndex}>Previous</Button>

            <Button onClick={next} comand={!nextIndex}>next</Button>

            <h2><i>{sculpture.name}</i> by {sculpture.artist}</h2>

            <p>({index + 1} of {sculptureList.length}) </p>

            <Button onClick={hide}>{show ? 'hide' : 'show'} details</Button>

            <p>{show && sculpture.description}</p>
            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />
        </>
    )
}
