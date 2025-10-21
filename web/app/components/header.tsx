import { Github, Link, Linkedin } from "lucide-react"


function Header(){
    return (
        <div className="flex flex-col gap-2 h-[50vh] bg-linear-to-br from-green-400 to-green-900 w-[80%] p-8 border rounded-4xl rounded-br-full">
            <div className="text-6xl flex flex-row flex-wrap gap-2">
            <span>Richard</span>
            <span>Ogorzalek</span>
            </div>
            <p className="text-xl">Application Support Analyst</p>
            <div className="flex flex-row gap-2 text-m">
            <Github />
            <p>RichardOggy</p>
            </div>
            <div className="flex flex-row gap-2">
            <Link />
            <p>Richard.Ogorzalek.net</p>
            </div>
            <div className="flex flex-row gap-2">
            <Linkedin />
            <p>RichardOggy</p>
            </div>
        </div>
    )
}

export {Header}