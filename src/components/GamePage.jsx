import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function GamePage() {
  const [ready, setReady] = useState(true);

  const startTime = useRef();
  const endTime = useRef();

  // 1. 클릭 화면이 랜덤한 시간에 생성 (2~5초)
  useEffect(() => {
    if (ready === true) {
      startTime.current = new Date();
      setTimeout(() => {
        setReady(false);
      }, Math.floor((Math.random() * 4 + 2) * 1000));
    }
  });

  // 2. 대기 화면에서 클릭 시 경고 화면으로 넘어가고, 클릭 시 다시 대기화면으로 복귀
  // 일단 alert으로 해결
  function onClickReady() {
    if (ready === true) {
      alert("파란색이 나타나면 눌러주세요");
    }
    endTime.current = new Date();
    setReady(true);
  }

  // 3. 정상적으로 클릭화면에서 클릭 시 반응 속도(ms) 측정

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
