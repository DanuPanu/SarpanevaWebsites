import YhteystiedotContent from "@/components/contact-01/contact-01";
import YhteystiedotOtsikko from "@/components/contact-01/contact-otsikko";
import ContactForm from "@/components/contact-01/contactForm";

export default function Yhteystiedot() {
    return (
        <>
            <div className="bg-[#f8f5f0]">
                <YhteystiedotOtsikko />
                <YhteystiedotContent />
                <ContactForm />
            </div>

        </>
    )
}