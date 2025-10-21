import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"


function ContactMe(){
    return(
        <div>
            <h2 className="text-2xl">Contact me!</h2>
            <div className="p-6 flex flex-col gap-4 w-screen  justify-evenly h-[50vh]">
                <div className="flex flex-col gap-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input className="w-[50%]" id='name' placeholder="John Doe"></Input>
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="email">Your Email</Label>
                    <Input className="w-[50%]" id='email' placeholder="john.doe@example.com"></Input>
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="text">Your Message</Label>
                    <Textarea className="w-[50%]"  id='text' placeholder="Your message here."></Textarea>
                </div>
                <div className="w-[50%] flex flex-row justify-end">

                    <Button className="w-[25%]" variant="outline">Submit</Button>
                </div>
                
            </div>
        </div>
    )
}

export {ContactMe}