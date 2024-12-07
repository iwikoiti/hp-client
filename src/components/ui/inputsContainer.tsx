import { cn } from "../../lib/utils";

const InputsContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col gap-y-1", className)}>{children}</div>
  );
};

export { InputsContainer };
