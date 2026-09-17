import { useEffect, useState } from 'react'

export function ProjectImageSlider({ images, title }) {
  const slides = images?.length ? images : ['/images/projects/default.png']
  const hasMultipleSlides = slides.length > 1
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    if (!hasMultipleSlides) return undefined

    const slideTimer = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % slides.length)
    }, 4000)

    return () => window.clearInterval(slideTimer)
  }, [hasMultipleSlides, slides.length])

  const goToSlide = (e, index) => {
    e.stopPropagation()
    setActiveSlide(index)
  }

  const goToPrevious = (e) => {
    e.stopPropagation()
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToNext = (e) => {
    e.stopPropagation()
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className={`project-image-slider ${hasMultipleSlides ? 'has-slides' : 'single-slide'}`}>
      <div className="slider-viewport">
        <img
          className="slider-image"
          src={slides[activeSlide]}
          alt={`${title} - visual ${activeSlide + 1} of ${slides.length}`}
          loading="lazy"
          onError={(e) => {
            e.target.src = '/images/projects/default.png'
          }}
        />
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
              <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <button
              className="slider-arrow next"
              onClick={goToNext}
              aria-label="Next image"
              type="button"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
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
