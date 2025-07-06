import { Cpu, Zap } from 'lucide-react'
import Image from 'next/image'

export default function ContentSectionMinusta2() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">Taustani</h2>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div className="relative space-y-4">
                        <p className="text-muted-foreground text-sm xl:text-md">
                        Olen aina ollut kiinnostunut teknologiasta ja visuaalisesta suunnittelusta. Aluksi tein verkkosivuja harrastuksena, mutta pian huomasin, että voin auttaa muita tekemään parempia <span className="text-accent-foreground font-bold">digitaalisia ratkaisuja.</span>
                        </p>
                        <p className="text-muted-foreground text-sm xl:text-md">Sivujen tekeminen on mulle mielekästä hommaa, ja opintojen ohella teen niitä asiakkaille – tarkoituksena tehdä toimivaa ja siistiä jälkeä ilman turhaa monimutkaisuutta.</p>

                        <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Zap className="size-4" />
                                    <h3 className="text-sm font-medium">Tyylini</h3>
                                </div>
                                <p className="text-muted-foreground text-xs md:text-sm">Suunnitteluni keskittyy moderniin ilmeeseen, helppokäyttöisyyteen ja hakukoneoptimointiin.</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Cpu className="size-4" />
                                    <h3 className="text-sm font-medium">Yksinkertaisuus</h3>
                                </div>
                                <p className="text-muted-foreground text-xs md:text-sm">Pidän prosessin yksinkertaisena ja huolehdin, että saat juuri sinulle sopivan lopputuloksen.</p>
                            </div>
                        </div>
                        <div className='pt-6'>
                            <p className="text-muted-foreground text-sm xl:text-md">Jos tarvitset uudet verkkosivut tai haluat päivittää vanhat, ota yhteyttä - suunnitellaan yhdessä ratkaisu, joka sopii juuri sinun tarpeisiisi!</p>
                        </div>
                    </div>
                    <div className="relative mt-6 sm:mt-0">
                        <div className="aspect-67/34 relative flex justify-center items-center rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                            <Image 
                                src="/profiilikuva.jpg" 
                                className="rounded-[15px] w-[60%] lg:w-[70%]" 
                                alt="payments illustration light" 
                                width={1206} 
                                height={612} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
