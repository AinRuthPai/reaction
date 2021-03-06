# ReactJS로 반응속도 체크 웹 만들기

- 발견된 문제들과 해결 방법

  - 처음 useEffect의 setTimeout에서 랜덤하게 시간을 생성하는 코드에서 문제가 발생했었다. 알고보니 뒤에 \* 1000을 해 주지 않아서 시간을 초 단위로 작성하지 않아서 생긴 문제였다.

  - 두 번째는 시간은 랜덤하게 2~5 초간으로 지정했지만, 비정상적으로 (계속 파란 원이 깜빡거리는 정도) 빠르게 작동하여 if문으로 제어
    (ready === true일 시, 즉 클릭 전 준비상태일 때만 setTimeout 메소드가 실행되도록 if문을 작성하여 해결했다.)

  - 다음은 클릭 전 준비단계일 때 클릭 시에 경고 화면을 주고, 다시 클릭하면 준비단계로 돌아가게 하려 했으나 도저히 모르겠어서 alert을 이용했다.

  - 다음으로 가장 어렵다고 생각했던 ms를 출력해주는 단계였는데, 의외로 구글링을 해 보니 해당 앱과 관련된 완성품 코드가 존재하였고, 그 코드를 확인해 보니 useRef로 각각 시작과 끝 변수를 지정한 뒤 current와 Date() 메소드를 이용하여 '클릭된 시간 - 처음 클릭 화면이 나타난 순간'으로 ms를 구현하였다. 처음에는 그저 ms와 관련된 click event가 있나 헛다리를 짚으며 구글링을 했었는데, 전혀 다른 접근 방식이었다. useRef Hook을 능숙하게 다룰 줄 알았다면 바로 해결법이 생각날 수 있지 않았을까 하는 아쉬움이 남았다.
