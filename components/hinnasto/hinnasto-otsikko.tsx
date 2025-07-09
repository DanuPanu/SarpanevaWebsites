import { TextEffect } from '../motion-primitives/text-effect'

export default function ContentSectionHinnasto() {
    return (
        <section className="px-5 py-16 md:pt-32 bg-[#f8f5f0] ">
            <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                        <TextEffect
                            preset="fade-in-blur"
                            speedSegment={0.3}
                            as="h1"
                            className="mt-8 text-balance text-5xl md:text-7xl lg:mt-16 2xl:text-[5.25rem]">
                            Hinnasto
                        </TextEffect>
                    </div>
                </div>
                <div className="text-muted-foreground mx-auto max-w-2xl pt-7 space-y-6 text-center text-sm md:text-base">
                    <p>Tarjoan kaksi eritasoista verkkosivupakettia, jotka mukautetaan aina asiakkaan tarpeisiin ja toiveisiin. Hyödynnän suunnittelussa ja toteutuksessa moderneja työkaluja ja tekoälyä, joiden avulla sivuston rakentaminen käy tehokkaasti – kuitenkaan tinkimättä laadusta tai persoonallisuudesta.</p>
                    <br></br>
                    <p>Pienet sisällön muutokset veloitetaan erikseen 50€ per kerta. Isommista kokonaisuuksien muutoksista sovittava erikseen.</p>
                </div>
        </section>
    )
}

