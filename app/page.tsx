'use client'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { GitHubContributionsChart } from "@/components/github-chart"
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
import { Youtube, Instagram, Twitter, Check, Moon, Sun } from "lucide-react"
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
              <BreadcrumbPage>
                <BreadcrumbLink href="#">Brijraj Singh Bhati</BreadcrumbLink>
              </BreadcrumbPage>
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
            <Badge variant="secondary" className="bg-black text-white dark:bg-white dark:text-black">
              <Check className="w-4 h-4 mr-1" />
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
            <Badge variant="secondary" className="bg-black text-white dark:bg-white dark:text-black">
              <Check className="w-4 h-4 mr-1" />
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
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="space-y-4">
                  <Card>
                  <CardHeader>
                    <CardTitle><h1 className="scroll-m-20 text-left text-3xl font-bold tracking-tight text-balance">
                  Innovator. Builder. Storyteller
                </h1></CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                  I am Brijraj Singh Bhati, currently studying Computer Science at NMIMS, Mumbai. I am a passionate creator and technologist, constantly exploring the intersection of innovation, design, and storytelling. With a deep interest in game development, wearable electronics, and content creation, I strive to push the boundaries of what's possible. My journey has been fueled by a desire to learn and grow, reflected in the diverse projects I've undertaken, from building immersive game worlds to crafting cutting-edge tech solutions. Through my work, I aim to inspire, connect, and contribute to the ever-evolving landscape of technology and creativity. 
                </p>
                  </CardContent>
                  <CardFooter>
                    <blockquote className="mt-6 border-l-2 pl-6 italic">
                  I thrive on blending technology with storytelling to craft unique and innovative experiences.
                </blockquote>
                  </CardFooter>
                </Card>
                <GitHubContributionsChart />
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <h1 className="scroll-m-20 text-left text-3xl font-bold tracking-tight text-balance">What I Do</h1>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                  <li><b>Code : </b>Building tools, apps, and experiences using web & mobile technologies.</li>
                  <li><b>Art : </b>Creating digital visuals, illustrations, motion graphics, and 3D.</li>
                  <li><b>Design : </b>Blending form and function into clean, usable interfaces and systems.</li>
                  <li><b>Film : </b>Creating Films Ranging from Simple One Shots to Writing Complete Sagas</li>
                </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <h1 className="scroll-m-20 text-left text-3xl font-bold tracking-tight text-balance">Brands</h1>
                    </CardTitle>
                    <CardDescription>Tailored For The Best</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Rogue</CardTitle>
                        <CardDescription>Game Development</CardDescription>
                        <CardAction>
                          <svg
    width="60"
    height="60"
    viewBox="0 0 404 308"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-black dark:text-white"
  >
    <path d="M151.916 6H115.429C110.719 6 106.445 8.75484 104.5 13.0439L8.49492 224.748C4.89231 232.692 10.7008 241.704 19.4237 241.704H53.4487C58.1166 241.704 62.3608 238.997 64.3294 234.764L162.796 23.0608C166.496 15.1063 160.688 6 151.916 6Z" stroke="currentColor" strokeWidth="11" />
    <path d="M324.582 6H288.096C283.386 6 279.112 8.75484 277.167 13.0439L181.162 224.748C177.559 232.692 183.367 241.704 192.09 241.704H226.115C230.783 241.704 235.028 238.997 236.996 234.764L335.463 23.0608C339.163 15.1063 333.355 6 324.582 6Z" stroke="currentColor" strokeWidth="11" />
    <path d="M384.879 66.2963H348.392C343.682 66.2963 339.408 69.0511 337.463 73.3402L241.458 285.044C237.855 292.988 243.664 302 252.387 302H286.412C291.08 302 295.324 299.293 297.292 295.061L395.759 83.3571C399.459 75.4026 393.651 66.2963 384.879 66.2963Z" stroke="currentColor" strokeWidth="11" />
    <path d="M214.953 66.2963H178.466C173.756 66.2963 169.482 69.0511 167.537 73.3402L71.532 285.044C67.9294 292.988 73.7378 302 82.4607 302H116.486C121.154 302 125.398 299.293 127.366 295.061L225.833 83.3571C229.533 75.4026 223.725 66.2963 214.953 66.2963Z" stroke="currentColor" strokeWidth="11" />
  </svg>
                        </CardAction>

                      </CardHeader>
                      <CardContent>
                        <p>An indie game development team founded in 2022, has steadily grown into a creative force known for its bold storytelling and immersive sci-fi experiences. Built by a group of passionate developers and visionaries, Rogue has always aimed to push the boundaries of traditional gameplay.</p>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" asChild>
                          <a href="https://rogue36.web.app" target="_blank" rel="noreferrer">Visit Site</a>
                        </Button>
                      </CardFooter>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Lumionix</CardTitle>
                        <CardDescription>Film & VFX</CardDescription>
                        <CardAction>
                          <svg
                            width="64"
                            height="64"
                            viewBox="0 0 512 512"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-black dark:text-white"
                          >
                            

<path d="M255.053 175.237L319.99 110.3C320.552 109.737 321.315 109.421 322.111 109.421H349.974C351.631 109.421 352.974 110.764 352.974 112.421V141.889C352.974 142.685 352.658 143.448 352.095 144.01L294.095 202.01C292.923 203.182 292.923 205.081 294.095 206.253L302.664 214.822C303.847 216.005 305.77 215.992 306.937 214.791L414.695 103.909C415.26 103.328 416.036 103 416.847 103H452.711C454.367 103 455.711 104.343 455.711 106V141.889C455.711 142.685 455.394 143.448 454.832 144.01L345.463 253.379C344.292 254.55 344.292 256.45 345.463 257.621L454.832 366.99C455.394 367.552 455.711 368.315 455.711 369.111V405C455.711 406.657 454.367 408 452.711 408H421.637C420.842 408 420.079 407.684 419.516 407.121L306.937 294.542C305.766 293.371 303.866 293.371 302.694 294.542L289.279 307.958C288.108 309.129 288.108 311.029 289.279 312.2L352.095 375.016C352.658 375.579 352.974 376.342 352.974 377.137V405C352.974 406.657 351.631 408 349.974 408H322.111C321.315 408 320.552 407.684 319.99 407.121L255.053 342.184" stroke="currentColor" stroke-width="11"/>
<path d="M256.658 175.237L191.721 110.3C191.158 109.737 190.395 109.421 189.599 109.421H161.737C160.08 109.421 158.737 110.764 158.737 112.421V141.889C158.737 142.685 159.053 143.448 159.616 144.01L217.616 202.01C218.787 203.182 218.787 205.081 217.616 206.253L209.047 214.822C207.863 216.005 205.94 215.992 204.774 214.791L97.0152 103.909C96.4503 103.328 95.6743 103 94.8638 103H59C57.3431 103 56 104.343 56 106V141.889C56 142.685 56.3161 143.448 56.8787 144.01L166.247 253.379C167.419 254.55 167.419 256.45 166.247 257.621L56.8787 366.99C56.3161 367.552 56 368.315 56 369.111V405C56 406.657 57.3431 408 59 408H90.0731C90.8688 408 91.6319 407.684 92.1945 407.121L204.773 294.542C205.945 293.371 207.844 293.371 209.016 294.542L222.431 307.958C223.603 309.129 223.603 311.029 222.431 312.2L159.616 375.016C159.053 375.579 158.737 376.342 158.737 377.137V405C158.737 406.657 160.08 408 161.737 408H189.599C190.395 408 191.158 407.684 191.721 407.121L256.658 342.184" stroke="currentColor" stroke-width="11"/>

                          </svg>
                        </CardAction>

                      </CardHeader>
                      <CardContent>
                        <p>Lumionix is a creative film and visual media brand focused on pushing the boundaries of cinematic storytelling. Formed by a group of passionate filmmakers and digital artists, Lumionix blends traditional narrative techniques with cutting-edge visual design to create immersive, emotionally driven experiences.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" asChild>
                          <a href="https://rogue36.web.app" target="_blank" rel="noreferrer">Visit Site</a>
                        </Button>
                      </CardFooter>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Rogue [36]</CardTitle>
                        <CardDescription>Web & App Development</CardDescription>
                        <CardAction>
                          <svg
    width="60" // adjust as needed
    height="60"
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_3_28)">

<path d="M76.4283 137.185C71.3789 132.112 63.1922 132.112 58.1428 137.185C53.0934 142.257 53.0934 150.481 58.1428 155.554L199.657 297.716C204.706 302.788 212.893 302.788 217.942 297.716C222.992 292.643 222.992 284.419 217.942 279.347L76.4283 137.185Z" fill="currentColor"/>
<path d="M312.197 137.185C307.148 132.112 298.961 132.112 293.912 137.185C288.862 142.257 288.862 150.481 293.912 155.554L435.426 297.716C440.475 302.788 448.662 302.788 453.711 297.716C458.761 292.643 458.761 284.419 453.711 279.347L312.197 137.185Z" fill="currentColor"/>
<path d="M58.1438 279.347C53.0944 284.419 53.0943 292.644 58.1437 297.716C63.1931 302.789 71.3799 302.789 76.4293 297.716L217.943 155.554C222.993 150.482 222.993 142.257 217.943 137.185C212.894 132.112 204.707 132.112 199.658 137.185L58.1438 279.347Z" fill="currentColor"/>
<path d="M293.911 279.347C288.862 284.419 288.862 292.644 293.911 297.716C298.961 302.789 307.147 302.789 312.197 297.716L453.711 155.554C458.76 150.482 458.76 142.257 453.711 137.185C448.661 132.112 440.475 132.112 435.425 137.185L293.911 279.347Z" fill="currentColor"/>
<path d="M418.7 342.606C418.7 354.136 411.808 365.486 398.633 375.654C385.46 385.823 366.412 394.494 343.175 400.898C319.937 407.303 293.23 411.246 265.42 412.377C237.607 413.506 209.549 411.789 183.73 407.376C157.911 402.966 135.128 395.995 117.399 387.083C99.6703 378.169 87.5426 367.591 82.0904 356.283C76.6384 344.974 78.0303 333.288 86.1427 322.254C94.2549 311.222 108.838 301.184 128.599 293.032L148.814 301.372C132.377 308.153 120.248 316.501 113.5 325.678C106.753 334.854 105.595 344.576 110.13 353.981C114.665 363.389 124.752 372.186 139.499 379.599C154.245 387.013 173.195 392.81 194.671 396.48C216.146 400.15 239.484 401.578 262.616 400.639C285.749 399.698 307.963 396.419 327.291 391.091C346.619 385.764 362.463 378.553 373.42 370.094C384.377 361.638 390.11 352.195 390.11 342.606H418.7Z" fill="currentColor"/>
<path d="M369.809 343.2C369.809 351.342 364.939 359.358 355.632 366.54C346.325 373.721 332.866 379.844 316.45 384.368C300.034 388.891 281.165 391.675 261.516 392.474C241.867 393.272 222.044 392.058 203.803 388.942C185.562 385.827 169.466 380.904 156.94 374.61C144.415 368.316 135.847 360.846 131.995 352.859C128.143 344.873 129.126 336.619 134.858 328.828C140.589 321.036 150.892 313.947 164.853 308.19L179.135 314.08C167.522 318.869 158.953 324.765 154.186 331.246C149.419 337.726 148.601 344.592 151.805 351.235C155.009 357.877 162.135 364.09 172.554 369.326C182.972 374.56 196.36 378.656 211.532 381.246C226.705 383.839 243.193 384.847 259.537 384.183C275.88 383.52 291.574 381.205 305.229 377.442C318.883 373.679 330.076 368.585 337.818 362.612C345.56 356.639 349.609 349.973 349.609 343.2H369.809Z" fill="currentColor"/>
</g>
    <defs>
      <clipPath id="clip0">
        <rect width="512" height="512" rx="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
                        </CardAction>

                      </CardHeader>
                      <CardContent>
                        <p>Rogue [36] is a dynamic subbrand of Rogue, dedicated to crafting innovative web and app experiences that are as useful as they are enjoyable. Focused on modern digital solutions, Rogue [36] blends functionality with playful creativity to develop products that not only solve real-world problems but also engage users in meaningful ways.</p>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" asChild>
                          <a href="https://roguestudios.web.app/" target="_blank" rel="noreferrer">Visit Site</a>
                        </Button>
                      </CardFooter>
                    </Card>
                    </div>
                  </CardContent>
                  <CardFooter>
                  </CardFooter>
                </Card>
                </div>
              </motion.div>
            </TabsContent>

            {/* Links Tab */}
            <TabsContent value="links" className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
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