import Link from 'next/link'
import Button from '@/components/Button'
import { auth } from '@/lib/auth'
import ProfileMenu from '@/components/ProfileMenu'
import Image from 'next/image'

export default async function Home() {
  const session = await auth()
  return (
    <>
      <header className="px-4 lg:px-6 py-4 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Image
            alt="Formulate logo"
            src="/formulate.svg"
            width={32}
            height={32}
          />
          <span className="sr-only">FormUlate</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          {session?.user ? (
            <div className="flex items-center gap-2">
              <Link className="hidden md:block" href={'/create'}>
                <Button>Create new form</Button>
              </Link>
              <ProfileMenu {...session.user} />
            </div>
          ) : (
            <Link href={'/auth/login'}>
              <Button>Login</Button>
            </Link>
          )}
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  <span className="text-blue-500">FormUlate</span> simple forms
                  from language
                </h1>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl  ">
                  Type in your requirements and get the beautiful forms
                  generated with AI
                </p>
                <Link
                  href={'/auth/login'}
                  className="space-x-4 mx-auto md:mx-0"
                >
                  <Button variant="outline">Get Started</Button>
                </Link>
              </div>
            </div>
            <Image
              alt="cover"
              className="mx-auto aspect-[3/1] overflow-hidden rounded-t-2xl object-cover"
              height="300"
              src="/hero.webp"
              width="1300"
              loading={'lazy'}
              placeholder="blur"
              blurDataURL="data:image/octet-stream;base64,UklGRlBLAABXRUJQVlA4WAoAAAAgAAAAaREAzAUASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggYkkAAFCWBp0BKmoRzQU+nU6hTqWkIqIgCECwE4lpbuFwX9PMn1Hnv2J5M///8vTj3v+z///h/96///62vIFH93h+fYiNQL//si2Cf/6sG+8nl/7AE99OnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06d36lMbzTWdOnTp06dOnTp06dOnTp06dOnTp06dOnTp06i5bRVfT3GolXmms6dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dQO9xqJV5prOnTp1F0vbZvqBFfTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dRSNRVfT3GolXmms6dOnTp3fqKr6e41Eq801nTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06i5byAZ7jUSrzTWdOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnUUjUVX09xqJV5prOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp1Js1FCXvhdzeaazp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTo/DGqcgM2abCT6e41Eq801nTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTqTYqBsjybowlrwFOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTvPImx7ytOc0UU+4Sc09xqJV5prOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dH3KvNNZ06dOj7lXTUx4lOnTp06b+jTjw9prOnTp06dOnTp06dOnTp06b+TEO1jtfTp1A73GolXmms7zyKEjybp21X0OnUUjUVX09xqJV5prOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOoHe41Eq88W8ibH4K69zWb9RVf3BjUSrzTWdOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTqB3wK9OnTvPImiH89O2rRGs6dOnTp0fTnzYDU+1nTgfAZVfT3GolXmms6dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTsHgWA73GpMapIa0kPIGhuAEkq/1FV9PcaiVeaazp06dOnTp06dOnTp06dOnTp06dOnTpwPgMqvp7jUSrzTWdOnTp06dOnTp06dOnUkDUVYwUUhbn0Jbyhp7jXj4gt42I3iMaiTJ87JyFvIoS+CuvdJC3kUJfBXXukhbyKEvgrr3SQt5FCRe5ih4EV9OxlaWBASs9EstabngRX06dOnTp06dOnTp06dOnTpv6ZWRDsyph3Zo29xqJV5prOnTsHcaiVeaazp06dOnTp06dOnTp06dSRJp9NiiAr9O2aUhayKAzBU9tphYFzZd4rznQXwu5vNNZ06dOnTp06dOnTp06dOnTp06dOnAnT6gRxvcxRTwW8aVX09x9Pc9NR5z0S1XprOnTp06dOnTp06dOjvjxDsyph3Zkx4e01nTp06dOweBXp06dOnTp06dOnTp06dOnTo+5WWgazp1BTwW8ig6YK69r3mjylde6SFvIiVulbzUSrzTWdOnTp06dOnTp06dOnTp06dOj7fT6gRX2HjZOM8W8aZccxDnolq0gt5FCRh+a8eaazp06dOnTp06dOnTpwVGqchbyKEvgrr3SQt5FCW8oagRaIIr6dOnTp06dOnTp06dOnTp06dOpIG5ASUG2YS98w+WkLeRNbMFdC6QVeRQhcCHuxvZkxDsyph3ZkxDsyph3ZkxDsyph3ZkxDsyph3ZkxILYlOw8bHc3MgFmeIxp4w307a6SAUgTV6azp06dOju9rOnTp06dOnTp06dOnTp06dOnTp039GnBXPcbHNPcaiVeaazp06dOnTp06dOnd+qIragRyBX6dsnb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HmPMeY8x5jzHmPMeY8xljxf9EDPl06sRpfYZVfT3GndO9IOl8Fdq5vlgUlLoHnNPcah9O90XRzOXuvL/UYWae41Eq801nTp06dOnTp06dOnTp06dOnTp06eeJqM/qITEpWiq+nuNRKvNNZ06dOnTp0fcmh+qlUMj/vuPBsSizs86zNelNOlgRAWGWFO1sbtaAywp2twTgnBOCcEgMsEw1gp2tAeYyvR2tASoU7WwCRMzsy4c3ZIE15prPloIkllPa9BFKjIE/LxscdrC018643taPe1T6h3uNSVoHIW5sqvp7jUSrzTWdOnTp06dOnTp06dOnTp1WhhsE/L3tUzRKvNNZ06dOnTp06dOnTpwLVGZMbUTJRPET2ms6dOnTp06dOw+CJLDobG7W4JiyimyPouwu7CuWgIyiooho2IFPejN2Xpikg1FV9PcaiVeaazgTshnBtTNE22VX09xIau5/6/1FJO7JE/NQeZMapLOc2VX09xqJV5prOnTp06dOnTp06dOnVaahvt1JS8oSams6dOnTp06dOnTp06dOnR9yaH5pEXc84kLFP06dOnTp06dQQD+llnoQsHk2rURzRt6cZBcuUiD0hL4YKVjoW67N8kXkM2xawIjubzTWcC1lUNzvcxRSUie01nTp1Jq0o2rpBkMRkWtU+010fzo00bxrOnTp06dOnTp06dOnTp06dOnTp1Wmob7dSUvKEmprOnTp06dOnTp06dOnTp06dH05jw9prPndHPfSUVHPfSUVHPLXKPq0qsrLV0S66KpeH/NGs8t08UadUrplorV8euFeRL6fuC/BRDGz2i02fcO61oHfAuHcaiVeaazqSBqG+3UlLyjSpxEBB78f3NgKlzZVfT3GolXmms6dOnTp06dOnTp06rQ2BGcsbiYlRkNRKvNNZ06dOnTp06dOnTp04E6P+oqvp7jUSrzTWdOnyznA5rSfi6GgPHwAymd7+79xmTVuTPZC92FaFfLLGsLMsI/Y/XJX0itWLe4aD3ZVfVAsO41nTqB7uvovSGnuNRKyrALzm1Ut1GxSNq3AJsJosBXLdCXPcaiVeaazp06dOnTp06dOnTp06eeEChkAmJUe4i6azp06dOnTp06dOnTp06dRQYzQhjm2olXmms6dOnUDvcai/uviTWgOhsWZtaAyxrAmGsCYawU+29t7bQ3tvbWmgPMfims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"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Why Choose FormUlate?
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed  ">
                  FormUlate is designed to make the creation of forms and data
                  collection easy and accessible.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-8 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid h-full gap-1 p-4 border border-gray-100 shadow-sm rounded-xl">
                <h3 className="text-lg font-bold">Prompt-Based Creation</h3>
                <p className="text-sm text-gray-500">
                  Simply tell us what you want your form to do, and we will
                  build it for you using the state-of-the-art Gemini Pro Model.
                </p>
              </div>
              <div className="grid h-full gap-1 p-4 border border-gray-100 shadow-sm rounded-xl">
                <h3 className="text-lg font-bold">Instant Shareable Pages</h3>
                <p className="text-sm text-gray-500">
                  Generate instant, sharable web page (using the unique link
                  provided) for your form with a single click.
                </p>
              </div>
              <div className="grid h-full gap-1 p-4 border border-gray-100 shadow-sm rounded-xl">
                <h3 className="text-lg font-bold">
                  Data Insights at your Fingertips
                </h3>
                <p className="text-sm text-gray-500  ">
                  Each form comes with a dedicated table in our database, making
                  data fetching and analysis a breeze.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <Link href={'/'} className="text-xs text-gray-500  ">
          © FormUlate.
        </Link>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="/terms"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="/policy"
          >
            Privacy
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="/form/contact-us"
          >
            Contact
          </Link>
        </nav>
      </footer>
    </>
  )
}
