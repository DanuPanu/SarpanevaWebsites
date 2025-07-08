import { TextEffect } from '../motion-primitives/text-effect'

export default function ContentSectionMinusta() {
    return (
        <section className="py-16 md:pt-32">
            <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                        <TextEffect
                            preset="fade-in-blur"
                            speedSegment={0.3}
                            as="h1"
                            className="mt-8 text-balance text-5xl md:text-7xl lg:mt-16 2xl:text-[5.25rem]">
                            Minusta
                        </TextEffect>
                    </div>
                </div>
            <div className="mx-auto max-w-5xl px-6 mt-22">
                <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                <TextEffect className="text-xl md:text-3xl font-medium" per="char" preset="fade" speedReveal={1.1}>
                    Hei! Olen Daniel, tietojenkäsittelytieteen opiskelija ja rakennan verkkosivuja pienyrittäjille ja yrityksille opintojeni ohella.
                </TextEffect>
                    <div className="space-y-6 text-md xl:text-xl">
                        <p>Rakennan selkeitä, tyylikkäitä ja tehokkaita verkkosivuja, jotka eivät vain näytä hyvältä, vaan myös tukevat liiketoimintaasi. Suunnittelussani panostan nopeuteen, käytettävyyteen ja hakukoneoptimointiin, jotta verkkosivusi toimivat sujuvasti kaikilla laitteilla.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

