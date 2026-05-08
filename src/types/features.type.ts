export type Feature = {
  id: string;
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
  iconVariant:
    | "heart"
    | "doacao"
    | "castracao"
    | "exigencias"
    | "racas"
    | "catsitter";
};
