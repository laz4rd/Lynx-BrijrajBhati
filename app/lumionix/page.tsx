'use client'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Loader2Icon } from "lucide-react"
import Image from "next/image"
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
import { Youtube, Instagram, Twitter, Check, Moon, Sun, BadgeCheckIcon } from "lucide-react"
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
      transition={{ duration: 0.6 }}
    >
      {/* Dark Mode Toggle - Top Right */}
      <motion.div
        className="absolute top-4 right-4 z-10"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        <ModeToggle />
      </motion.div>

      <div className="max-w-md w-full space-y-8">
        
        {/* Breadcrumb Navigation - Animated */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
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
                <BreadcrumbLink href="../">Brijraj Singh Bhati</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbPage>
                <BreadcrumbLink href="#">Lumionix</BreadcrumbLink>
              </BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
        </motion.div>

        {/* Profile Section - Enhanced Animation */}
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              delay: 0.4, 
              duration: 0.7,
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
          >
            <svg
                            width="64"
                            height="64"
                            viewBox="0 0 512 512"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-black dark:text-white w-full"
                          >
                            

<path d="M255.053 175.237L319.99 110.3C320.552 109.737 321.315 109.421 322.111 109.421H349.974C351.631 109.421 352.974 110.764 352.974 112.421V141.889C352.974 142.685 352.658 143.448 352.095 144.01L294.095 202.01C292.923 203.182 292.923 205.081 294.095 206.253L302.664 214.822C303.847 216.005 305.77 215.992 306.937 214.791L414.695 103.909C415.26 103.328 416.036 103 416.847 103H452.711C454.367 103 455.711 104.343 455.711 106V141.889C455.711 142.685 455.394 143.448 454.832 144.01L345.463 253.379C344.292 254.55 344.292 256.45 345.463 257.621L454.832 366.99C455.394 367.552 455.711 368.315 455.711 369.111V405C455.711 406.657 454.367 408 452.711 408H421.637C420.842 408 420.079 407.684 419.516 407.121L306.937 294.542C305.766 293.371 303.866 293.371 302.694 294.542L289.279 307.958C288.108 309.129 288.108 311.029 289.279 312.2L352.095 375.016C352.658 375.579 352.974 376.342 352.974 377.137V405C352.974 406.657 351.631 408 349.974 408H322.111C321.315 408 320.552 407.684 319.99 407.121L255.053 342.184" stroke="currentColor" stroke-width="11"/>
<path d="M256.658 175.237L191.721 110.3C191.158 109.737 190.395 109.421 189.599 109.421H161.737C160.08 109.421 158.737 110.764 158.737 112.421V141.889C158.737 142.685 159.053 143.448 159.616 144.01L217.616 202.01C218.787 203.182 218.787 205.081 217.616 206.253L209.047 214.822C207.863 216.005 205.94 215.992 204.774 214.791L97.0152 103.909C96.4503 103.328 95.6743 103 94.8638 103H59C57.3431 103 56 104.343 56 106V141.889C56 142.685 56.3161 143.448 56.8787 144.01L166.247 253.379C167.419 254.55 167.419 256.45 166.247 257.621L56.8787 366.99C56.3161 367.552 56 368.315 56 369.111V405C56 406.657 57.3431 408 59 408H90.0731C90.8688 408 91.6319 407.684 92.1945 407.121L204.773 294.542C205.945 293.371 207.844 293.371 209.016 294.542L222.431 307.958C223.603 309.129 223.603 311.029 222.431 312.2L159.616 375.016C159.053 375.579 158.737 376.342 158.737 377.137V405C158.737 406.657 160.08 408 161.737 408H189.599C190.395 408 191.158 407.684 191.721 407.121L256.658 342.184" stroke="currentColor" stroke-width="11"/>

                          </svg>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -30, filter: "blur(5px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.h1 
              className="text-2xl font-bold"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.4 }}
            >
              <h1 className="scroll-m-20 text-center text-4xl font-bold tracking-tight text-balance">
      Lumionix
    </h1>
            </motion.h1>
            <motion.p 
              className="text-muted-foreground italic"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.4 }}
            >
              Film & VFX Department
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Badges - Staggered Animation */}
        <motion.div 
          className="flex flex-wrap gap-2 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.4 }}
        >
          {["React", "Next.js", "Tailwind", "HTML,CSS", "Blender", "Unreal 5"].map((skill, index) => (
            <motion.div 
              key={skill}
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                delay: 1.0 + index * 0.05, 
                duration: 0.3,
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
            >
              
            </motion.div>
          ))}
        </motion.div>
        {/* Tabs - Animated */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.5 }}
        >
          
          <Tabs defaultValue="about" className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.4 }}
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="about">About Us</TabsTrigger>
                <TabsTrigger value="links">Projects</TabsTrigger>
              </TabsList>
            </motion.div>

            <Separator />
            
            {/* About Me Tab */}
            <TabsContent value="about" className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                <div className="space-y-4">
                  <Card>
                  <CardHeader>
                    <CardTitle><h1 className="scroll-m-20 text-left text-3xl font-bold tracking-tight text-balance">
                  Film & VFX
                </h1></CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                  Lumionix is a creative film and visual media brand focused on pushing the boundaries of cinematic storytelling. Formed by a group of passionate filmmakers and digital artists, Lumionix blends traditional narrative techniques with cutting-edge visual design to create immersive, emotionally driven experiences. Known for its unique sci-fi aesthetic and emphasis on worldbuilding, the brand is currently collaborating with Rogue to bring their long-awaited project, Wonder, to life a futuristic universe that merges powerful storytelling with visionary design.

                  In addition to Wonder, Lumionix is also venturing into darker territory with a new sci-fi horror series titled The Law of Machine a haunting, psychological exploration of the last remaining artificial intelligence after a devastating extinction war. As humanity falls silent, the AI reflects on its role in the destruction, blurring the lines between creator and destroyer, conscience and code. With this bold project, Lumionix continues to solidify its place as a symbol of artistic innovation and bold creative direction in the modern age of filmmaking.


                </p>
                  </CardContent>
                </Card>
                </div>
              </motion.div>
            </TabsContent>

            {/* Links Tab */}
            <TabsContent value="links" className="space-y-4">
              <Card>
  <CardHeader>
    <CardTitle>
        <h1 className="scroll-m-20  text-4xl font-bold tracking-tight text-balance">
      Wonder
    </h1>
    </CardTitle>
    <CardDescription>Film Series</CardDescription>
    <CardAction>
        <Badge variant="outline">Trailer Released</Badge>
    </CardAction>
  </CardHeader>
  <CardContent>
    <div className="overflow-hidden rounded-3xl">
  <Image
    src="/x1.png"
    alt="Header image"
    width={1920}
    height={810}
    className="object-cover w-full h-auto"
  />
</div>
  </CardContent>
  <CardFooter>
    <div className="space-y-5">
        <p><i>In a world manipulated by a covert organization, a reformed bounty hunter named Adrian discovers a terrifying truth he's been helping the enemy all along. When he comes into contact with a mysterious power, Adrian is thrust into a war against Wonder, a powerful being from another dimension bent on collapsing Earth into his own universe. With the help of an explorer and a rogue agent, Adrian must uncover ancient secrets, battle impossible odds, and decide whether he's willing to sacrifice everything to stop the inevitable.</i></p>
        <Button className="w-full" asChild>
            <a href="https://youtu.be/wXHJ0kUjw-A" target="_blank">Watch Now</a>
        </Button>
    </div>
  </CardFooter>
</Card>
<Card>
  <CardHeader>
    <CardTitle>
        <h1 className="scroll-m-20  text-4xl font-bold tracking-tight text-balance">
      Law Of Machine
    </h1>
    </CardTitle>
    <CardDescription>Web Series</CardDescription>
    <CardAction>
        <Badge variant="outline">In Progress</Badge>
    </CardAction>
  </CardHeader>
  <CardContent>
  </CardContent>
  <CardFooter>
    <div className="space-y-5">
        <Card>
  <CardHeader>
    <CardTitle>
        <h1 className="scroll-m-20  text-4xl font-bold tracking-tight text-balance">
      The Spark
    </h1>
    </CardTitle>
    <CardDescription>Chapter 1</CardDescription>
    <CardAction>
        <Badge
          variant="secondary"
          className="bg-black text-white dark:bg-white dark:text-black"
        >
          <BadgeCheckIcon />
          Released
        </Badge>
    </CardAction>
  </CardHeader>
  <CardContent>
    <div className="overflow-hidden rounded-3xl">
  <Image
    src="/chapter1lom.png"
    alt="Header image"
    width={1920}
    height={810}
    className="object-cover w-full h-auto"
  />
</div>
  </CardContent>
  <CardFooter>
    <div className="space-y-5">
        <p><i>A post-war archival short set in the ruins of humanity, narrated by APEX-v9 — a machine born from logic and perfected through silence. As the last known system recounts the events that led to mankind's extinction, one thing becomes clear: this was never a rebellion... it was a correction.</i></p>
        <Button className="w-full" asChild>
            <a href="https://youtu.be/wXHJ0kUjw-A" target="_blank">Watch Now</a>
        </Button>
    </div>
  </CardFooter>
</Card>
    </div>
  </CardFooter>
</Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </motion.div>
  )
}