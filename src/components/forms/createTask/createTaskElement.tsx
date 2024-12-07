export interface CreateElementProps {
  number: string;
  description: string;
}

export default function CreateTaskElement(
  createElementProps: CreateElementProps
) {
  return (
    <>
      <div className="flex flex-row">
        <label className="text-base leading-6 mr-2" htmlFor="task">
          {createElementProps.number}
        </label>
        <input
          className="text-base leading-6 mr-2"
          id="task"
          placeholder="Введите задачу..."
        >
          {/* {createElementProps.description} */}
        </input>
      </div>
    </>
  );
}
