'use client'
import { motion } from "framer-motion"
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Youtube, Instagram, Twitter, BadgeCheckIcon, Moon, Sun } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs"
import { useTheme } from "next-themes"

function ModeToggle() {
  const { setTheme } = useTheme()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default function HomePage() {
  return (
    <motion.div 
      className="min-h-screen flex items-center justify-center px-4 py-8 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Dark Mode Toggle - Top Right */}
      <motion.div
        className="absolute top-4 right-4 z-10"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <ModeToggle />
      </motion.div>

      <div className="max-w-md w-full space-y-8">
        
        {/* Breadcrumb Navigation - Animated */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
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
        </motion.div>

        {/* Profile Section - Enhanced Animation */}
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              delay: 0.6, 
              duration: 0.8,
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
          >
            <Avatar className="w-20 h-20 mx-auto">
              <AvatarImage src="/X4.png" />
              <AvatarFallback>BS</AvatarFallback>
            </Avatar>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            <motion.h1 
              className="text-2xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              Brijraj Singh Bhati
            </motion.h1>
            <motion.p 
              className="text-muted-foreground italic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              Dreams in Code, Builds in Full Metal
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Badges - Staggered Animation */}
        <motion.div 
          className="flex flex-wrap gap-2 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          {["React", "Next.js", "Tailwind", "HTML,CSS", "Blender", "Unreal 5"].map((skill, index) => (
            <motion.div 
              key={skill}
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                delay: 1.5 + index * 0.08, 
                duration: 0.4,
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
            >
              <Badge variant="outline">{skill}</Badge>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              delay: 1.98, 
              duration: 0.4,
              type: "spring",
              stiffness: 300,
              damping: 20
            }}
          >
            <Badge variant="secondary" className="bg-black text-white dark:bg-white text-black">
              <BadgeCheckIcon className="w-4 h-4 mr-1" />
              Uni Student
            </Badge>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              delay: 2.06, 
              duration: 0.4,
              type: "spring",
              stiffness: 300,
              damping: 20
            }}
          >
            <Badge variant="secondary" className="bg-black text-white dark:bg-white text-black">
              <BadgeCheckIcon className="w-4 h-4 mr-1" />
              NMIMS
            </Badge>
          </motion.div>
        </motion.div>

        {/* Social Links - Animated */}
        <motion.div 
          className="flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.6 }}
        >
          {[
            { href: "https://www.youtube.com/@laz4rd", icon: Youtube, label: "YouTube" },
            { href: "https://www.instagram.com/laz4rd.art/", icon: Instagram, label: "Instagram" },
            { href: "https://twitter.com/laz4rd", icon: Twitter, label: "Twitter (X)" }
          ].map((social, index) => (
            <motion.div 
              key={social.label}
              initial={{ opacity: 0, scale: 0, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ 
                delay: 2.3 + index * 0.1, 
                duration: 0.5,
                type: "spring",
                stiffness: 200,
                damping: 15
              }}
            >
              <Button variant="ghost" size="icon" asChild>
                <a href={social.href} target="_blank" rel="noreferrer">
                  <social.icon className="w-5 h-5" />
                  <span className="sr-only">{social.label}</span>
                </a>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Tabs - Animated */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.8 }}
        >
          <Tabs defaultValue="about" className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.8, duration: 0.6 }}
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="about">About Me</TabsTrigger>
                <TabsTrigger value="links">Links</TabsTrigger>
              </TabsList>
            </motion.div>

            <Separator />
            
            {/* About Me Tab */}
            <TabsContent value="about" className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.0, duration: 0.8 }}
              >
                <h1 className="scroll-m-20 text-left text-3xl font-bold tracking-tight text-balance">
                  Innovator. Builder. Storyteller
                </h1>
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
              </motion.div>
            </TabsContent>

            {/* Links Tab */}
            <TabsContent value="links" className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  >
                    <Card>
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
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </motion.div>
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
      "X4MD is a lightweight AI-powered CLI written in Python, using Ollama's Gemma 3B model to assist developers interactively.",
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