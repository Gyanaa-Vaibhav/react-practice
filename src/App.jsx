import { useState, useEffect } from "react";
import Addtodo from "./Addtodo";



export default function App() {
  const [show, setShow] = useState(true);
  const [a, setA] = useState();

  // const placeholder = useFetch('https://jsonplaceholder.typicode.com/users');

  const [arr, push,replace,set,reset,clear] = useArray([1,2,3])
  
  function pushArr() {
    push([1])
  }

  function replacearr() { 
    replace(1,2)
  }

  function setArr() { 
    set()
  }

  function resetArr() { 
    reset()
  }

  function cleaarr() {
    clear()
  }

  
  localStorage.setItem("OK", [1, 3, 2])
  const [local, setLocal] = useLocalStorage("form Hook",'')

  
  
  return (
    <div>
      <button onClick={pushArr}>Click to Push</button><br /><br />
      <button onClick={replacearr}>Click to Replace 1 with 2</button><br /><br />
      <button onClick={setArr}>Click to set arr to [4,5,6]</button><br /><br />
      <button onClick={resetArr}>Click to Reset to initial</button><br /><br />
      <button onClick={cleaarr}>Clear Arr</button><br /><br />
      <Addtodo />
      {/* {placeholder} */}
      {arr}
      <br /><br />
      <input
        type="text"
        onChange={e => setLocal(e.target.value)}
        value={local}
      />
      <br /> <br />
    </div>
  );
}

function useLocalStorage(key, initialvalue) {
  
  const [value, setValue] = useState(getValue());

  function getValue() {
    const localval = localStorage.getItem(key);
    if (localval == null) {
      return initialvalue;
    } else {
      return JSON.parse(localval);
    }
  }
  
  
  
  useEffect(() => {
    console.log(value)
    localStorage.setItem(key, JSON.stringify(value))
  },[value])
  
  return [value,setValue]
}

function useArray(initialvalue) {
  const [arr, setArr] = useState(initialvalue)
  
  function push([...value]) {    
      setArr(prev => [...prev, ...value])
  }

  function replace(oldval, newval) {
      setArr(prev => prev.map(x => x === oldval ? newval : oldval))
  }

  function set() {
    setArr([4,5,6])
  }

  function reset() {
    setArr(prev => initialvalue)
  }

  function clear() {
    setArr((prev) => []);
  }

  return [arr, push, replace, set, reset, clear]
  
}

function useFetch(value) {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(value)
      .then((response) => response.json())
      .then((json) => {
        setData([JSON.stringify(json)])
      })
  },[])
  
  return data
}