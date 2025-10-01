import { getNewsItems } from '../utils/news-util';

export default function Home() {
  const news = getNewsItems();
  return (
    <div>
      <h1>Välkommen till Järfällas kriswebb</h1>
      <p>
        Här samlar vi all viktig information om händelser som påverkar Järfälla. Kriswebben används vid större olyckor, cyberangrepp, naturhändelser eller andra situationer där du snabbt behöver veta vad som gäller. Här hittar du bekräftad och aktuell information från kommunen och våra samarbetspartners.
      </p>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Vad har hänt?</h2>
        {news.length === 0 ? (
          <div className="bg-panel p-4 rounded-lg mt-4">
            <p>Just nu finns inga akuta händelser i Järfälla.</p>
            <p>Vid en kris publicerar vi nyheter här, med löpande uppdateringar om läget.</p>
          </div>
        ) : (
          <div className="grid gap-4 mt-4">
            {news.map(item => {
              const dateStr = item.date;
              const showTime = /\d{2}:\d{2}/.test(dateStr);
              const formattedDate = showTime ? dateStr : dateStr.split(' ')[0];
              let updatedStr = '';
              if (item.updated) {
                updatedStr = ` (Uppdaterades: ${item.updated})`;
              }
              return (
                <div key={item.date + item.title} className="bg-panel border border-[#eee] dark:border-[#333] rounded-lg p-4">
                  <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                  <div className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    {formattedDate}{updatedStr}
                  </div>
                  <div>{item.content}</div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
