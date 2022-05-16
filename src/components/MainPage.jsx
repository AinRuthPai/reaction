import { Link } from "react-router-dom";

function MainPage() {
  return (
    <section className='main-section'>
      <div className='box'>
        <p>반응속도 테스트</p>
        <span>게임 시작 버튼을 눌러주세요!</span>
      </div>
      <Link to='/game'>
        <button className='start'>게임 시작</button>
      </Link>
    </section>
  );
}

export default MainPage;
