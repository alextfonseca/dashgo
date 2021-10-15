import { useQuery } from "react-query";
import { api } from "../api";

type User = {
  id: string;
  name: string;
  email: string;
  createAt: string;
}

type GetUsersResponse = {
  totalCount: number;
  users: User[];
}

// função que retorna os usuários
const getUsers = async (page: number) : Promise<GetUsersResponse> => {
  // função que retorna os dados

  const { data, headers }:any = await api.get("/users", {
    params: {
      page,
    }
  });

  const totalCount = Number(headers['x-total-count'])

  const users = data.users.map((user) => {

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createAt: new Date(user.created_at).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };
  });

  return {
    users,
    totalCount
  };
}

// hook de usuarios
export const useUsers = (page: number) => {
  return useQuery(
    ["users", page],() => getUsers(page)
    ,
    {
      staleTime: 1000 * 60 * 10, //10 minutos
    },
  );
}

