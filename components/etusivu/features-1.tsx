import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Settings2, Sparkles, Zap } from 'lucide-react'
import { ReactNode } from 'react'

export default function Features() {
    return (
        <section className="py-16 md:py-32 bg-[#0e223b] text-white">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-3xl md:text-4xl font-medium 2xl:text-5xl">Rakennettu tarpeitasi varten</h2>
                    <p className="mt-4 text-sm md:text-base text-gray-200">Keskity siihen, mikä on tärkeintä - minä huolehdin lopuista. Verkkosivut, jotka mukautuvat yrityksesi tarpeisiin ja vievät brändisi uudelle tasolle.</p>
                </div>
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
                    <Card className="group shadow-zinc-950/5 bg-[#00264d] bg-gradient-to-b from-white/8 via-[#00264d] to-[#00264d] text-white">
                        <CardHeader className="flex flex-col items-center">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 mb-3">
                                <Settings2 className="size-6 text-black" aria-hidden />
                            </div>
                            <h3 className="font-medium text-lg text-center">Räätälöity juuri sinun tarpeisiisi</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-200">Ulkoasu, sisältö ja rakenne muokataan sinun toimialaasi ja asiakaskuntaasi ajatellen – ei valmista teemaa, vaan omaan tyyliin sopiva.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5 bg-[#00264d] bg-gradient-to-b from-white/8 via-[#00264d] to-[#00264d] text-white">
                        <CardHeader className='flex flex-col items-center'>
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 mb-3">
                                <Sparkles className="size-6 text-black" aria-hidden />
                            </div>
                            <h3 className="font-medium text-lg">Helppo ja huoleton toteutus</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-200">Kerron selkeästi, mitä tapahtuu ja milloin. Sinun ei tarvitse ymmärtää teknologiaa – minä hoidan sen.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5 bg-[#00264d] bg-gradient-to-b from-white/8 via-[#00264d] to-[#00264d] text-white">
                        <CardHeader className='flex flex-col items-center'>
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 mb-3">
                                <Zap className="size-6 text-black" aria-hidden />
                            </div>
                            <h3 className="font-medium text-lg">Nopeat ja toimivat sivut</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-200">Rakennan sivut moderneilla teknologioilla (Next.js + Vercel), jotka takaavat nopean suorituskyvyn ja miellyttävän käyttökokemuksen – myös puhelimella.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}