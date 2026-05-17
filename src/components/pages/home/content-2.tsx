import Image from 'next/image';

import personImg from '@/assets/images/person.png';
import scatterPlotChart1Img from '@/assets/images/scatterplot_chart_1.png';
import bellCurveChartImg from '@/assets/images/bell_curve_chart.png';
import halfBlocksImg from '@/assets/images/half_blocks.png';
import scatterPlotChart2Img from '@/assets/images/scatterplot_chart_2.png';
import featureContainerImg from '@/assets/images/feature_container.png';
import containerImg from '@/assets/images/container.png';

import Title from "@/components/library/title";

export default function Content2() {
  return (
    <div className="w-full bg-quaternary flex flex-col items-center relative mt-16 pt-16 px-9 overflow-hidden z-2">
      <Title title="Personalized aesthetics" className="text-white z-1" />

      <h2 className="text-5xl font-pp-neue-montreal font-light text-white text-center mt-6 z-1">Your complete <span className="text-foreground">facial analysis</span></h2>

      <h3 className="w-full sm:max-w-md text-white text-center mt-6 z-1">Every face is unique. We assess more than 100 unique facial markers to give you a precise understanding of your aesthetics.</h3>

      <div className="hidden lg:absolute lg:max-w-450 left-0 bottom-0 right-0 lg:grid grid-cols-2 lg:grid-cols-5 gap-6 -mb-30 lg:mb-30 mx-auto">
        <Image className="min-h-full" src={scatterPlotChart1Img} alt="scatterPlotChart1Img" loading="eager" />
        <div className="flex flex-col gap-6">
          <Image className="min-w-xs" src={bellCurveChartImg} alt="bellCurveChartImg" loading="eager" />
          <Image className="min-w-xs" src={halfBlocksImg} alt="halfBlocksImg" loading="eager" />
        </div>
        <div className="hidden lg:block"></div>
        <Image className="min-h-full" src={scatterPlotChart2Img} alt="scatterPlotChart2Img" loading="eager" />
        <div className=" flex flex-col gap-6">
          <Image className="min-w-sm" src={featureContainerImg} alt="featureContainerImg" loading="eager" />
          <Image className="max-w-xs" src={containerImg} alt="containerImg" loading="eager" />
        </div>
      </div>

      <Image className="-mt-6 lg:-mt-16 z-1" src={personImg} alt="Person" width="700" loading="eager" />
    </div>
  );
}
