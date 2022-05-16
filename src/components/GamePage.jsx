import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function GamePage() {
  const [ready, setReady] = useState(true);

  function onClickReady() {
    setReady(true);
  }

  // function randomTime() {
  //   Math.floor(Math.random() * 4) + 2;
  // }
  // let sec = randomTime();

  useEffect(() => {
    let timer = setTimeout(() => {
      setReady(false);
      console.log("run!");
    }, 3000);
  });

  return (
    <form>
      <section className='game-section'>
        <div onClick={onClickReady} className={ready ? "circle" : "circle blueCircle"}>
          <p className={ready ? "ready" : "click"}>{ready ? "ready..." : "click!"}</p>
          <span>파란색으로 바뀌면 클릭해주세요</span>
        </div>
        <p className='time'>반응시간 : xxx ms</p>
        <div>
          <button className='reset'>다시하기</button>
          <Link to='/'>
            <button className='back'>돌아가기</button>
          </Link>
        </div>
      </section>
    </form>
  );
}

export default GamePage;
