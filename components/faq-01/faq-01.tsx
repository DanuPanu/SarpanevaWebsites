import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faq = [
  {
    question: "Kuinka kauan verkkosivujen toteutus kestää?",
    answer:
      "Yksinkertaisen yhden sivun toteutus kestää yleensä noin 1–2 viikkoa. Laajemmat sivustot voivat viedä 3–6 viikkoa riippuen projektin laajuudesta ja sisällöstä.",
  },
  {
    question: "Mitä tietoja tarvitsen ennen projektin aloitusta?",
    answer:
      "Tarvitsen tietoja yrityksestäsi, tavoitteistasi, haluamastasi design-tyylistä sekä mahdollisesti logoja, kuvia ja tekstejä, joita haluat sivustolle. Autan myös sisällön suunnittelussa!",
  },
  {
    question: "Sisältyykö verkkosivuihin hakukoneoptimointi (SEO)?",
    answer:
      "Kyllä! Kaikkiin paketteihin sisältyy perus-SEO, joka auttaa sivustoasi näkymään hakukoneissa paremmin.",
  },
  {
    question: "Miten verkkosivujen päivitykset ja muutokset toimivat?",
    answer:
      "Tarjoan pieniä muutoksia ja päivityksiä kerran kuukaudessa, mutta isommat muutokset laskutetaan erikseen.",
  },
  {
    question: "Miten verkkosivujen maksaminen toimii?",
    answer:
      "Maksu tapahtuu yleensä kahdessa erässä: 50 % projektin alkaessa ja loput 50 % ennen julkaisua.",
  },
  {
    question: "Kuka ostaa domainin ja miten se liitetään verkkosivuun?",
    answer:
      "Domainin voi ostaa joko asiakas itse tai minä voin hoitaa sen puolestasi. Suositeltavin tapa on, että asiakas ostaa domainin itse luotettavasta palvelusta (esim. Google Domains, Louhi, Namecheap). Tämän jälkeen liitän uuden domain nimen hosting palveluun. Jos domainin hankinta tuntuu hankalalta, voin ostaa sen asiakkaalle ja siirtää omistajuuden myöhemmin. Jatkuvalla ylläpito kuukausihinnalla, voin myös hallinnoida domainia itse, jolloin kaikki tekniset asiat pysyvät minun käsissäni. Voimme sopia yhdessä, mikä vaihtoehto toimii sinulle parhaiten!",
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-xl">
      <h2 className="text-center text-3xl md:text-4xl font-medium 2xl:text-5xl">Vastauksia joihinkin kysymyksiisi</h2>

        <Accordion type="single" className="mt-6" defaultValue="question-0">
          {faq.map(({ question, answer }, index) => (
            <AccordionItem key={question} value={`question-${index}`}>
              <AccordionTrigger className="text-left text-lg">
                {question}
              </AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
