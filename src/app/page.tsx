import MaxWidthWrapper from '@/components/max-width-wrapper/MaxWidthWrapper'
import { buttonVariants } from '@/components/ui/button'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'


export default function Home() {
  return (
    <MaxWidthWrapper className={"mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center"}>
      <div className={"mx-auto mb-4 max-w-fit flex items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50"}>
        <p className={"text-sm font-semibold text-gray-700"}>
          pdf.AI pour votre bonnheur !
        </p>
      </div>
      <h1 className={"max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl"}>
        Chat avec ton <span className={"text-blue-600"}>document</span> oklm
      </h1>
      <p className={"mt-5 max-w-prose text-zinc-700 sm:text-lg"}>
       pdf.AI vous permet d’avoir des conversations avec n’importe quel document PDF. Il vous suffit de télécharger votre fichier et de commencer à poser des questions immédiatement.
      </p>
      <Link
        href={"/dashbord"}
        target={"_blank"}
        className={buttonVariants()}
      >
        Get started <ArrowRight className={"ml-2 h-5 w-5"} />
      </Link>
    </MaxWidthWrapper>
  )
}
