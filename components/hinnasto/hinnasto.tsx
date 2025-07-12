import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Check } from 'lucide-react'
import './hinnasto.css' // Import the CSS file

export default function Hinnasto() {
    return (
        <section className="md:py-5 flex-grow bg-[#f8f5f0]">
            <div className="mx-auto max-w-6xl px-6">

                <div className="mt-8 md:mt-20 flex flex-col items-stretch gap-6 md:flex-row md:justify-center">
                    <Card
                        className="flex flex-col card-hover md:basis-1/2 md:flex-grow bg-[#757a7e] text-white"
                    >
                        <CardHeader>
                            <CardTitle className="font-medium">Landing page</CardTitle>
                            <span className="my-3 block text-2xl font-semibold">499€ <span className='text-sm'>sis alv</span></span>
                            <CardDescription className="text-sm text-white">1 sivuinen</CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-sm">
                                {['Moderni ja responsiivinen design', 'Hosting', 'Perus SEO-optimointi', 'Nopea latausaika', 'Google Maps integraatio', 'Yhden pienen sisällön muutoksen kuukaudessa'].map((item, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>

                        <CardFooter className="mt-auto">
                            <Button
                                asChild
                                variant="outline"
                                className="w-full bg-white text-black hover:bg-gray-100 border-white"
                            >
                                <Link href="/yhteystiedot">Aloitetaan</Link>
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className="flex flex-col card-hover md:basis-1/2 md:flex-grow bg-[#757a7e] text-white mb-5 md:mb-0"
                        >
                        <CardHeader>
                            <CardTitle className="font-medium">Laajemmat sivut</CardTitle>
                            <span className="my-3 block text-2xl font-semibold">699€ <span className='text-sm'>sis alv</span></span>
                            <CardDescription className="text-sm text-white">2-5 sivua</CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-sm">
                                {['Kaikki landing pagesta', 'Mahdollisuus laajempaan muokkaukseen', 'Laajempi SEO-optimointi', 'Yhteydenottolomake', 'Yhden pienen sisällön muutoksen kuukaudessa'].map((item, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>

                        <CardFooter className="mt-auto">
                            <Button
                                asChild
                                variant="outline"
                                className="w-full bg-white text-black hover:bg-gray-100 border-white"
                            >
                                <Link href="/yhteystiedot">Aloitetaan</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    )
}