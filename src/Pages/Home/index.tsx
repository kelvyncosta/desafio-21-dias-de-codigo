import { Card } from 'Components/Card';

export function Home() {
  return (
    <div className="flex justify-center flex-wrap gap-10">
      <Card day="1" title="Criar Repositório" />
      <Card to="/days/01" day="2" title="Hello World" />
    </div>
  );
}
