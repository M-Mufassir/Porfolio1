import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function ProjectImageSlider({ images, title }) {
  const slides = images?.length ? images : ['/images/projects/default.png']
  const hasMultipleSlides = slides.length > 1
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: hasMultipleSlides })
  const [activeSlide, setActiveSlide] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setActiveSlide(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return undefined
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  useEffect(() => {
    if (!emblaApi || !hasMultipleSlides) return undefined
    const timer = window.setInterval(() => {
      emblaApi.scrollNext()
    }, 4500)
    return () => window.clearInterval(timer)
  }, [emblaApi, hasMultipleSlides])

  const goToPrevious = (e) => {
    e.stopPropagation()
    emblaApi?.scrollPrev()
  }

  const goToNext = (e) => {
    e.stopPropagation()
    emblaApi?.scrollNext()
  }

  const goToSlide = (e, index) => {
    e.stopPropagation()
    emblaApi?.scrollTo(index)
  }

  return (
    <div className={`project-image-slider ${hasMultipleSlides ? 'has-slides' : 'single-slide'}`}>
      <div className="slider-viewport overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((src, index) => (
            <div key={`${src}-${index}`} className="flex-[0_0_100%] min-w-0 h-full">
              <img
                className="slider-image"
                src={src}
                alt={`${title} - visual ${index + 1} of ${slides.length}`}
                loading="lazy"
                onError={(e) => {
                  e.target.src = '/images/projects/default.png'
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {hasMultipleSlides && (
        <>
          <div className="slider-controls">
            <button
              className="slider-arrow prev"
              onClick={goToPrevious}
              aria-label="Previous image"
              type="button"
            >
              <ChevronLeft size={16} aria-hidden="true" />
            </button>
            <button
              className="slider-arrow next"
              onClick={goToNext}
              aria-label="Next image"
              type="button"
            >
              <ChevronRight size={16} aria-hidden="true" />
            </button>
          </div>

          <div className="project-slide-dots" aria-label="Slide dots">
            {slides.map((image, index) => (
              <button
                key={`${image}-${index}`}
                className={`dot ${index === activeSlide ? 'active' : ''}`}
                onClick={(e) => goToSlide(e, index)}
                aria-label={`Show slide ${index + 1}`}
                type="button"
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
