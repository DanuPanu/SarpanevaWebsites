import Link from 'next/link'

const links = [
  {
    title: 'Etusivu',
    href: '/',
  },
  {
    title: 'Minusta',
    href: '/minusta',
  },
  {
    title: 'Hinnasto',
    href: '/hinnasto',
  },
  {
    title: 'Yhteystiedot',
    href: '/yhteystiedot',
  },
]

export default function FooterSection() {
  return (
    <footer className="bg-zinc-900 text-white py-4 md:py-5">
      <div className="mx-auto max-w-5xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo ylös tai vasemmalle */}
        <Link href="/" aria-label="go home" className="shrink-0 text-sm md:text-base">
          <p>Sarpaneva Websites</p>
        </Link>

        {/* Linkit allekkain mobiilissa, vierekkäin desktopilla */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="hover:text-zinc-200"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
