import Canvas from "./canvas"

export default function App({searchParams}) {

  
    const colorOne = searchParams.colorOne || "lightblue";
    const colorTwo = searchParams.colorTwo || "green";
    const bg = searchParams.background || "black";
    
  return <Canvas colorOne={colorOne} colorTwo={colorTwo} bg={bg}/>;
}