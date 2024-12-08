import { Controller, useForm } from "react-hook-form";
import { InputsContainer } from "../ui/inputsContainer";
import { routePaths } from "../../lib/path";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import Input from "../ui/Input";

interface volunteerInput {
  name: string;
  surname: string;
  fathername: string;
  phone: string;
}

export default function VolunteerForm() {
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm<volunteerInput>({
    defaultValues: {
      name: "",
      surname: "",
      fathername: "",
      phone: "",
    },
  });
  return (
    <>
      <form>
        <InputsContainer className="flex flex-col gap-y-2">
          <Controller
            name="name"
            control={control}
            rules={{ required: ". Поле обязательно для заполнения" }}
            render={({ field }) => (
              <div className="flex flex-col">
                <label htmlFor="name" className="">
                  Имя
                </label>
                <Input
                  id="name"
                  {...field}
                  type="text"
                  autoComplete="off"
                  placeholder="Введите имя..."
                ></Input>
              </div>
            )}
          ></Controller>

          <Controller
            name="surname"
            control={control}
            rules={{ required: ". Поле обязательно для заполнения" }}
            render={({ field }) => (
              <div className="flex flex-col">
                <label htmlFor="surname" className="">
                  Фамилия
                </label>
                <Input
                  id="surname"
                  {...field}
                  type="text"
                  autoComplete="off"
                  placeholder="Введите фамилию..."
                ></Input>
              </div>
            )}
          ></Controller>

          <Controller
            name="fathername"
            control={control}
            rules={{ required: ". Поле обязательно для заполнения" }}
            render={({ field }) => (
              <div className="flex flex-col">
                <label htmlFor="fathername" className="">
                  Отчество
                </label>
                <Input
                  id="fathername"
                  {...field}
                  type="text"
                  autoComplete="off"
                  placeholder="Введите отчество..."
                ></Input>
              </div>
            )}
          ></Controller>

          <Controller
            name="phone"
            control={control}
            rules={{ required: ". Поле обязательно для заполнения" }}
            render={({ field }) => (
              <div className="flex flex-col">
                <label htmlFor="phone" className="">
                  Номер телефона
                </label>
                <Input
                  id="phone"
                  {...field}
                  type="text"
                  autoComplete="off"
                  placeholder="Введите номер телефона..."
                ></Input>
              </div>
            )}
          ></Controller>
        </InputsContainer>
        <Button onClick={() => navigate(routePaths.task)}>Принять</Button>
      </form>
    </>
  );
}
