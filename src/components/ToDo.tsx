import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "./atoms";

const ToDo = ({ text, category, id }: IToDo) => {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (newCategory: IToDo["category"]) => {
    setToDos((oldToDos) =>
      oldToDos.map((toDo) => {
        if (toDo.id === id) {
          return { ...toDo, category: newCategory };
        }
        return toDo;
      })
    );
  };

  return (
    <li>
      <span>{text}</span>
      {category !== Categories.TO_DO && (
        <button onClick={() => onClick(Categories.TO_DO)}>To do</button>
      )}
      {category !== Categories.DOING && (
        <button onClick={() => onClick(Categories.DOING)}>Doing</button>
      )}
      {category !== Categories.DONE && (
        <button onClick={() => onClick(Categories.DONE)}>Done</button>
      )}
    </li>
  );
};

export default ToDo;
