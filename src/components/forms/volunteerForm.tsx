import { Controller, useForm } from "react-hook-form";
import { InputsContainer } from "../ui/inputsContainer";
import { routePaths } from "../../lib/path";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

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
        <InputsContainer>
          <Controller
            name="name"
            control={control}
            rules={{ required: ". Поле обязательно для заполнения" }}
            render={({ field }) => (
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="">
                  Имя
                </label>
                <input
                  id="name"
                  {...field}
                  type="text"
                  autoComplete="off"
                  placeholder="Введите имя..."
                  className="border border-black"
                ></input>
              </div>
            )}
          ></Controller>

          <Controller
            name="surname"
            control={control}
            rules={{ required: ". Поле обязательно для заполнения" }}
            render={({ field }) => (
              <div className="flex flex-col gap-2">
                <label htmlFor="surname" className="">
                  Фамилия
                </label>
                <input
                  id="surname"
                  {...field}
                  type="text"
                  autoComplete="off"
                  placeholder="Введите фамилию..."
                  className="border border-black"
                ></input>
              </div>
            )}
          ></Controller>

          <Controller
            name="fathername"
            control={control}
            rules={{ required: ". Поле обязательно для заполнения" }}
            render={({ field }) => (
              <div className="flex flex-col gap-2">
                <label htmlFor="fathername" className="">
                  Отчество
                </label>
                <input
                  id="fathername"
                  {...field}
                  type="text"
                  autoComplete="off"
                  placeholder="Введите отчество..."
                  className="border border-black"
                ></input>
              </div>
            )}
          ></Controller>

          <Controller
            name="phone"
            control={control}
            rules={{ required: ". Поле обязательно для заполнения" }}
            render={({ field }) => (
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="">
                  Номер телефона
                </label>
                <input
                  id="phone"
                  {...field}
                  type="text"
                  autoComplete="off"
                  placeholder="Введите номер телефона..."
                  className="border border-black"
                ></input>
              </div>
            )}
          ></Controller>
        </InputsContainer>
        <Button onClick={() => navigate(routePaths.task)}>Принять</Button>
      </form>
    </>
  );
}
