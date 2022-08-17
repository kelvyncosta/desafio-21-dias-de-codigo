import { Outlet } from 'react-router-dom';

import { Footer } from 'Components/Footer';
import { Header } from 'Components/Header';

export function App() {
  return (
    <div className="grid grid-rows-layout min-h-screen">
      <Header />

      <main className="w-[100%] max-w-6xl my-0 mx-[auto] py-10 relative">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
