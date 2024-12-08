import { Controller, useForm } from "react-hook-form";
import { InputsContainer } from "../ui/inputsContainer";
import { routePaths } from "../../lib/path";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import Input from "../ui/Input";

interface codeInput {
  code: string;
}

export default function VerifyForm() {
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm<codeInput>({
    defaultValues: {
      code: "",
    },
  });
  return (
    <>
      <form>
        <InputsContainer>
          <Controller
            name="code"
            control={control}
            rules={{ required: ". Поле обязательно для заполнения" }}
            render={({ field }) => (
              <div className="flex flex-col gap-2">
                <label htmlFor="code" className="">
                  Код
                </label>
                <Input
                  id="code"
                  {...field}
                  type="text"
                  autoComplete="off"
                  placeholder="Введите код..."
                ></Input>
              </div>
            )}
          ></Controller>
        </InputsContainer>
        <Button onClick={() => navigate(routePaths.createTasks)}>
          Принять
        </Button>
      </form>
    </>
  );
}
