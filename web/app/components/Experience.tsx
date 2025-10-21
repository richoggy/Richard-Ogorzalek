
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

function Experince() {
    return(
        <div className="flex flex-col gap-2">
        <h2 className="text-2xl">Experience</h2>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl">Work</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3">
            <div className=" flex flex-row gap-4">
            <div className="rounded-full bg-black h-4 w-4"  />
            <div className="flex flex-col">
              <p className="text-lg">Application Support Analyst</p>
              <p className="text-lg">Stark UK</p>
              <p className="text-m">April 2025 to Present</p>
            </div>
            </div>
            <div className="flex flex-row gap-4">
            <div className="rounded-full bg-black h-4 w-4" />
            <div className="flex flex-col">
              <p className="text-lg">Software Developer / Suppport</p>
              <p className="text-lg">OPM Group Ltd.</p>
              <p className="text-m">July 2024 to April 2025</p>
            </div>
            </div>
            <div className="flex flex-row gap-4">
            <div className="rounded-full bg-black h-2 w-2" />
            <div className="flex flex-col">
              <p className="text-lg">Final Year University</p>
              <p className="text-s">July 2023 to June 2024</p>
            </div>
            </div>
            <div className="flex flex-row gap-4">
            <div className="rounded-full bg-black h-4 w-4" />
            <div className="flex flex-col">
              <p className="text-lg">IT Techinican</p>
              <p className="text-lg">AETC Ltd.</p>
              <p className="text-m">June 2022 to July 2023</p>
            </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      </div>
    )
}

export {Experince}