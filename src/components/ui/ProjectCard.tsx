'use client'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { Globe, ExternalLink } from 'lucide-react'

interface ProjectComponentProps {
    title: string
    description: string
    githubUrl: string
    websiteUrl?: string
    imageUrl: string
  }

const ProjectCard = ({ title, description, githubUrl, websiteUrl, imageUrl }: ProjectComponentProps) => {
  return (
        <Card className="w-[1000px] h-[600px] flex flex-col bg-amber-50">

            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>

            <CardContent className="flex justify-center">
                <img src={imageUrl || "/placeholder.svg"} alt={title} className="w=[1000px] h-[400px] rounded-xl"/>
            </CardContent>

            <CardFooter className="flex space-x-4">
                <Button className="bg-buttonColor rounded-xl hover:bg-gray-400" onClick={() => window.open(githubUrl, '_blank')}>
                <ExternalLink className="mr-2 h-4 w-4" /> Source
                </Button>
                {websiteUrl &&(
                    <Button className="bg-buttonColor rounded-xl hover:bg-green-500" onClick={() => window.open(websiteUrl, '_blank')}>
                    <Globe className="mr-2 h-4 w-4" /> Website
                    </Button>
                )}
            </CardFooter>

        </Card>

  )
}

export default ProjectCard
