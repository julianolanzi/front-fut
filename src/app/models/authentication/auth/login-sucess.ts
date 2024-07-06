export interface LoginSuccess {
    _id: string;
    email: string;
    token: string;
    apelido: string;
    url: string;
    permission: {
      roles: string;
      plan: string;
      roleTeam: string;
    }
  }