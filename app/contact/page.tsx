import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function About() {
  return (
    <div className="w-[45vh] bg-neutral-300/30 dark:bg-black/30 p-3 rounded-lg">
      <p className="text-xl font-semibold">
        Contact me
      </p>
      <p className="mb-3 text-sm text-neutral-700 dark:text-neutral-400 ">
        I&apos;ll get back to you as soon as possible!
      </p>
      <Label htmlFor="name">Name</Label>
      <Input id="name" className="w-full mb-2" type="name" placeholder="Name"/>
      <Label htmlFor="mail">Mail</Label>
      <Input id="mail" className="w-full mb-2" type="mail" placeholder="Mail"/>
      <Label htmlFor="message">Message</Label>
      <Textarea id="message" className="w-full mb-2" placeholder="Message"/>
      <Button className="mt-2 w-full">
        Send
      </Button>
    </div>
  );
}
