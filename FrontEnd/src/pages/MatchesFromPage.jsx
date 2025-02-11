import { useForm } from "react-hook-form";
import { useMatches } from "../context/MatchesContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

function MatcheFromPage() {

  const { register, handleSubmit, setValue } = useForm();
  const { createMatche, getMatche, updateMatche } = useMatches();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadMatche() {
      if (params.id) {
        const Matche = await getMatche(params.id);
        console.log(Matche);
        setValue('title', Matche.title);
        setValue('description', Matche.description);
        setValue('date', dayjs(Matche.date).utc().format("YYYY-MM-DD"));
      }
      else{
        setValue('date', dayjs().utc().format("YYYY-MM-DD"));
      }
    }
    loadMatche();
  }, []);

  const onSubmits = handleSubmit((data) => {
    const dataValid = {
      ...data,
      date: data.date ? dayjs(data.date).format() : dayjs.utc().format(),
    }
    if (params.id) {
      updateMatche(params.id, dataValid);
    } else {
      createMatche(dataValid);
    }
    navigate('/Matches');
  })

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md p-10 rounded-md">
        <form onSubmit={onSubmits}>
          <label htmlFor="title"></label>
          <input id="title" type="text" placeholder="Titulo"
            {...register("title")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            autoFocus
          />
          <label htmlFor="description"></label>
          <textarea  id="description" rows="5" placeholder="Descripcion"
            {...register("description")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          >
          </textarea>
          <label htmlFor="date"></label>
          <input id="date" type="date" {...register("date")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />

          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md">
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
}

export default MatcheFromPage;
