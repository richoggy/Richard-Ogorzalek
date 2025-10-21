
import { Card, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { Github } from "lucide-react";

function Projects() {
    return(
        <div className="flex flex-col gap-2">
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
      </div>
    )
}

export {Projects}