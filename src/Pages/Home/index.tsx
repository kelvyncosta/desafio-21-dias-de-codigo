import { Card } from 'Components/Card';
import { DAYS } from 'shared/constants';

export function Home() {
  return (
    <div className="flex justify-center flex-wrap gap-10">
      {DAYS.map(day => {
        return <Card key={day.id} to={day.to} day={day.id} title={day.title} />;
      })}
    </div>
  );
}
