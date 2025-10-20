import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { Github } from "lucide-react";
import Image from "next/image";

//goal:
/**
 * - Create simple home page which shows:
 * Me
 * Projects / Upcoming projects
 * Education / Experince
 * Contact form 
 * 
 * Once developed, publish under 'http://richard.ogorzalek.net'
 * 
 * Create landing page for ogorzalek.net
 * with: 'This domain is subbed! For the developer go to Richard.Ogorzalek.net or if you've been provided a link go to there!
 * 
 * 
 * Upcoming projects: //All Below with login and with demo
 * Digital Cards (A Card which allows you to gift ideas, such as a calendar invite, or multiple meals)
 *  URL: dc.ogorzalek.net or demo.ogorzalek.net/digital-cards
 * Home Dashboard (Including Weather, smart home devices, usage and device staticis such as charge and location)
 *  URL: home.ogorzalek.net or demo.ogorzalek.net/home-dashboard
 * Libre Linkup connection API (Connect to the Librelink using credidentials and display data internally)
 *  URL: ll.ogorzalek.net or demo.ogorzalek.net/libre-linkup
 * Easy Fiance (A Finance app which makes it easy to manage, and organise, possible connection to banks?)
 *  URL: finance.ogorzalek.net or demo.ogorzalek.net/easy-finance
 */
export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl p-0">Richard Ogorzalek</h1>
        <p className="text-m">Application Support Analyst</p>
        <hr className="w-full"/>
      <h2 className="text-2xl">Projects</h2>
      <div className="flex flex-row flex-wrap gap-3">
      <Card className="w-full max-w-sm">
        <CardTitle className="p-2 pb-0 pt-0 flex w-full  justify-between">
          <p className="p-2">Demo</p>
          <div className="bg-green-200 max-w-[200px] p-2">Live</div>
        </CardTitle>
        <CardDescription className="p-4 pb-0 pt-0">
          This site hosts the demostrations for the projects. Go here to find a collected view of them all.
        </CardDescription>
        <CardFooter className="p-4 pt-0">
          <Github/> Github/Richard-Ogorzalek-demo
        </CardFooter>
      </Card>
      <Card className="w-full max-w-sm">
        <CardTitle className="p-2 pb-0 pt-0 flex w-full  justify-between">
          <p className="p-2">Easy Finance</p>
          <div className="bg-red-200 max-w-[200px] p-2">Upcoming project</div>
        </CardTitle>
        <CardDescription className="p-4 pb-0 pt-0">
          This site will allow you to easily manage your finance.
        </CardDescription>
        <CardFooter className="p-4 pt-0">
          <Github/> Github/Easy-Finance
        </CardFooter>
      </Card>
      <Card className="w-full max-w-sm">
        <CardTitle className="p-2 pb-0 pt-0 flex w-full  justify-between">
          <p className="p-2">Home Dashboard</p>
          <div className="bg-red-200 max-w-[200px] p-2">Upcoming Project</div>
        </CardTitle>
        <CardDescription className="p-4 pb-0 pt-0">
          Your house full of IOT? An easy and modern way to manage this, bringing your life into one place.
        </CardDescription>
        <CardFooter className="p-4 pt-0">
          <Github/> Github/Home-Dashboard
        </CardFooter>
      </Card>
      <Card className="w-full max-w-sm">
        <CardTitle className="p-2 pb-0 pt-0 flex w-full  justify-between">
          <p className="p-2">Wedding Invitation</p>
          <div className="bg-amber-200 max-w-[200px] p-2">In Development</div>
        </CardTitle>
        <CardDescription className="p-4 pb-0 pt-0">
          A way to customise, and truly make your wedding invitation yours, and what better then using this site to allow guests to upload photos of your speical day.
        </CardDescription>
        <CardFooter className="p-4 pt-0">
          <Github/> Github/Wedding-Solution
        </CardFooter>
      </Card>
      </div>
      <hr className="w-full"/>
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
      <p>------------</p>
      <h2>Contact</h2>
      <p>Form</p>
      </main>
      
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        Techinical details [E.g server runtime, azure instance and details about current website]
      </footer>
    </div>
  );
}
