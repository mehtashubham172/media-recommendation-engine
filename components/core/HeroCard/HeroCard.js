import Image from "next/image";

export default function HeroCard() {
  return (
    <div class="m-4 rounder-lg grid grid-cols-2 md:grid-cols-3 gap-4">
      <div>
        <Image
         className="rounded-lg"
          src="https://static.vecteezy.com/system/resources/previews/001/271/111/non_2x/movies-popcorn-design-vector.jpg"
          alt="..."
          width={1920}
          height={1080}
          objectFit="cover"
        />
      </div>
      <div>
        <Image
         className="rounded-lg"
          src="https://static.vecteezy.com/system/resources/previews/001/271/111/non_2x/movies-popcorn-design-vector.jpg"
          alt="..."
          width={1920}
          height={1080}
        />
      </div>
      <div>
        <Image
         className="rounded-lg"
          src="https://static.vecteezy.com/system/resources/previews/001/271/111/non_2x/movies-popcorn-design-vector.jpg"
          alt="..."
          width={1920}
          height={1080}
        />
      </div>
    </div>
  );
}
