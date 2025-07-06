import { MailIcon, MapPinIcon } from "lucide-react";

const YhteystiedotContent = () => (
  <div className="flex items-center justify-center px-6">
      <div className="max-w-screen-xl mx-auto py-24 flex flex-col items-center gap-10 md:flex-row md:justify-center md:gap-16 px-6 md:px-0 md:items-stretch">
        {/* Email Section */}
        <div className="flex flex-col items-center text-center h-full">
          <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
            <MailIcon />
          </div>
          <h3 className="mt-6 font-semibold text-xl">Sähköposti</h3>
          <p className="mt-2 text-muted-foreground">daniel.sarpaneva@gmail.com</p>
        </div>

        {/* Location Section */}
        <div className="flex flex-col items-center text-center h-full">
          <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
            <MapPinIcon />
          </div>
          <h3 className="mt-6 font-semibold text-xl">Sijainti</h3>
          <p className="mt-2 text-muted-foreground">Espoo</p>
        </div>
      </div>
  </div>
);

export default YhteystiedotContent;