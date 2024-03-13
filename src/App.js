import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.saveDataAcrossSessions = false;

    const webgazer = window.webgazer;
    webgazer
      .setGazeListener((data, clock) => {
        console.log(data, clock);
      })
      .begin();
    console.log(webgazer.utils);
  }, []);

  // console.log(webgazer.getPupilFeatures());
  return (
    <div className="App">
      <>
        <h1>Question</h1>
        <ol>
          <li>Option 1</li>
          <li>Option 1</li>
          <li>Option 1</li>
          <li>Option 1</li>
          <li>Option 1</li>
        </ol>
      </>
    </div>
  );
}

export default App;
