import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "Build/temp_build.loader.js",
    dataUrl: "Build/temp_build.data",
    frameworkUrl: "Build/temp_build.framework.js",
    codeUrl: "Build/temp_build.wasm",
  });

  return (
    <Unity
      unityProvider={unityProvider}
      style={{
        width: "100%",
        height: "100%",
        display: "block",
        margin: "auto",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    />
  );
}

export default App;
