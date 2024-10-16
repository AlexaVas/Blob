import Canvas from "./canvas"

export default function App({searchParams}) {

  
    const colorOne = searchParams.colorOne || "lightblue";
    const colorTwo = searchParams.colorTwo || "green";
    
  return <Canvas colorOne={colorOne} colorTwo={colorTwo} />;
}