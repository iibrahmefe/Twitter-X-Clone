import { Popover, Disclosure ,Transition} from "@headlessui/react"
export default function More() {
    return (
        //
        <Popover className="relative">
            <Popover.Button className="py-[3px] block group outline-none">

                <div className="inline-flex items-center gap-5 p-3 rounded-full transition-colors text-xl  group-hover:bg-[#eff3f41a] ">
                    <div className="relative h-[26.25px] w-[26.25px]">
                        <svg viewBox="0 0 24 24" className="h-[1.641rem]"><path fill="currentColor" d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"></path></svg>
                    </div>
                    <div className="pr-4 text-xl">
                        Daha Fazla
                    </div>
                </div>

            </Popover.Button>
            <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >
                <Popover.Panel className="w-[318px] absolute bottom-0 left-0 bg-black shadow-box rounded-xl overflow-hidden">
                    <button className="inline-flex  w-full items-center gap-5 p-3 h-14 transition-colors text-xl hover:bg-[#eff3f41a] ">
                        <div className="relative h-[26.25px] w-[26.25px]">
                            <svg viewBox="0 0 24 24" className="h-[1.641rem]"><path fill="currentColor" d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"></path></svg>
                        </div>
                        <div className="pr-4 text-xl font-bold text-[20px]">
                            Bağlan
                        </div>
                    </button>
                    <button className=" px-4 h-14 w-full inline-flex items-center gap-5  transition-colors text-xl hover:bg-[#eff3f41a] ">
                        <div className="relative h-[26.25px] w-[26.25px]">
                            <svg viewBox="0 0 24 24" className="h-[1.641rem]">
                                <path fill="currentColor" d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z">
                                </path>
                            </svg>
                        </div>
                        <div className="pr-4 text-xl font-bold text-[20px]">
                            Para kazanma
                        </div>
                    </button>

                    <div className="h-px bg-[#2f3336] my-0.5 w-[89%] mx-auto"></div>

                    <Disclosure>
                        <Disclosure.Button className="h-[52px] w-full inline-flex items-center justify-between px-4 font-bold hover:bg-[#eff3f41a]">İçerik Üretici Stüdyosu {open && 'acik'}</Disclosure.Button>
                        <Disclosure.Panel className="text-gray-500 .">
                            Yes! You can purchase a license that you can share with your entire team.
                        </Disclosure.Panel>
                    </Disclosure>

                    <Disclosure>
                        <Disclosure.Button className="h-[52px] w-full inline-flex items-center justify-between px-4 font-bold hover:bg-[#eff3f41a]">Profesyonel Para Kazanma</Disclosure.Button>
                        <Disclosure.Panel className="text-gray-500 .">
                            Yes! You can purchase a license that you can share with your entire team.
                        </Disclosure.Panel>
                    </Disclosure>

                    <Disclosure>
                        <Disclosure.Button className="h-[52px] w-full inline-flex items-center justify-between px-4 font-bold hover:bg-[#eff3f41a]">Ayarlar ve Destek</Disclosure.Button>
                        <Disclosure.Panel className="text-gray-500 .">
                            Yes! You can purchase a license that you can share with your entire team.
                        </Disclosure.Panel>
                    </Disclosure>
                </Popover.Panel>
                </Transition>
        </Popover>
    )
}