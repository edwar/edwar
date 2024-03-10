import Image from "next/image";

export default function Mac({ alt,src }: Readonly<{ src: string, alt: string }>) {
  return (
    <>
        <div className="relative mx-auto border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
            <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-gray-800">
            <Image loading='lazy' width={640} height={360} className="aspect-video" src={src} alt={alt} />
            </div>
        </div>
        <div className="relative mx-auto bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
        </div>
    </>
  )
}
