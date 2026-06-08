import { useEffect, useState } from 'react'

export function ProjectImageSlider({ images, title }) {
  const slides = images?.length ? images : ['/images/projects/default.png']
  const hasMultipleSlides = slides.length > 1
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    if (!hasMultipleSlides) {
      return undefined
    }

    const slideTimer = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % slides.length)
    }, 3200)

    return () => window.clearInterval(slideTimer)
  }, [hasMultipleSlides, slides.length])

  const goToSlide = (index) => {
    setActiveSlide(index)
  }

  const goToPrevious = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className={`project-image-slider ${hasMultipleSlides ? 'has-slides' : 'single-slide'}`}>
      <img src={slides[activeSlide]} alt={`${title} project view ${activeSlide + 1}`} />
      {hasMultipleSlides && (
        <>
          <div className="slider-controls">
            <button
              className="slider-button prev"
              onClick={goToPrevious}
              aria-label="Previous slide"
              type="button"
            >
              ‹
            </button>
            <button
              className="slider-button next"
              onClick={goToNext}
              aria-label="Next slide"
              type="button"
            >
              ›
            </button>
          </div>
          <span className="project-slide-dots" aria-hidden="true">
            {slides.map((image, index) => (
              <button
                key={`${image}-${index}`}
                className={`dot ${index === activeSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                type="button"
              />
            ))}
          </span>
        </>
      )}
    </div>
  )
}
