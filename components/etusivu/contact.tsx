import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'

export default function ContactSection() {
    return (
        <section className="py-32">
            <div className="mx-auto max-w-3xl px-8 lg:px-0">
                <h1 className="text-center text-4xl font-semibold lg:text-5xl">Ota yhteyttä</h1>
                <p className="mt-4 text-center">Keskustellaan, miten voimme auttaa sinua luomaan juuri tarpeisiisi sopivan verkkosivun.</p>

                <Card className="mx-auto mt-12 max-w-lg p-8 shadow-md sm:p-16">
                    <div>
                        <h2 className="text-xl font-semibold">Aloitetaan yhdessä</h2>
                        <p className="mt-4 text-sm">Ota yhteyttä, niin mietitään yhdessä, kuinka voimme tuoda ideasi eloon verkossa. Olen täällä auttamassa sinua koko matkan ajan!</p>
                    </div>

                    <form action="" className="**:[&>label]:block mt-12 space-y-6 *:space-y-3">
                        <div>
                            <Label htmlFor="name">Yrityksen tai henkilön nimi</Label>
                            <Input type="text" id="name" required />
                        </div>

                        <div>
                            <Label htmlFor="email">Sähköpostiosoite</Label>
                            <Input type="email" id="email" required />
                        </div>

                        <div>
                            <Label htmlFor="msg">Viesti</Label>
                            <Textarea id="msg" rows={3} />
                        </div>

                        <Button>Lähetä</Button>
                    </form>
                </Card>
            </div>
        </section>
    )
}
