import { Link } from "react-router-dom";
import { useMatches } from "../context/MatchesContext";

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

export function MatcheCard({ Matche }) {
    const { deleteMatche } = useMatches();
    return (
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md overflow-hidden">
            <header className="flex justify-between">
                <h1 className="text-2xl font-bold truncate">{Matche.title}</h1>
            </header>
            <p className="text-slate-400 my-2 break-words max-h-24 overflow-hidden">{Matche.description}</p>
            <div className="flex gap-x-2 items-center flex-wrap">
                <button
                    className="bg-red-600 hover:bg-red-700 px-2 py-2 rounded-md"
                    onClick={() => {
                        deleteMatche(Matche._id);
                    }} >Eliminar</button>

                <Link
                    className="bg-blue-600 hover:bg-blue-700 px-2 py-2 rounded-md"
                    to={`/Matches/${Matche._id}`}>Editar</Link>
            </div>
                <p className="text-slate-400 text-sm my-2">{dayjs.utc(Matche.date).format("DD/MM/YYYY")}</p>
        </div>
    );
}

export default MatcheCard;
