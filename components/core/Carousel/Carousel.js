import Image from "next/image";

export default function Carousel() {
  return (
    <div id="default-carousel" class="relative w-full" data-carousel="slide">
      <div class="relative h-56 overflow-hidden md:h-96">
        <Image
          src="https://timelinecovers.pro/facebook-cover/download/girl_young_wild_free-facebook-cover.jpg"
          alt="..."
          width={1920}
          height={1080}
        />
      </div>
    </div>
  );
}
