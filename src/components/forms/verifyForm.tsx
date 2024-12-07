import { Controller, useForm } from "react-hook-form";
import { InputsContainer } from "../ui/inputsContainer";
import { routePaths } from "../../lib/path";
import { useNavigate } from "react-router-dom";

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
                <input
                  id="code"
                  {...field}
                  type="text"
                  autoComplete="off"
                  placeholder="Введите код..."
                  className="border border-black"
                ></input>
              </div>
            )}
          ></Controller>
        </InputsContainer>
        <button
          type="button"
          onClick={() => navigate(routePaths.createTasks)}
          className="bg-yellow-300 text-black px-2 py-1 rounded-md my-2"
        >
          Принять
        </button>
      </form>
    </>
  );
}
