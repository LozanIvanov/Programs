import { useRef,useState } from 'react';

export default function Page() {
  const inputRef = useRef(null);
  const[text,setText]=useState(false);
  function d(){
    setText(!text);
    if(text){
      inputRef.current.focus()
    }
      
  }
  return (
    <>
      <nav>
        <button onClick={d}>
         {text ? 'Search':'Stop'} 
        </button>
      </nav>
      <input
        ref={inputRef}
        placeholder="Looking for something?"
      />
    </>
  );
}
