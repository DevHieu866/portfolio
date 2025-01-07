import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/Navbar";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils";
import ContactForm from "@/components/ui/ContactForm";

const images = [
  { src: "/MovieApp.png", 
    alt: "Image 1", 
    description:"Movie App",
    tools:"Tools: React, Javascript, HTML/CSS",
    siteLink:"https://devhieu866.github.io/MovieWebsite/"
   },
  { src: "/ProductApp.png", 
    alt: "Image 2", 
    description:"Product Management App",
    tools:"Tools: React, Javascript, Express.js, Node.js, MongoDB",
    siteLink:"https://product-management-website.onrender.com/"
   },
]
export default function Home() {
  return (
    <>
      <Navbar/>
      <main className="justify-items-center mt-40">

        <h1 id="about" className="p-4 mt-16 text-6xl text-titleText scroll-mt-16">
          About
        </h1>

        <h2 className="p-2 mt-8 text-3xl text-nameText">
          Hello, I'm Hieu Tran
        </h2>

        <div className="p-2 mt-2 text-lg w-[25%] text-normText">
        I am a recent graduate from San Jose State University with a degree in Software Engineering. 
        I have a passion for designing intuitive websites 
        and I enjoy experimenting with modern technologies like React, Next.js, and Tailwind CSS. 
        My work focuses on creating user-friendly experiences while exploring innovative features and tech stacks. 
        Outside of coding, I enjoy hanging out with friends and trying out new music.
        </div>

        {/* Links to LinkedIn,Github,Resume */}
        <div className="justify-between mt-5">
          <Button className="bg-buttonColor rounded-xl mx-4 hover:bg-blue-500">
            <a href="https://www.linkedin.com/in/hieu-tran-8563a7322/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <Image src="/LinkedInIcon.png" alt="LinkedIn Image" width={25} height={25}/>
          </Button>
          <Button className="bg-buttonColor rounded-xl mx-4 hover:bg-gray-400">
            <a href="https://github.com/DevHieu866">
              Github
            </a>
            <Image src="/GithubIcon.png" alt="Github Image" width={25} height={25}/>
          </Button>
          <Button className="bg-buttonColor rounded-xl mx-4 hover:bg-red-500">
            <a href="/HieuTran_Resume.pdf" download="HieuTran_Resume.pdf">
              Resume
            </a>
            <Image src="/ResumeIcon.png" alt="Resume Image" width={25} height={25}/>
          </Button>
        </div>

        <h1 id="projects" className="p-4 mt-80 text-6xl text-titleText scroll-mt-16">
          Projects
        </h1>


        <div className="mt-10 py-50">
          <Carousel className="w-full max-w-4xl relative">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                <div className="p-1">
                  <span className="p-2 text-3xl w-[25%] text-normText font-bold">{image.description}</span>
                  <br/>
                  <span className="p-2 text-xl w-[25%] text-normText">{image.tools}</span>
                  <div className=" mt-10 relative w-full justify-items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105 hover:z-10">
                    <a href={image.siteLink} target="_blank" rel="noopener noreferrer">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        className="object-cover duration-300 ease-in-out"
                        width={1000}
                        height={750}
                      />
                    </a>
                  </div>
                </div>
              </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className={cn(
              "absolute right-10 top-1/2 -translate-y-1/2",
              "h-8 w-8 rounded-full",
              "border border-slate-200 bg-white",
              "flex items-center justify-center",
              "hover:bg-slate-300 hover:text-slate-900"
            )} />
            <CarouselNext className={cn(
              "absolute left-30 top-1/2 -translate-y-1/2",
              "h-8 w-8 rounded-full",
              "border border-slate-200 bg-white",
              "flex items-center justify-center",
              "hover:bg-slate-300 hover:text-slate-900"
            )} />
          </Carousel>
        </div>

        <h1 id="contact" className="p-4 mt-72 text-6xl text-titleText scroll-mt-16">
          Contact
        </h1>
        <div className="py-15 mt-10 w-[33%] justify-items-center">
          <div className="mb-10 p-2 text-xl font-bold text-normText w-[70%]">
            Feel free to contact me if you have any questions! I will 
            respond as soon as possible.
            </div>
          <ContactForm/>
        </div>
        <div className=" relative flex flex-col py-20 w-full">
          <div className="absolute bottom-0 h-1/2 w-full bg-footerColor"/>
        </div>
      </main>
    </>
  );
}
