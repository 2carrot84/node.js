import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BlueButton } from "./BlueButton";
import { Progress } from "./Progress";

export function Quiz() {
  const dispatch = useDispatch();
  const quiz = useSelector(state => state.score.quizs);
  const page = useSelector(state => state.score.page);

  return (
    <>
      <h1 style={{margin: "50px 0"}}>{quiz[page - 1].q}</h1>
      {quiz[page - 1].a.map(item => {
        return <BlueButton text={item.text} key={item.text} />;
      })}
      <Progress page={page} maxPage={quiz.length}></Progress>
    </>
  );

}