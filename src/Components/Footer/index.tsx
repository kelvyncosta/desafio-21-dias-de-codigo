import { FaHeart } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="flex justify-center items-center bg-gray-800">
      <span className="flex gap-2 items-center">
        Desenvolvido com <FaHeart className="text-red-600" /> por{' '}
        <a
          href="https://github.com/kelvyncosta"
          target="_blank"
          rel="noreferrer"
        >
          Kelvyn Costa
        </a>
      </span>
    </footer>
  );
}
