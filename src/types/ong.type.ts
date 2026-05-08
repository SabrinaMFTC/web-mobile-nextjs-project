export type OngAddress = {
  rua: string;
  numero: string;
  cidade: string;
  estado: string;
};

export type Ong = {
  id: number;
  nome: string;
  descricao: string;
  endereco: OngAddress;
  telefone: string;
  email: string;
  site: string;
  horarioFuncionamento: string;
};
