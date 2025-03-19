import { TextEffect } from '../motion-primitives/text-effect'

export default function ContentSectionMinusta() {
    return (
        <section className="py-16 md:py-32">
            <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                        <TextEffect
                            preset="fade-in-blur"
                            speedSegment={0.3}
                            as="h1"
                            className="mt-8 text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem]">
                            Minusta
                        </TextEffect>
                    </div>
                </div>
            <div className="mx-auto max-w-5xl px-6 mt-22">
                <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                <TextEffect className="text-3xl font-medium" per='char' preset='fade' speedSegment={0.7}>
                    Olen Daniel, intohimoinen verkkosivusuunnittelija, joka auttaa yrityksiä ja yksityisyrittäjiä saamaan toimivat ja modernit verkkosivut.
                </TextEffect>
                    <div className="space-y-6">
                        <p>Rakennan selkeitä, tyylikkäitä ja tehokkaita verkkosivuja, jotka eivät vain näytä hyvältä, vaan myös tukevat liiketoimintaasi. Suunnittelussani panostan nopeuteen, käytettävyyteen ja hakukoneoptimointiin, jotta verkkosivusi toimivat sujuvasti kaikilla laitteilla.</p>
                        <p>Uskon, että jokaisella yrityksellä on oma tarinansa, ja haluan auttaa sinua kertomaan sen verkossa. Pidän prosessin mutkattomana, kommunikoin selkeästi ja pidän huolta siitä, että lopputulos vastaa täysin tarpeitasi.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

