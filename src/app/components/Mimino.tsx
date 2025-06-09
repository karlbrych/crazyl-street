import Image from 'next/image';
export default function Mimino() {
    return(<>
     <div className="mt-10 space-y-4">
  {Array.from({ length: 20 }).map((_, i) => (
    <Image height={500} width={500} key={i}src="/mimino.png" alt="Crew Feed Image" className="w-64 h-64 
             animate-spin-slow 
             skew-y-12 rotate-45 scale-110 
             saturate-200 invert hue-rotate-180 sepia contrast-200 brightness-150 
             shadow-2xl shadow-fuchsia-500 
             border-8 border-dashed border-lime-500 
             rounded-full 
             transition-all duration-700 ease-in-out 
             hover:scale-125 hover:rotate-[720deg] hover:blur-sm 
             motion-safe:animate-bounce 
             bg-gradient-to-tr from-rose-500 via-yellow-400 to-indigo-600
             mix-blend-difference
             backdrop-invert">
          </Image>
  ))}
</div>
    </>)
}