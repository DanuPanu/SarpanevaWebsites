import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";

const YhteystiedotContent = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h2 className="mt-3 text-4xl font-medium lg:text-5xl">
        Ota yhteyttä
      </h2>
      <p className="mt-4 text-muted-foreground text-sm xl:text-md">
        Vastaan nopealla aikataululla sähköposteihin ja puheluihin. Voimme myös tavata kasvotusten sijainnistasi riippuen!
      </p>
      <div className="max-w-screen-xl mx-auto py-24 grid md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-10 px-6 md:px-0">
        <div className="text-center flex flex-col items-center">
          <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
            <MailIcon />
          </div>
          <h3 className="mt-6 font-semibold text-xl">Sähköposti</h3>
          <p className="mt-2 text-muted-foreground">
            Lähetä sähköpostia milloin vain.
          </p>
          <Link
            className="mt-4 font-medium text-primary"
            href="mailto:akashmoradiya3444@gmail.com"
          >
            sarpanevawebsites@gmail.com
          </Link>
        </div>
        <div className="text-center flex flex-col items-center">
          <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
            <MapPinIcon />
          </div>
          <h3 className="mt-6 font-semibold text-xl">Sijainti</h3>
          <p className="mt-2 text-muted-foreground">
            Espoo
          </p>
        </div>
        <div className="text-center flex flex-col items-center">
          <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
            <PhoneIcon />
          </div>
          <h3 className="mt-6 font-semibold text-xl">Puhelin</h3>
          <p className="mt-2 text-muted-foreground">Maanantai-pejantai kello 8-17.</p>
          <Link
            className="mt-4 font-medium text-primary"
            href="tel:akashmoradiya3444@gmail.com"
          >
            +358 45 274 3591
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default YhteystiedotContent;
