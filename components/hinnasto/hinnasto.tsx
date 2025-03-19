import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Check } from 'lucide-react'
import './hinnasto.css' // Import the CSS file

export default function Hinnasto() {
    return (
        <section className="md:py-5">
            <div className="mx-auto max-w-6xl px-6 ">
                <div className="mx-auto max-w-2xl space-y-6 text-center text-sm md:text-base">
                    <p>Tarjoan kolme erilaista pakettia, mutta jokainen projekti on ainutlaatuinen kokonaisuus, joka muokataan asiakkaan toiveiden ja tarpeiden mukaan varmistaen parhaan mahdollisen lopputuloksen.</p>
                </div>

                <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-3">
                    <Card className="flex flex-col card-hover">
                        <CardHeader>
                            <CardTitle className="font-medium">Pieni sivu</CardTitle>
                            <span className="my-3 block text-2xl font-semibold">400€</span>
                            <CardDescription className="text-sm">1 sivuinen</CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-sm">
                                {['Moderni ja responsiivinen design', 'Yksi selkeä sivu (esim. etusivu)', 'Perus SEO-optimointi', 'Nopea latausaika'].map((item, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>

                        <CardFooter className="mt-auto">
                            <Button asChild variant="outline" className="w-full">
                                <Link href="">Aloitetaan</Link>
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className="flex flex-col card-hover">
                        <CardHeader>
                            <CardTitle className="font-medium">Keskisuuret sivut</CardTitle>
                            <span className="my-3 block text-2xl font-semibold">600€</span>
                            <CardDescription className="text-sm">2-5 sivua</CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-sm">
                                {['Kaikki pienestä sivusta', '2-5 sivua (esim. etusivu, palvelut, yhteystiedot)', 'Laajempi SEO-optimointi', 'Blogi- tai uutisosion mahdollisuus'].map((item, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>

                        <CardFooter className="mt-auto">
                            <Button asChild className="w-full">
                                <Link href="">Aloitetaan</Link>
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className="flex flex-col card-hover">
                        <CardHeader>
                            <CardTitle className="font-medium">Laajat sivut</CardTitle>
                            <span className="my-3 block text-2xl font-semibold">800€-</span>
                            <CardDescription className="text-sm">Sivu määrä sovittavissa</CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-sm">
                                {['Kaikki keskisuurista sivuista', 'Lisäsisältösivut tarpeen mukaan', 'Mahdollisuus lisäominaisuuksiin (esim. ajanvaraus)'].map((item, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>

                        <CardFooter className="mt-auto">
                            <Button asChild variant="outline" className="w-full">
                                <Link href="">Aloitetaan</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    )
}