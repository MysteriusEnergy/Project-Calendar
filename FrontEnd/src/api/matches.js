import axios from "./axios";

export const getMatchesRequest = () => axios.get('/Matches');

export const getMatcheRequest = (id) => axios.get(`/Matches/${id}`);

export const createMatcheRequest = (Matche) => axios.post('/Matches', Matche);

export const updateMatcheRequest = (id, Matche) => axios.put(`/Matches/${id}`, Matche);

export const deleteMatcheRequest = (id) => axios.delete(`/Matches/${id}`);