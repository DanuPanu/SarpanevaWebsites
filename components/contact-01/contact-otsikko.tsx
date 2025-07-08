import { TextEffect } from '../motion-primitives/text-effect'

export default function YhteystiedotOtsikko() {
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
                        Yhteystiedot
                    </TextEffect>
                </div>
            </div>
            <div className='text-center flex flex-col items-center justify-center max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-6'>
                <p className="mt-4 text-muted-foreground text-sm sm:text-base" style={{ maxWidth: "650px" }}>
                    Vastaan nopealla aikataululla sähköposteihin. Voit laittaa suoraan sähköpostia minulle tai täyttää alla olevan lomakkeen niin vastaan sinulle mahdollisimman pian. Voimme myös tavata kasvotusten sijainnistasi riippuen!
                </p>
            </div>
        </section>
    )
}

