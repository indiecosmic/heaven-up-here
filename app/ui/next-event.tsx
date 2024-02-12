
import { fetchNextEvent } from "../lib/data"

export default async function NextEvent() {
  const event = await fetchNextEvent()

  if (event) {
    return (
      <div>
        <h1>Nästa spelning</h1>
        {event?.fields.title}
      </div>
    )
  }
  return null
}