import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Welcome to SAIL - Salem Steel Plant
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Producing world-class stainless steel products with cutting-edge technology and sustainable
                    practices.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/login">Get Started</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/about">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 flex items-center justify-center">
                <div className="relative w-64 h-64 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                  <Image
                    src="/images/sail-logo.png"
                    alt="SAIL Logo"
                    width={200}
                    height={200}
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Capabilities</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  SAIL Salem Steel Plant is equipped with state-of-the-art facilities for producing high-quality
                  stainless steel.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
              {[
                {
                  title: "Advanced Technology",
                  description: "Utilizing cutting-edge technology for precision manufacturing and quality control.",
                },
                {
                  title: "Sustainable Production",
                  description: "Committed to environmentally friendly practices and sustainable steel production.",
                },
                {
                  title: "Quality Assurance",
                  description: "Rigorous testing and quality control measures to ensure world-class products.",
                },
              ].map((feature, index) => (
                <div key={index} className="flex flex-col items-center space-y-2 border p-6 rounded-lg">
                  <div className="p-2 bg-blue-100 rounded-full dark:bg-blue-900">
                    <div className="w-10 h-10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">{index + 1}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-center">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="mx-auto lg:mx-0 relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=720&width=1280"
                  alt="SAIL Salem Steel Plant Facilities"
                  width={1280}
                  height={720}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    About Salem Steel Plant
                  </h2>
                  <p className="text-gray-500 md:text-xl dark:text-gray-400">
                    Salem Steel Plant (SSP), a special steels unit of Steel Authority of India Limited (SAIL) was
                    commissioned in 1982.
                  </p>
                  <p className="text-gray-500 md:text-xl dark:text-gray-400">
                    Located in Salem, Tamil Nadu, it is India's premier producer of high-grade stainless steel, catering
                    to various industries including automotive, architecture, and consumer goods.
                  </p>
                </div>
                <div>
                  <Button variant="outline" asChild>
                    <Link href="/about">Learn More About Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
