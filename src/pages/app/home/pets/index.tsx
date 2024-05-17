import { Paw } from '@/components/paw'
import { Button } from '@/components/ui/button'
import { useIsMobile } from '@/hooks/useIsMobile'
import { ChevronRight } from 'lucide-react'
import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'

const PetsDesktop = lazy(() => import('./desktop'))
const PetsMobile = lazy(() => import('./mobile'))

export function Pets() {
  const isMobile = useIsMobile()

  return (
    <section
      className="overflow-hidden bg-[#FCFAFF] py-6 lg:py-14"
      id="pets-encontrados"
    >
      <div className="container">
        <h2 className="mb-4 flex items-center justify-center gap-4 text-2xl font-semibold text-black lg:text-5xl">
          Pets encontrados <Paw className="size-8 rotate-45 lg:size-10" />
        </h2>

        <p className="text-balance text-center text-sm lg:text-2xl">
          Veja aqui alguns dos animais que foram encontrados e estão aguardando
          para serem reunidos com suas famílias.
        </p>

        {isMobile !== null && (
          <div className="mt-5">
            <Suspense>{isMobile ? <PetsMobile /> : <PetsDesktop />}</Suspense>
          </div>
        )}

        <Button
          asChild
          className="mx-auto mt-6 flex h-auto w-fit items-center gap-2 rounded-lg px-4 py-3 text-base leading-none"
        >
          <Link to="/pets">
            Ver lista completa{' '}
            <ChevronRight className="size-4" strokeWidth={3} />
          </Link>
        </Button>
      </div>
    </section>
  )
}
