import ThreeCanvas from "./experience/ThreeCanvas";
export default function Canvas({colorOne, colorTwo}){







return (
  <div className="absolute w-full h-full bg-transparent">
    <ThreeCanvas colorOne={colorOne} colorTwo={colorTwo} />
  </div>
);


}