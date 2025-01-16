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
import ProjectCard from "@/components/ui/ProjectCard";

const images = [
  {
    title: "Product Management App",
    description: "MERN stack application that allow user to perform CRUD operations in order to track product inventory.",
    githubUrl: "https://github.com/DevHieu866/product-management-website",
    websiteUrl: "https://product-management-website.onrender.com/",
    imageUrl: "/ProductApp.png"
  },
  {
    title: "Movie App",
    description: "App built with React which displays movies. Contains dynamic features such as search and favoriting movies.",
    githubUrl: "https://github.com/DevHieu866/MovieWebsite",
    websiteUrl: "https://devhieu866.github.io/MovieWebsite/",
    imageUrl: "/MovieApp.png"
  },
  {
    title: "BRAF Predictor",
    description: "Used Python to scrape and clean data of molecular structures. Trained an SVR model with data to predict small molecule inhibitors.",
    githubUrl: "https://github.com/DevHieu866/braf_predictions",
    imageUrl: "/Braf.png"
  }
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
            <a href="/Hieu Tran CV.pdf" download="Hieu Tran CV.pdf">
              Resume
            </a>
            <Image src="/ResumeIcon.png" alt="Resume Image" width={25} height={25}/>
          </Button>
        </div>

        <h1 id="projects" className="p-4 mt-80 text-6xl text-titleText scroll-mt-16">
          Projects
        </h1>


        <div className="mt-10 py-50 w-full h-full justify-items-center">
          <Carousel>
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="justify-items-center">
                    <ProjectCard {...image}/>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className={cn(
              "absolute left-1/4 top-1/2 -translate-y-1/2",
              "h-8 w-8 rounded-full",
              "border border-slate-200 bg-white",
              "flex items-center justify-center",
              "hover:bg-slate-300 hover:text-slate-900"
            )} />
            <CarouselNext className={cn(
              "absolute right-1/4 top-1/2 -translate-y-1/2",
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
