"use client"

import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import useEmblaCarousel from "embla-carousel-react"

interface ImageCarouselProps {
  images: {
    src: string
    alt: string
  }[]
}

export default function ImageCarousel({
  images = [
    { src: "/placeholder.svg?height=500&width=500", alt: "Image 1" },
    { src: "/placeholder.svg?height=500&width=500", alt: "Image 2" },
    { src: "/placeholder.svg?height=500&width=500", alt: "Image 3" },
    { src: "/placeholder.svg?height=500&width=500", alt: "Image 4" },
    { src: "/placeholder.svg?height=500&width=500", alt: "Image 5" },
  ],
}: ImageCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  })

  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  React.useEffect(() => {
    if (!emblaApi) return

    onSelect()
    emblaApi.on("select", onSelect)

    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4 md:-ml-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] min-w-0 pl-4 md:pl-6 md:flex-[0_0_50%] lg:flex-[0_0_50%]"
                onClick={() => emblaApi?.scrollTo(index)}
              >
                <div className="relative h-full">
                  <Card
                    className={cn(
                      "overflow-hidden transition-all duration-300 border-0 bg-transparent cursor-pointer",
                      selectedIndex === index ? "scale-100 opacity-100 z-10" : "scale-75 opacity-50 hover:opacity-75",
                    )}
                  >
                    <CardContent className="p-0">
                      <div className="relative aspect-square overflow-hidden rounded-xl">
                        <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -bottom-12 left-0 right-0 flex justify-center gap-2">
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="inline-flex items-center justify-center rounded-full size-10 bg-primary text-primary-foreground shadow hover:bg-primary/90"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-5"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            className="inline-flex items-center justify-center rounded-full size-10 bg-primary text-primary-foreground shadow hover:bg-primary/90"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-5"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

