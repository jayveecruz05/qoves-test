'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from 'next/image';
import Card from '@/components/library/card';

import Image1 from '@/assets/images/image_1.png';
import Image2 from '@/assets/images/image_2.png';
import Image3 from '@/assets/images/image_3.png';

gsap.registerPlugin(ScrollTrigger);

export default function Content4() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    if (!section || !video) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top',
        end: '+=1000%',
        pin: true,
        scrub: true,
        toggleClass: {
          targets: '#app-toolbar',
          className: 'toolbar-transparent'
        }
      });
      
      // Main scroll animation tied to section
      gsap.to(video, {
        filter: "blur(40px)",
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top",   // when section hits top
          end: "bottom",  // until section ends
          scrub: true     // smooth scroll sync
        }
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true
        }
      });

      tl.to('#app-toolbar', {
        backgroundColor: 'rgba(255,255,255,0)',
        ease: 'none'
      }).to('#app-toolbar *', {
        color: '#fff',
        fill: '#fff',
        ease: 'none'
      }, 0);

      gsap.fromTo('#text-wrapper', {
        opacity: 0,
        y: 40
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#text-wrapper',

          // Trigger when 50% of the element
          // is visible in the viewport
          start: 'top 50%',

          toggleActions: 'play none none reverse'
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="relative h-screen overflow-hidden">
        <div ref={sectionRef} className="h-screen overflow-hidden">
          <video ref={videoRef} className="w-full h-full object-cover object-center will-change-transform" autoPlay muted loop playsInline>
            <source src="/video/landing-video.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="absolute inset-0 z-2">
          <div className="w-[90vw] sm:w-[80vw] md:w-[75vw] xl:w-[65vw] h-full flex flex-col justify-end mx-auto z-2">
            <div className="p-6">
              <h2 className="text-5xl font-pp-neue-montreal font-light text-white mt-6 z-1">
                <p>Will analyzing my face</p>
                <p className="text-quaternary">Make me insecure?</p>
              </h2>
              <h3 className="w-full sm:max-w-120 text-white mt-6 z-1">Most insecurity comes from uncertainty-not knowing if your concerns are real or imagined. When you&apos;re guessing about your appearance, your mind often makes things seem worse than they are.</h3>
            </div>

            <div className="w-full grid grid-cols-1 lg:grid-cols-3 mt-12">
              <div className="border-y border-b-0 lg:border lg:border-l-0 border-foreground p-6">
                <Card className="flex flex-col justify-between">
                  <Image className="w-30" src={Image1} alt="Lifestyle factors" />
                  <p className="text-2xl text-white mt-10">Lifestyle factors</p>
                  <p className="text-sm text-white/50">Considers diet, climate, stress, sleep, and habits.</p>
                </Card>
              </div>

              <div className="border-y border-b-0 lg:border lg:border-l-0 border-foreground p-6">
                <Card className="flex flex-col justify-between">
                  <Image className="w-30" src={Image2} alt="Lifestyle factors" />
                  <p className="text-2xl text-white mt-10">Cultural beauty standards</p>
                  <p className="text-sm text-white/50">Adapts to regional and societal ideals.</p>
                </Card>
              </div>

              <div className="border-y lg:border lg:border-x-0 border-foreground p-6">
                <Card className="flex flex-col justify-between">
                  <Image className="w-30" src={Image3} alt="Lifestyle factors" />
                  <p className="text-2xl text-white mt-10">Genetic factors</p>
                  <p className="text-sm text-white/50">Takes into account genetic factors and how they might impact your facial aesthetics.</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sticky top-0 overflow-hidden">
        <div id="text-wrapper" className="w-full h-screen flex flex-col items-center justify-center text-center p-12 opacity-0">
          <h2 className="text-5xl font-pp-neue-montreal font-light text-white mt-6">
            <p>Is it vain to care</p>
            <p className="text-white/50">about your appearance?</p>
          </h2>
          <h3 className="w-full sm:max-w-120 text-white/50 mt-6 z-1">Many feel guilty about wanting to improve their looks, fearing it means they’re shallow or insecure. But here&apos;s what research tells us : caring about appearance is natural. Like health, finances, and education, it`s just another form of self-improvement.</h3>
        </div>
      </div>

      <div className="w-[90vw] sm:w-[80vw] md:w-[75vw] xl:w-[65vw] min-h-[calc(100vh-64px)] flex items-center justify-center mx-auto z-2">
        <div className="w-full flex flex-col justify-between gap-60 p-6">
          <Card className="max-w-110">
            <p className="text-2xl text-white mb-10">Consider this...</p>
            <p className="text-sm text-white/50 bg-white/20 rounded-lg mt-2 py-2 px-4">First impressions matter</p>
            <p className="text-sm text-white/50 bg-white/20 rounded-lg mt-2 py-2 px-4">It has a considerable impact on interpersonal interactions</p>
            <p className="text-sm text-white/50 bg-white/20 rounded-lg mt-2 py-2 px-4">Small improvements can drastically impact quality of life</p>
          </Card>

          <Card className="max-w-110 ml-auto">
            <p className="text-2xl text-white mb-10">The key is approaching it intelligently</p>
            <p className="text-sm text-white/50 bg-white/20 rounded-lg mt-2 py-2 px-4">Not chasing unrealistic standards</p>
            <p className="text-sm text-white/50 bg-white/20 rounded-lg mt-2 py-2 px-4">Not trying to look like someone else</p>
            <p className="text-sm text-white/50 bg-white/20 rounded-lg mt-2 py-2 px-4">Not seeking perfection</p>
            <p className="text-sm text-white/50 bg-white/20 rounded-lg mt-2 py-2 px-4">Aiming only for a better version of yourself</p>
          </Card>
        </div>
      </div>
    </>
  );
}
