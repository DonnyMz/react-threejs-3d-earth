import { Suspense } from "react";
import Loading from "../components/loading/Loading";
import { Canvas } from "@react-three/fiber";
import Earth from "../components/earth/Earth";
import Card from "../components/helpers/Card";

const Home = () => {
  return (
    <>
      <Card>
        <Canvas>
          <Suspense fallback={<Loading />}>
            <Earth />
          </Suspense>
        </Canvas>
      </Card>
    </>
  );
};

export default Home;
