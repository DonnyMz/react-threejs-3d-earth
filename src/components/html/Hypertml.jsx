import { Html } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import "./hyper.css";

const Hypertml = () => {
  const navigate = useNavigate();

  const onclickhandle = () => {
    navigate("/main");
  };
  return (
    <>
      <group dispose={null}>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 3]} scale={0.1}>
          <Html
            scale={4}
            rotation={[Math.PI / 2, 0, 0]}
            position={[3, 0, 0]}
            transform
            occlude
            className="annotation"
          >
            <div>
              <span className="btn" onClick={onclickhandle}>
                HOME&nbsp;
              </span>
            </div>
          </Html>
        </mesh>
      </group>
    </>
  );
};

export default Hypertml;
