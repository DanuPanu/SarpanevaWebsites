import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Settings2, Sparkles, Zap } from 'lucide-react'
import { ReactNode } from 'react'

export default function Features() {
    return (
        <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-3xl md:text-4xl font-medium 2xl:text-5xl">Rakennettu tarpeitasi varten</h2>
                    <p className="mt-4 text-sm md:text-base">Keskity siihen, mikä on tärkeintä - minä huolehdin lopuista. Verkkosivut, jotka mukautuvat yrityksesi tarpeisiin ja vievät brändisi uudelle tasolle.</p>
                </div>
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
                    <Card className="group shadow-zinc-950/5">
                        <CardHeader>
                            <CardDecorator>
                                <Settings2 className="size-6" aria-hidden />
                            </CardDecorator>

                            <h3 className="font-medium text-lg">Täysin räätälöitävissä</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">Ei kahta samanlaista projektia. Tarjoan ratkaisuja, jotka mahdollistavat täydellisen mukautettavuuden, jotta jokainen yksityiskohta vastaa juuri sinun visiotasi.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5">
                        <CardHeader>
                            <CardDecorator>
                                <Sparkles className="size-6" aria-hidden />
                            </CardDecorator>

                            <h3 className="font-medium text-lg">Valinnan vapaus</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">Päätät täysin verkkosivustosi sisällöstä, päivityksistä ja ulkoasusta sillä teen sivut alusta loppuun itse.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5">
                        <CardHeader>
                            <CardDecorator>
                                <Zap className="size-6" aria-hidden />
                            </CardDecorator>

                            <h3 className="font-medium text-lg">Supernopea suorituskyky</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">Varmistan, että verkkosivustosi latautuu salamannopeasti käyttäen Next.js:ää, joka optimoi sivustosi suorituskyvyn. Tämä takaa nopean käyttökokemuksen ja vähentää odotusaikoja, mikä parantaa asiakastyytyväisyyttä ja hakukonesijoituksia.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div aria-hidden className="bg-radial to-background absolute inset-0 from-transparent to-75%" />
        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">{children}</div>
    </div>
)
