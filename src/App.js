import './App.css';
 import Frontpage from './Components/Frontpage.jsx';
 
function App() {
 
  return (
    <>
   <Frontpage/>
  
   </>
  );
}

export default App;


// teacher providede and apply !
// import { useState, useEffect } from "react";

// export const useFetch = (url) => {
//   const [data, setData] = useState(null);
//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(url);
//       const json = await response.json();
//       setData(json);
//     };
//     fetchData();
//   }, [url]); / / [] dependency array
//   return { data };
// };
