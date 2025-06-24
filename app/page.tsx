'use client'

import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Youtube, Instagram, Twitter, BadgeCheckIcon } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs"

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="max-w-md w-full space-y-8">
        
        {/* Breadcrumb Navigation */}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">X4 Card</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">...</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Brijraj Singh Bhati</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Profile */}
        <div className="text-center space-y-4">
          <Avatar className="w-20 h-20 mx-auto">
            <AvatarImage src="/X4.png" />
            <AvatarFallback>BS</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold">Brijraj Singh Bhati</h1>
            <p className="text-muted-foreground italic">
              Dreams in Code, Builds in Full Metal
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
              <Badge variant="outline">React</Badge>
              <Badge variant="outline">Next.js</Badge>
              <Badge variant="outline">Tailwind</Badge>
              <Badge variant="outline">HTML,CSS</Badge>
              <Badge variant="outline">Blender</Badge>
              <Badge variant="outline">Unreal 5</Badge>
              <Badge variant="secondary" className="bg-black text-white dark:bg-blue-600">
                <BadgeCheckIcon className="w-4 h-4 mr-1" />
                Uni Student
              </Badge>
              <Badge variant="secondary" className="bg-black text-white dark:bg-blue-600">
                <BadgeCheckIcon className="w-4 h-4 mr-1" />
                NMIMS
              </Badge>
              
            </div>
            <div className="flex justify-center gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.youtube.com/@laz4rd" target="_blank" rel="noreferrer">
                  <Youtube className="w-5 h-5" />
                  <span className="sr-only">YouTube</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.instagram.com/laz4rd.art/" target="_blank" rel="noreferrer">
                  <Instagram className="w-5 h-5" />
                  <span className="sr-only">Instagram</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://twitter.com/laz4rd" target="_blank" rel="noreferrer">
                  <Twitter className="w-5 h-5" />
                  <span className="sr-only">Twitter (X)</span>
                </a>
              </Button>
            </div>

        {/* Tabs */}
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="about">About Me</TabsTrigger>
            <TabsTrigger value="links">Links</TabsTrigger>
          </TabsList>
        

            <Separator />
          {/* About Me Tab */}
          <TabsContent value="about" className="space-y-4">
            <h1 className="scroll-m-20 text-left text-3xl font-bold tracking-tight text-balance">Innovator. Builder. Storyteller</h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              I am Brijraj Singh Bhati, currently studying Computer Science at NMIMS, Mumbai. I am a passionate creator and technologist, constantly exploring the intersection of innovation, design, and storytelling. With a deep interest in game development, wearable electronics, and content creation, I strive to push the boundaries of what's possible. My journey has been fueled by a desire to learn and grow, reflected in the diverse projects I've undertaken, from building immersive game worlds to crafting cutting-edge tech solutions. Through my work, I aim to inspire, connect, and contribute to the ever-evolving landscape of technology and creativity. 
            </p>
            <blockquote className="mt-6 border-l-2 pl-6 italic">
              I thrive on blending technology with storytelling to craft unique and innovative experiences.
            </blockquote>
            <h1 className="scroll-m-20 text-left text-3xl font-bold tracking-tight text-balance">What I Do</h1>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li><b>Code : </b>Building tools, apps, and experiences using web & mobile technologies.</li>
              <li><b>Art : </b>Creating digital visuals, illustrations, motion graphics, and 3D.</li>
              <li><b>Design : </b>Blending form and function into clean, usable interfaces and systems.</li>
              <li><b>Film : </b>Creating Films Ranging from Simple One Shots to Writing Complete Sagas</li>
            </ul>
            <h1 className="scroll-m-20 text-left text-3xl font-bold tracking-tight text-balance">Brands</h1>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <img src="/Rogue.png" className="w-24 sm:w-32 h-auto rounded" />
              <img src="/Rogue36.png" className="w-24 sm:w-32 h-auto rounded" />
              <img src="/Lumionix.png" className="w-24 sm:w-32 h-auto rounded" />
            </div>
          </TabsContent>

          {/* Links Tab */}
          <TabsContent value="links" className="space-y-4">
            {projects.map((project, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                  <CardAction>{project.tag}</CardAction>
                </CardHeader>
                <CardContent>
                  <p>{project.body}</p>
                </CardContent>
                <CardFooter>
                  <Drawer>
                    <DrawerTrigger className="w-full" asChild>
                      <Button>Visit</Button>
                    </DrawerTrigger>
                    <DrawerContent>
                      <DrawerHeader className="text-center">
                        {project.image && (
                          <Avatar className="w-20 h-20 mx-auto mb-2">
                            <AvatarImage src={project.image} />
                            <AvatarFallback>{project.fallback}</AvatarFallback>
                          </Avatar>
                        )}
                        <DrawerTitle>{project.drawerTitle}</DrawerTitle>
                        <DrawerDescription>{project.drawerDesc}</DrawerDescription>
                      </DrawerHeader>
                      <DrawerFooter>
                        <Button asChild>
                          <a href={project.link} target="_blank" rel="noreferrer">
                            Proceed
                          </a>
                        </Button>
                        <DrawerClose>
                          <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                      </DrawerFooter>
                    </DrawerContent>
                  </Drawer>
                </CardFooter>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

const projects = [
  {
    title: "X4 Creative",
    description: "Personal Portfolio",
    tag: "Webpage",
    body:
      "X4 is a personal space where I curate and showcase my work, serving as a comprehensive portfolio that highlights my creativity, technical skills, and innovative projects.",
    link: "https://x4creative.framer.website",
    image: "/X4.png",
    fallback: "X4",
    drawerTitle: "Proceed to X4",
    drawerDesc: "You will now visit X4 Creative.",
  },
  {
    title: "X4MD",
    description: "AI-Assisted Command Line Interface",
    tag: "Software",
    body:
      "X4MD is a lightweight AI-powered CLI written in Python, using Ollama’s Gemma 3B model to assist developers interactively.",
    link: "https://x4md.framer.website",
    image: "/X4MD.png",
    fallback: "X4MD",
    drawerTitle: "Proceed to X4MD",
    drawerDesc: "You will now visit X4MD Command Line.",
  },
  {
    title: "GPA Calculator",
    description: "Calculator For NMIMS Students",
    tag: "Tool",
    body:
      "The GPA Calculator App helps NMIMS students calculate the minimum TEE score needed based on ICA input for better academic planning.",
    link: "https://gpa-calculator-36.web.app/",
    image: "/GPA.png",
    fallback: "GPA",
    drawerTitle: "Launch GPA Tool",
    drawerDesc: "A simple GPA tool for NMIMS students.",
  },
]
