interface IDay {
  to?: string;
  id: number;
  title: string;
}

export const DAYS: IDay[] = [
  {
    id: 1,
    title: 'Criar Repositório',
  },
  {
    id: 2,
    title: 'Hello World',
    to: '/days/02',
  },
  {
    id: 3,
    title: 'Botão Animado',
    to: '/days/03',
  },
  {
    id: 4,
    title: 'Calculadora',
    to: '/days/04',
  },
];
