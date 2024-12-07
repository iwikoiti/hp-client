export interface TodoElementProps {
  number: string;
  description: string;
  //   checked: boolean;
}

export default function TodoTaskElement(todoElementProps: TodoElementProps) {
  return (
    <>
      <div className="flex flex-row">
        <p className="text-base leading-6 mr-2">{todoElementProps.number}</p>
        <label className="text-base leading-6 mr-2" htmlFor="task">
          {todoElementProps.description}
        </label>
        <input type="checkbox" id="task" />
      </div>
    </>
  );
}
