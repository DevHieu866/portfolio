'use client'
import Form from "next/form";
import { Button } from "./button";
import { useToast } from "@/hooks/use-toast";

export default function ContactForm(){
  const { toast } = useToast()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const emailApiKey = process.env.EMAIL_API_KEY;
    formData.append("access_key","emailApiKey")
    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)
    const data = Object.fromEntries(formData.entries());
    console.log(data)

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    });
    const result = await response.json();
    if (result.success) {
        console.log(result);
        return(
          toast({
            description: "Your message has been received."
          })
        )
    }
  }
  return (
    <Form action="" onSubmit={handleSubmit} className="flex flex-col gap-4 w-[70%] self-center">
        <input className="p-2" type="text" id="name" name="name" placeholder="Name" required/>
        <input className="p-2" type="email" id="name" name="email" placeholder="Email" required/>
        <textarea className="p-2" id="name" name="message" placeholder="Message" rows={5} cols={50} required/>
        <Button type="submit" className="p-2 bg-footerColor hover:bg-green-400 rounded-xl w-1/3 self-end">Submit</Button>
    </Form>  
  )
}