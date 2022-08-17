import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="h-16 bg-purple-900 flex justify-center items-center shadow-sm shadow-gray-800">
      <div className="w-[100%] max-w-6xl flex items-center justify-between">
        <Link className="text-3xl transition-colors font-bold" to="/">
          21 Dias de Código
        </Link>

        <div className="text-[1.5rem] flex gap-4">
          <a
            href="https://github.com/kelvyncosta/desafio-21-dias-de-codigo"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/kelvyncosta/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </header>
  );
}
