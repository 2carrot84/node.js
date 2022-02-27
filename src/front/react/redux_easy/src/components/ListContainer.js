import AllTodoList from "./AllTodoList";
import DoneList from "./DoneList";

export default function ListContainer () {
  return (
    <div>
      <AllTodoList></AllTodoList>
      <DoneList></DoneList>
    </div>
  )
}