import { createContext, useContext, useState } from "react";
import {
    createMatcheRequest,
    getMatchesRequest,
    deleteMatcheRequest,
    getMatcheRequest,
    updateMatcheRequest
} from '../api/matches'

const MatchesContext = createContext();

export const useMatches = () => {
    const context = useContext(MatchesContext);

    if (!context) {
        throw new Error("useMatches must be used within a MatcheProvider");
    }

    return context;
}

export function MatcheProvider({ children }) {
    const [Matches, setMatches] = useState([]);

    const createMatche = async (Matche) => {
        const res = await createMatcheRequest(Matche);
        console.log(res);
    };

    const deleteMatche = async (id) => {
        try {
            const res = await deleteMatcheRequest(id);

            if (res.status === 204) setMatches(Matches.filter((Matche) => Matche._id != id));

        } catch (error) {
            console.log(res);
        }
    };

    const getMatches = async () => {
        try {
            const res = await getMatchesRequest();
            setMatches(res.data);
        } catch (error) {
            console.log(res);
        }
    };

    const getMatche = async (id) => {
        try {
            const res = await getMatcheRequest(id);
            return res.data;

        } catch (error) {
            console.log(error);
        }
    };

    const updateMatche = async (id, Matche) => {
        try {
            await updateMatcheRequest(id, Matche);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <MatchesContext.Provider value={{
            Matches,
            createMatche,
            getMatches,
            deleteMatche,
            getMatche,
            updateMatche,
        }}>
            {children}
        </MatchesContext.Provider>
    );
}