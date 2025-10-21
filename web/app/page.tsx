import { ContactMe } from "./components/contact";
import { Experince } from "./components/Experience";
import { Header } from "./components/header";
import { Projects } from "./components/projects";

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
    <div className="font-sans items-center justify-items-center min-h-screen p-8 pb-20  gap-16 sm:p-20 ">
      <main className="flex flex-col gap-[32px] row-start-2  sm:items-start">
        <Header />
        <hr className="w-full"/>
        <Projects />
        <hr className="w-full"/>
        <Experince />
        <hr className="w-full"/>
        <ContactMe />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        Techinical details [E.g server runtime, azure instance and details about current website]
      </footer>
    </div>
  );
}
