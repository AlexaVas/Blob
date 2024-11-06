import ThreeCanvas from "./experience/ThreeCanvas";
export default function Canvas({
  colorOne = "lightblue",
  colorTwo = "green",
  bg = "pink",
}) {
  return (
    <div  style={{backgroundColor:bg}} className="absolute w-full h-full">
      <ThreeCanvas colorOne={colorOne} colorTwo={colorTwo} />
    </div>
  );
}