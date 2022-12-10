import "./loading.css";
import Spinner from "../spinner/Spinner";
import { Html, useProgress } from "@react-three/drei";

const Loading = () => {
  const { progress } = useProgress();
  return (
    <>
      <Html center className="loading">
        <div className="loading-wc">
          <h1 className="loading-wc-title">EARTH</h1>
        </div>
        <Spinner />
        <div className="global-w">
          <h1 className="global-w-title">
            <strong>Temperature is at&nbsp;</strong>
            <span>{progress}%</span>
          </h1>
        </div>
      </Html>
    </>
  );
};

export default Loading;
