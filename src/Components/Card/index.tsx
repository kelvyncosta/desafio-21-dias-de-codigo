import { Link } from 'react-router-dom';

interface CardProps {
  day: string;
  title: string;
  to?: string;
}

export function Card({ day, title, to = '/' }: CardProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <Link
        to={to}
        className="
          border-2 border-purple-700 rounded-lg py-2 w-40 h-40 flex
          justify-center items-center text-3xl text-purple-700
          hover:border-gray-900 hover:text-gray-900 hover:bg-purple-700
          transition-all
        "
      >{`Dia ${day}`}</Link>
      <span>{title}</span>
    </div>
  );
}
