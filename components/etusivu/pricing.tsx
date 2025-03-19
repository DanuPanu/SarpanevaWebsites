import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import Link from 'next/link'

export default function Pricing() {
    return (
        <div className="relative py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">Laitetaan yrityksesi kartalle</h2>
                    <p className="text-muted-foreground text-lg mt-4 md:mt-8">Tarjoan tällä hetkellä pieniä 1 - 3 sivun nettisivuja, mutta suuremmatkin kokonaisuudet onnistuvat sovittaessa.</p>
                </div>
                <div className="mt-8 md:mt-20">
                    <div className="bg-card relative rounded-3xl border shadow-2xl shadow-zinc-950/5">
                        <div className="grid items-center gap-12 divide-y p-12 md:grid-cols-2 md:divide-x md:divide-y-0">
                            <div className="pb-12 text-center md:pb-0 md:pr-12">
                                <h3 className="text-4xl font-semibold">Hinta</h3>
                                <p className="mt-2 text-lg">Yksinkertaisille 1-3 sivun verkkosivuille</p>
                                <span className="mb-6 mt-12 inline-block text-5xl font-bold">500€</span>

                                <div className="flex justify-center">
                                    <Button asChild size="lg">
                                        <Link href="#">Ota yhteyttä</Link>
                                    </Button>
                                </div>

                                <p className="text-muted-foreground mt-12 text-sm">Sisältää: Verkkosivut, jotka toimivat moitteettomasti kaikilla laitteilla, ilmainen tuki muokkauksille ensimmäisen kuukauden ajan sekä suora julkaisu Google-hakuihin.</p>
                                </div>
                            <div className="flex flex-col gap-8 md:pl-12 text-center sm:text-left">
                                <h3 className="text-3xl font-semibold">Ominaisuudet</h3>
                                <ul role="list" className="space-y-4">
                                    {['Mobiili responsiivisuus', 'Google julkaisu', 'SEO-optimointi', 'Nopea latausaika', 'Tuki ongelma tilanteissa'].map((item, index) => (
                                        <li key={index} className="flex items-center gap-2">
                                            <Check className="size-3" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
