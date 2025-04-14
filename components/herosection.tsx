import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-red-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Every Drop Counts. <span className="text-red-600">Save Lives</span> Today.
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Join our community of donors and help save lives. Find blood when you need it most or donate to help
                others in need.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                <Link href="#find-blood">
                  Find Blood
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/donate">Become a Donor</Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-gray-500">100% Safe & Secure</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-gray-500">24/7 Emergency Support</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[450px] w-full overflow-hidden rounded-xl">
              <img
                src="/placeholder.svg?height=900&width=1600"
                alt="Blood donation hero image"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-white/90 p-4 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Emergency Blood Needed</p>
                    <p className="text-xs text-gray-500">City General Hospital • O- Blood Type</p>
                  </div>
                  <Button size="sm" className="bg-red-600 hover:bg-red-700">
                    Respond
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
