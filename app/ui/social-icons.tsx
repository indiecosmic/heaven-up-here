import { fetchSocialMediaLinks } from "../lib/data";

export default async function SocialLinks() {
  const links = await fetchSocialMediaLinks()

  return (
    <ul>
      {links.items.map((link) => {
        return (
          <li key={link.sys.id}><a href={link.fields.url}>{link.fields.type}</a></li>
        )
      })}
    </ul>
  )
}