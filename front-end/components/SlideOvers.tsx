import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import useShortcut from '@/hooks/useShortcut';
import { XDarkIcon, XLightIcon } from './Icons';
import useTheme from '@/hooks/useTheme';
import CreatePost from './CreatePost';
import VerbumTextEditor from './NoteViewer';
// import { XMarkIcon } from '@heroicons/react/24/outline'

export default function SlideOvers() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false)
  useShortcut('KeyQ', () => {
    setOpen(!open);
  });
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  {/* <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child> */}
                  <div className="flex h-full flex-col overflow-y-scroll bg-white dark:bg-gray-800 py-6 shadow-xl">
                    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center px-4 sm:px-6">
                      <Dialog.Title className="text-base font-semibold leading-6 text-gray-900 dark:text-slate-200">
                        여기에 뭘할까
                      </Dialog.Title>
                      {/* <button
                        type="button"
                        className="text-gray-800 hover:text-gray-500 md:ml-auto flex flex-wrap items-center text-base justify-center "
                         */}
                        <div className="text-gray-800 hover:text-gray-200 md:ml-auto flex flex-wrap items-center text-base justify-center" onClick={() => setOpen(false)} >
                          {
                            theme === 'dark'
                            ? <XDarkIcon />
                            : <XLightIcon />
                          }
                          
                        </div>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      어떤 컨텐츠를 넣을까
                      {/* <CreatePost /> */}
                      {/* <VerbumTextEditor /> */}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}