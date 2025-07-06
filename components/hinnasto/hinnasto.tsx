import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Check } from 'lucide-react'
import './hinnasto.css' // Import the CSS file

export default function Hinnasto() {
    return (
        <section className="md:py-5 flex-grow">
            <div className="mx-auto max-w-6xl px-6">

                <div className="mt-8 md:mt-20 flex flex-col items-stretch gap-6 md:flex-row md:justify-center">
                <Card className="flex flex-col card-hover md:basis-1/2 md:flex-grow">
                        <CardHeader>
                            <CardTitle className="font-medium">Pieni sivu</CardTitle>
                            <span className="my-3 block text-2xl font-semibold">499€</span>
                            <CardDescription className="text-sm">1 sivuinen</CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-sm">
                                {['Moderni ja responsiivinen design', 'Yksi selkeä sivu', 'Perus SEO-optimointi', 'Nopea latausaika'].map((item, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>

                        <CardFooter className="mt-auto">
                            <Button asChild variant="outline" className="w-full">
                                <Link href="/yhteystiedot">Aloitetaan</Link>
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className="flex flex-col card-hover md:basis-1/2 md:flex-grow">
                        <CardHeader>
                            <CardTitle className="font-medium">Keskisuuret sivut</CardTitle>
                            <span className="my-3 block text-2xl font-semibold">699€</span>
                            <CardDescription className="text-sm">2-5 sivua</CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-sm">
                                {['Kaikki pienestä sivusta', '2-5 sivua', 'Laajempi SEO-optimointi', 'Google Maps integraatio'].map((item, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>

                        <CardFooter className="mt-auto">
                            <Button asChild className="w-full">
                                <Link href="/yhteystiedot">Aloitetaan</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    )
}