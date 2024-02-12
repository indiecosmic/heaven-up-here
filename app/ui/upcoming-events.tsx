
import { fetchUpcomingEvents } from "../lib/data"

export default async function UpcomingEvents() {
  const events = await fetchUpcomingEvents()

  return (
    <div>
      <h1>Kommande spelningar</h1>
      {events.items.map((entry) => {
        return (
          <div key={entry.sys.id}>{entry.fields.title}</div>
        )
      })}
    </div>
  )
}