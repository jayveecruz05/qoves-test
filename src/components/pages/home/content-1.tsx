'use client';

import { useEffect } from "react";
import Image from 'next/image';

import gsap from "gsap";
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

import beforeImg from '@/assets/images/before.jpg';
import afterImg from '@/assets/images/after.jpg';

import Content from "@/components/layout/content";
import Title from "@/components/library/title";
import ConnectedBorder from '@/assets/icons/connected-border';

gsap.registerPlugin(MotionPathPlugin);

const optionsList = ['Get your expert facial analysis', 'Visualise your best looking self', 'Get your personalized glow-up protocol', 'Track your progress and see dramatic results'];

export default function Content1() {
  useEffect(() => {
    gsap.to('#connected-border #tracker-1', {
      duration: 15,
      ease: 'none',
      repeat: -1,
      motionPath: {
        path: '#connected-border path',
        align: '#connected-border path',
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
        start: 1,
        end: 0
      }
    });

    gsap.to('#connected-border #tracker-2', {
      duration: 15,
      ease: 'none',
      repeat: -1,
      motionPath: {
        path: '#connected-border path',
        align: '#connected-border path',
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
        start: 0.5,
        end: -0.5
      }
    });
  }, []);

  return (
    <Content id="how-it-works" className="pt-26 z-2">
      <Title title="Personalized Analysis" />

      <h2 className="text-5xl font-pp-neue-montreal font-light text-secondary text-center mt-6">Get your personalised <span className="text-quaternary">Qoves plan</span></h2>

      <h3 className="w-full sm:max-w-md text-tertiary text-center mt-6">Understand your facial features and start your glow-up today with a proven action plan, no plastic surgery needed.</h3>

      <div className="w-full max-w-4xl mt-12 relative">
        <div className="absolute top-0 left-0 bottom-0 right-0 z-1">
          <ConnectedBorder />
        </div>

        <div className="flex items-center justify-between m-2.5 sm:m-3.5 md:m-4 lg:m-5 relative z-2">
          <div className="w-80">
            <Image src={beforeImg} alt="Before" className="w-full h-full" loading="eager" />
          </div>
          <div className="w-80" />
          <div className="w-80">
            <Image src={afterImg} alt="After" className="w-full h-full" loading="eager" />
          </div>
        </div>
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {optionsList.map((option, index) => (
          <div className="w-full flex flex-col justify-between border border-foreground box-border text-secondary rounded-lg p-3" key={option}>
            <div className="w-5 h-5 flex items-center justify-center text-xs text-white bg-quaternary rounded-full">{index + 1}</div>
            <p className="mt-6">{option}</p>
          </div>
        ))}
      </div>
    </Content>
  );
}
