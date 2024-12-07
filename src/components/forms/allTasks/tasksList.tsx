import TaskCard, { CardProps } from "./taskCard";

export default function TasksList() {
  const testData: CardProps[] = [
    { title: "Задача №1", description: "Погулять с собакой" },
    { title: "Задача №1", description: "Погулять с собакой" },
  ];
  return (
    <>
      <div className="grid grid-cols-4 gap-y-4 gap-x-6 max-w-[1300px] mx-auto">
        {testData.map((card, index) => (
          <TaskCard key={index} {...card} />
        ))}
      </div>
    </>
  );
}
