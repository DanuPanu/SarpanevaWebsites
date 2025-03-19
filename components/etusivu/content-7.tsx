import { Cpu, Zap } from 'lucide-react'
import Image from 'next/image'

export default function ContentSection() {
    return (
        <section className="py-16 md:py-32">
    <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-3xl md:text-4xl font-medium 2xl:text-5xl">Verkkosivustosi kehittyy tehokkaasti ja innovatiivisesti</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative space-y-4">
                <p className="text-muted-foreground text-sm xl:text-md">
                    Modernit verkkosivustot tarvitsevat tehokasta teknologiaa, joka mahdollistaa nopean ja sujuvan käyttökokemuksen. <span className="text-accent-foreground font-bold">Ratkaisuni</span> yhdistävät huipputeknologian ja helppokäyttöisyyden.
                </p>
                <p className="text-muted-foreground text-sm xl:text-md">Hyödynnän edistyksellisiä alustoja ja työkaluja, jotka tukevat niin suunnittelua kuin kehitystyötä, antaen asiakkaillemme parhaan mahdollisen lopputuloksen.</p>

                <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Zap className="size-4" />
                            <h3 className="text-md font-medium">Nopea ja tehokas</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Ratkaisuni on optimoitu nopeaksi, mikä takaa sujuvan käyttökokemuksen kaikilla laitteilla.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Cpu className="size-4" />
                            <h3 className="text-md font-medium">Voimakas ja skaalautuva</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Järjestelmäni on rakennettu kestämään kasvua ja tarjoaa rajattomat mahdollisuudet tulevaisuuden kehitykselle.</p>
                    </div>
                </div>
            </div>
            <div className="relative mt-6 sm:mt-0">
                <div className="bg-linear-to-b aspect-67/34 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                    <Image src="/office.jpg" className="rounded-[15px] shadow dark:hidden" alt="example illustration" width={1206} height={612} />
                </div>
            </div>
        </div>
    </div>
</section>

    )
}
