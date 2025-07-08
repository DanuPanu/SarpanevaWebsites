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
        <footer className="bg-zinc-900 text-white py-2 md:py-5">

            <div className="mx-auto max-w-5xl px-6 flex items-center justify-between">
                {/* Logo vasemmalle */}
                <Link href="/" aria-label="go home" className="shrink-0">
                    <p>Sarpaneva Websites</p>
                </Link>

                {/* Keskelle linkit */}
                <div className="flex justify-center gap-6 text-sm">
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
