import type { RefObject } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const DEFAULTS = {
  y: 40,
  opacity: 0,
  duration: 0.7,
  ease: 'power2.out',
  stagger: 0.15,
}

interface ScrollAnimationOptions {
  containerRef: RefObject<HTMLElement | null>
}

export function useScrollAnimations({ containerRef }: ScrollAnimationOptions) {
  useGSAP(
    () => {
      if (!containerRef.current) return

      // --- Hero entrance (immediate, no ScrollTrigger) ---
      const heroElements = gsap.utils.toArray<HTMLElement>(
        '[data-animate^="hero-"]'
      )
      if (heroElements.length > 0) {
        gsap.set(heroElements, { y: DEFAULTS.y, opacity: 0 })
        gsap.to(heroElements, {
          y: 0,
          opacity: 1,
          duration: DEFAULTS.duration,
          ease: DEFAULTS.ease,
          stagger: 0.2,
        })
      }

      // --- Scroll-triggered fade-up for individual elements ---
      const fadeUpElements = gsap.utils.toArray<HTMLElement>(
        '[data-animate="fade-up"]'
      )
      fadeUpElements.forEach((el) => {
        gsap.set(el, { y: DEFAULTS.y, opacity: 0 })
        gsap.to(el, {
          y: 0,
          opacity: 1,
          duration: DEFAULTS.duration,
          ease: DEFAULTS.ease,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true,
          },
        })
      })

      // --- Scroll-triggered stagger for grouped elements ---
      const groups = new Map<string, HTMLElement[]>()
      const groupItems = gsap.utils.toArray<HTMLElement>('[data-animate-group]')
      groupItems.forEach((el) => {
        const group = el.getAttribute('data-animate-group')!
        if (!groups.has(group)) groups.set(group, [])
        groups.get(group)!.push(el)
      })

      groups.forEach((items) => {
        // Sort by data-animate-index if present
        items.sort((a, b) => {
          const ai = Number(a.getAttribute('data-animate-index') ?? 0)
          const bi = Number(b.getAttribute('data-animate-index') ?? 0)
          return ai - bi
        })

        gsap.set(items, { y: DEFAULTS.y, opacity: 0 })
        gsap.to(items, {
          y: 0,
          opacity: 1,
          duration: DEFAULTS.duration,
          ease: DEFAULTS.ease,
          stagger: DEFAULTS.stagger,
          scrollTrigger: {
            trigger: items[0],
            start: 'top 85%',
            once: true,
          },
        })
      })
    },
    { scope: containerRef }
  )
}
