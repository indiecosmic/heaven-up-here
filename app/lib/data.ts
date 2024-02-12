import { createClient } from 'contentful'
import { TypeEvent, TypeSocialLink } from './contentful-types'
import { cache } from 'react'

export const fetchSocialMediaLinks = cache(async () => {
  const client = createClient({
    accessToken: process.env.CTF_CDA_ACCESS_TOKEN!,
    space: process.env.CTF_SPACE_ID!
  })

  const query = {
    content_type: 'socialLink'
  }
  return await client.getEntries<TypeSocialLink>(query)
})

export const fetchUpcomingEvents = cache(async () => {
  const client = createClient({
    accessToken: process.env.CTF_CDA_ACCESS_TOKEN!,
    space: process.env.CTF_SPACE_ID!
  })

  const query = {
    content_type: 'event',
    'fields.endDate[gte]': new Date('2023-12-09').toISOString(),
    'order': 'fields.startDate'
  }

  return await client.getEntries<TypeEvent>(query)
})

export async function fetchNextEvent() {
  const events = await fetchUpcomingEvents()
  if (events.total > 0)
    return events.items[0]
  return null
}