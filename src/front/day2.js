  // 함수형 컴포넌트
  function helloWorldButton() {
    // 비구조화 할당
    // [상태 변수, setter]
    const [isClick, setClickState] = React.useState(false); // 컴포넌트의 상태를 설정하는 메소드, 파라미터는 초기값
    // console.log(isClick);   // false
    // setClickState(true);
    // console.log(isClick);   // true

    const text = isClick ? "Bye world!" : "Hello world!";

    return React.createElement(
      "button",
      {
        onClick: () => {
          setClickState(!isClick);
        }
      },
      text
    );
  }

  const rootContainer = document.getElementById("react-root");
  ReactDOM.render(React.createElement(helloWorldButton), rootContainer);

  function returnOneArray() {
    return [1, 3];
  }
  const [a, b] = returnOneArray() // [a, b] = [1, 3]