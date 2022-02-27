import MainHeader from "./components/MainHeader";
import CustomList from "./components/CustomList";
import Button from "./components/Button";
import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const array1 = ["apple", "banana", "orange"];
  const [text, setText] = useState("감추기");
  const [name, setName] = useState({ first: "창근", last: "이" });

  const buttonClick = () => {
    text === "감추기" ? setText("보이기") : setText("감추기");
  };
  // JSX
  const conditionRendering = text === "보이기" && <MainHeader text="Hello"></MainHeader>;

  const onChange = (e) => {
    setText(e.target.value);
  };

  const firstNameRef = useRef();
  const lastNameRef = useRef();

  const confirm = () => {
    setName({
      first: firstNameRef.current.value,
      last: lastNameRef.current.value
    });
    console.log(name.first, name.last);
  };

  const [tasks, setTask] = useState([{
    id: 0,
    text: "강의 듣기"
  }]);
  const inputRef = useRef();

  const addTask = () => {
    const text = inputRef.current.value;
    setTask([...tasks, {
      id: tasks[tasks.length - 1].id + 1,
      text
    }]);
  };

  const [second, setSecond] = useState(0);

  // 마운트 이후 실행
  useEffect(() => {
    console.log("마운트")
    let interval = setInterval(() => {
      setSecond(second + 1);
    }, 1000);
    // 클린업, 언마운트 이후 실행
    return () => {
      console.log("언마운트")
      clearInterval(interval);
    }
  }, [second]); // 영향을 받는 값이 갱신되면 다시 마운트가 일어난다.

  return (
    <div className="App">
      <div>
        <p>{second} 초</p>
      </div>

      <div>
        <input placeholder={"내 목표"} ref={inputRef} />
        <button onClick={addTask}>확인</button>
      </div>
      <ul>{/* li key를 넣어줘야 react 성능 향상에 도움이 됨 */}
        {tasks.map((task) => <li key={task.id}>{task.text}</li>)}
      </ul>

      <h1>{name.last}{name.first}</h1>
      <input name="성" placeholder={"성"} ref={lastNameRef} />
      <input name="이름" placeholder={"이름"} ref={firstNameRef} />
      <button onClick={confirm}>확인</button>
      <br />
      <h1>{text}</h1>
      <input onChange={onChange} />
      {conditionRendering}
      <br />
      <button onClick={buttonClick}>{text}</button>
      <MainHeader text="world" attr="test1"></MainHeader>
      <MainHeader text="Bye world" attr="test2"></MainHeader>
      <MainHeader text="Hello world" attr="test3"></MainHeader>
      <ul>
        {array1.map((v, i) => {
          return (
            <CustomList text={`${i} ${v}`}></CustomList>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
