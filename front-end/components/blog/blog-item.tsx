import Image from "next/image";
import Link from "next/link";

export default function BlogItem(){
    return (
        <>
        <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-8">
        <div className="max-w-sm mx-auto h-full px-4 pt-6 pb-24 bg-gray-500 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <h3 className="text-lg text-white font-semibold mr-2">To do</h3>
              <span className="inline-flex items-center justify-center w-6 h-7 rounded-full bg-gray-600 text-xs font-medium text-gray-400">3</span>
            </div>
            <div>
              <button className="inline-block mr-2 text-gray-400 hover:text-gray-300">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.6667 5.33329H6.66675V1.33329C6.66675 1.15648 6.59651 0.986913 6.47149 0.861888C6.34646 0.736864 6.17689 0.666626 6.00008 0.666626C5.82327 0.666626 5.6537 0.736864 5.52868 0.861888C5.40365 0.986913 5.33342 1.15648 5.33342 1.33329V5.33329H1.33341C1.1566 5.33329 0.987035 5.40353 0.86201 5.52855C0.736986 5.65358 0.666748 5.82315 0.666748 5.99996C0.666748 6.17677 0.736986 6.34634 0.86201 6.47136C0.987035 6.59639 1.1566 6.66663 1.33341 6.66663H5.33342V10.6666C5.33342 10.8434 5.40365 11.013 5.52868 11.138C5.6537 11.2631 5.82327 11.3333 6.00008 11.3333C6.17689 11.3333 6.34646 11.2631 6.47149 11.138C6.59651 11.013 6.66675 10.8434 6.66675 10.6666V6.66663H10.6667C10.8436 6.66663 11.0131 6.59639 11.1382 6.47136C11.2632 6.34634 11.3334 6.17677 11.3334 5.99996C11.3334 5.82315 11.2632 5.65358 11.1382 5.52855C11.0131 5.40353 10.8436 5.33329 10.6667 5.33329Z" fill="currentColor"></path>
                </svg>
              </button>
              <a className="inline-block py-1 text-gray-400 hover:text-gray-300" href="#">
                <svg width="12" height="4" viewBox="0 0 12 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 0.666626C5.73629 0.666626 5.47851 0.744825 5.25924 0.891333C5.03998 1.03784 4.86908 1.24608 4.76816 1.48971C4.66724 1.73335 4.64084 2.00144 4.69229 2.26008C4.74373 2.51872 4.87072 2.7563 5.05719 2.94277C5.24366 3.12924 5.48124 3.25623 5.73988 3.30767C5.99852 3.35912 6.26661 3.33272 6.51025 3.2318C6.75388 3.13088 6.96212 2.95998 7.10863 2.74072C7.25514 2.52145 7.33333 2.26367 7.33333 1.99996C7.33333 1.64634 7.19286 1.3072 6.94281 1.05715C6.69276 0.807102 6.35362 0.666626 6 0.666626ZM1.33333 0.666626C1.06963 0.666626 0.811839 0.744825 0.592574 0.891333C0.373308 1.03784 0.202411 1.24608 0.101495 1.48971C0.000577708 1.73335 -0.0258267 2.00144 0.0256202 2.26008C0.0770672 2.51872 0.204055 2.7563 0.390525 2.94277C0.576995 3.12924 0.814572 3.25623 1.07321 3.30767C1.33185 3.35912 1.59994 3.33272 1.84358 3.2318C2.08721 3.13088 2.29545 2.95998 2.44196 2.74072C2.58847 2.52145 2.66667 2.26367 2.66667 1.99996C2.66667 1.64634 2.52619 1.3072 2.27614 1.05715C2.02609 0.807102 1.68696 0.666626 1.33333 0.666626ZM10.6667 0.666626C10.403 0.666626 10.1452 0.744825 9.92591 0.891333C9.70664 1.03784 9.53574 1.24608 9.43483 1.48971C9.33391 1.73335 9.30751 2.00144 9.35895 2.26008C9.4104 2.51872 9.53739 2.7563 9.72386 2.94277C9.91033 3.12924 10.1479 3.25623 10.4065 3.30767C10.6652 3.35912 10.9333 3.33272 11.1769 3.2318C11.4205 3.13088 11.6288 2.95998 11.7753 2.74072C11.9218 2.52145 12 2.26367 12 1.99996C12 1.64634 11.8595 1.3072 11.6095 1.05715C11.3594 0.807102 11.0203 0.666626 10.6667 0.666626Z" fill="currentColor"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="h-1 w-full mb-4 rounded-full bg-purple-500"></div>
          <a className="block p-4 mb-4 bg-gray-600 rounded-xl hover:bg-gray-700 transition duration-200" href="#">
            <h4 className="text-white font-semibold leading-6 mb-1">Implement Login</h4>
            <div className="flex items-center mb-4">
              <span className="h-2 w-2 mr-1 bg-pink-400 rounded-full"></span>
              <span className="text-xs font-medium text-pink-400">Development</span>
            </div>
            <p className="text-xs text-gray-300 leading-normal mb-10">This is an example task that can be used within a Kanban system.</p>
            <div className="pt-4 border-t border-gray-500">
              <div className="flex flex-wrap items-center justify-between -m-2">
                <div className="w-auto p-2">
                  <div className="flex items-center p-2 bg-gray-500 rounded-md">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.0001 2.33337H3.00008C2.2637 2.33337 1.66675 2.93033 1.66675 3.66671V11.6667C1.66675 12.4031 2.2637 13 3.00008 13H11.0001C11.7365 13 12.3334 12.4031 12.3334 11.6667V3.66671C12.3334 2.93033 11.7365 2.33337 11.0001 2.33337Z" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M9.66675 1V3.66667" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M4.3335 1V3.66667" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M1.66675 6.33337H12.3334" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M6.3335 9H7.00016" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M7 9V11" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <span className="ml-2 text-xs font-medium text-gray-200">Jul 03</span>
                  </div>
                </div>
                <div className="w-auto p-2">
                  <div className="flex h-full items-center">
                    {/* <Image className="w-7 h-7 rounded-full object-cover" src="trizzle-assets/images/avatar-men-circle-border.png" alt="" />
                    <Image className="w-7 h-7 -ml-3 rounded-full object-cover" src="trizzle-assets/images/avatar-women-circle-border.png" alt="" /> */}
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a className="block p-4 mb-4 bg-gray-600 rounded-xl hover:bg-gray-700 transition duration-200" href="#">
            <h4 className="text-white font-semibold leading-6 mb-1">Release MVP</h4>
            <div className="flex items-center mb-4">
              <span className="h-2 w-2 mr-1 bg-green-500 rounded-full"></span>
              <span className="text-xs font-medium text-green-500">Planning</span>
            </div>
            <p className="text-xs text-gray-300 leading-normal mb-10">This is an example task that can be used within a Kanban system.</p>
            <div className="pt-4 border-t border-gray-500">
              <div className="flex flex-wrap items-center justify-between -m-2">
                <div className="w-auto p-2">
                  <div className="flex items-center p-2 bg-gray-500 rounded-md">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.0001 2.33337H3.00008C2.2637 2.33337 1.66675 2.93033 1.66675 3.66671V11.6667C1.66675 12.4031 2.2637 13 3.00008 13H11.0001C11.7365 13 12.3334 12.4031 12.3334 11.6667V3.66671C12.3334 2.93033 11.7365 2.33337 11.0001 2.33337Z" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M9.66675 1V3.66667" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M4.3335 1V3.66667" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M1.66675 6.33337H12.3334" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M6.3335 9H7.00016" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M7 9V11" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <span className="ml-2 text-xs font-medium text-gray-200">Jul 04</span>
                  </div>
                </div>
                <div className="w-auto p-2">
                  <div className="flex h-full items-center">
                    {/* <Image className="w-7 h-7 rounded-full object-cover" src="trizzle-assets/images/avatar-women-2-circle-border.png" alt="" />
                    <Image className="w-7 h-7 -ml-3 rounded-full object-cover" src="trizzle-assets/images/avatar-women-3-circle-border.png" alt="" /> */}
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a className="block p-4 mb-4 bg-gray-600 rounded-xl hover:bg-gray-700 transition duration-200" href="#">
            <h4 className="text-white font-semibold leading-6 mb-1">Design Review</h4>
            <div className="flex items-center mb-4">
              <span className="h-2 w-2 mr-1 bg-purple-500 rounded-full"></span>
              <span className="text-xs font-medium text-purple-500">Design</span>
            </div>
            <div className="pt-4 border-t border-gray-500">
              <div className="flex flex-wrap items-center justify-between -m-2">
                <div className="w-auto p-2">
                  <div className="flex items-center p-2 bg-gray-500 rounded-md">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.0001 2.33337H3.00008C2.2637 2.33337 1.66675 2.93033 1.66675 3.66671V11.6667C1.66675 12.4031 2.2637 13 3.00008 13H11.0001C11.7365 13 12.3334 12.4031 12.3334 11.6667V3.66671C12.3334 2.93033 11.7365 2.33337 11.0001 2.33337Z" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M9.66675 1V3.66667" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M4.3335 1V3.66667" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M1.66675 6.33337H12.3334" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M6.3335 9H7.00016" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M7 9V11" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <span className="ml-2 text-xs font-medium text-gray-200">Jul 05</span>
                  </div>
                </div>
                <div className="w-auto p-2">
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-gray-500 rounded-full">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.47333 7.47332C10.1269 6.95909 10.604 6.25393 10.8382 5.45594C11.0723 4.65796 11.0519 3.80682 10.7799 3.02096C10.5078 2.23509 9.9975 1.55358 9.32005 1.07122C8.64259 0.588861 7.83163 0.329651 7 0.329651C6.16836 0.329651 5.35741 0.588861 4.67995 1.07122C4.0025 1.55358 3.49223 2.23509 3.22014 3.02096C2.94805 3.80682 2.92767 4.65796 3.16184 5.45594C3.396 6.25393 3.87307 6.95909 4.52666 7.47332C3.40672 7.92201 2.42952 8.66621 1.69926 9.62659C0.968996 10.587 0.51304 11.7275 0.379998 12.9266C0.370368 13.0142 0.378075 13.1028 0.402681 13.1874C0.427287 13.2719 0.468309 13.3508 0.523405 13.4195C0.634677 13.5583 0.79652 13.6472 0.973331 13.6666C1.15014 13.6861 1.32744 13.6345 1.46621 13.5232C1.60499 13.412 1.69388 13.2501 1.71333 13.0733C1.85972 11.7701 2.48112 10.5665 3.45881 9.69251C4.4365 8.8185 5.70193 8.33533 7.01333 8.33533C8.32473 8.33533 9.59016 8.8185 10.5679 9.69251C11.5455 10.5665 12.1669 11.7701 12.3133 13.0733C12.3315 13.2371 12.4096 13.3884 12.5327 13.498C12.6559 13.6076 12.8152 13.6676 12.98 13.6666H13.0533C13.2281 13.6465 13.3878 13.5582 13.4977 13.4208C13.6076 13.2835 13.6587 13.1082 13.64 12.9333C13.5063 11.7308 13.0479 10.5873 12.3139 9.62545C11.5799 8.6636 10.5979 7.91963 9.47333 7.47332ZM7 6.99998C6.47258 6.99998 5.95701 6.84358 5.51848 6.55057C5.07995 6.25755 4.73815 5.84107 4.53632 5.3538C4.33449 4.86653 4.28168 4.33036 4.38457 3.81307C4.48746 3.29579 4.74144 2.82064 5.11438 2.4477C5.48732 2.07476 5.96247 1.82078 6.47976 1.71789C6.99704 1.61499 7.53322 1.6678 8.02049 1.86964C8.50776 2.07147 8.92423 2.41326 9.21725 2.85179C9.51027 3.29033 9.66667 3.8059 9.66667 4.33331C9.66667 5.04056 9.38571 5.71884 8.88562 6.21893C8.38552 6.71903 7.70724 6.99998 7 6.99998Z" fill="#3D485B"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-8">
        <div className="max-w-sm mx-auto h-full px-4 pt-6 pb-24 bg-gray-500 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <h3 className="text-lg text-white font-semibold mr-2">In progress</h3>
              <span className="inline-flex items-center justify-center w-6 h-7 rounded-full bg-gray-600 text-xs font-medium text-gray-400">2</span>
            </div>
            <div>
              <button className="inline-block mr-2 text-gray-400 hover:text-gray-300">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.6667 5.33329H6.66675V1.33329C6.66675 1.15648 6.59651 0.986913 6.47149 0.861888C6.34646 0.736864 6.17689 0.666626 6.00008 0.666626C5.82327 0.666626 5.6537 0.736864 5.52868 0.861888C5.40365 0.986913 5.33342 1.15648 5.33342 1.33329V5.33329H1.33341C1.1566 5.33329 0.987035 5.40353 0.86201 5.52855C0.736986 5.65358 0.666748 5.82315 0.666748 5.99996C0.666748 6.17677 0.736986 6.34634 0.86201 6.47136C0.987035 6.59639 1.1566 6.66663 1.33341 6.66663H5.33342V10.6666C5.33342 10.8434 5.40365 11.013 5.52868 11.138C5.6537 11.2631 5.82327 11.3333 6.00008 11.3333C6.17689 11.3333 6.34646 11.2631 6.47149 11.138C6.59651 11.013 6.66675 10.8434 6.66675 10.6666V6.66663H10.6667C10.8436 6.66663 11.0131 6.59639 11.1382 6.47136C11.2632 6.34634 11.3334 6.17677 11.3334 5.99996C11.3334 5.82315 11.2632 5.65358 11.1382 5.52855C11.0131 5.40353 10.8436 5.33329 10.6667 5.33329Z" fill="currentColor"></path>
                </svg>
              </button>
              <a className="inline-block py-1 text-gray-400 hover:text-gray-300" href="#">
                <svg width="12" height="4" viewBox="0 0 12 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 0.666626C5.73629 0.666626 5.47851 0.744825 5.25924 0.891333C5.03998 1.03784 4.86908 1.24608 4.76816 1.48971C4.66724 1.73335 4.64084 2.00144 4.69229 2.26008C4.74373 2.51872 4.87072 2.7563 5.05719 2.94277C5.24366 3.12924 5.48124 3.25623 5.73988 3.30767C5.99852 3.35912 6.26661 3.33272 6.51025 3.2318C6.75388 3.13088 6.96212 2.95998 7.10863 2.74072C7.25514 2.52145 7.33333 2.26367 7.33333 1.99996C7.33333 1.64634 7.19286 1.3072 6.94281 1.05715C6.69276 0.807102 6.35362 0.666626 6 0.666626ZM1.33333 0.666626C1.06963 0.666626 0.811839 0.744825 0.592574 0.891333C0.373308 1.03784 0.202411 1.24608 0.101495 1.48971C0.000577708 1.73335 -0.0258267 2.00144 0.0256202 2.26008C0.0770672 2.51872 0.204055 2.7563 0.390525 2.94277C0.576995 3.12924 0.814572 3.25623 1.07321 3.30767C1.33185 3.35912 1.59994 3.33272 1.84358 3.2318C2.08721 3.13088 2.29545 2.95998 2.44196 2.74072C2.58847 2.52145 2.66667 2.26367 2.66667 1.99996C2.66667 1.64634 2.52619 1.3072 2.27614 1.05715C2.02609 0.807102 1.68696 0.666626 1.33333 0.666626ZM10.6667 0.666626C10.403 0.666626 10.1452 0.744825 9.92591 0.891333C9.70664 1.03784 9.53574 1.24608 9.43483 1.48971C9.33391 1.73335 9.30751 2.00144 9.35895 2.26008C9.4104 2.51872 9.53739 2.7563 9.72386 2.94277C9.91033 3.12924 10.1479 3.25623 10.4065 3.30767C10.6652 3.35912 10.9333 3.33272 11.1769 3.2318C11.4205 3.13088 11.6288 2.95998 11.7753 2.74072C11.9218 2.52145 12 2.26367 12 1.99996C12 1.64634 11.8595 1.3072 11.6095 1.05715C11.3594 0.807102 11.0203 0.666626 10.6667 0.666626Z" fill="currentColor"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="h-1 w-full mb-4 rounded-full bg-blue-500"></div>
          <a className="block p-4 mb-4 bg-gray-600 rounded-xl hover:bg-gray-700 transition duration-200" href="#">
            <h4 className="text-white font-semibold leading-6 mb-1">UI Adjustments</h4>
            <div className="flex items-center mb-4">
              <span className="h-2 w-2 mr-1 bg-purple-500 rounded-full"></span>
              <span className="text-xs font-medium text-purple-500">Design</span>
            </div>
            <p className="text-xs text-gray-300 leading-normal mb-10">This is an example task that can be used within a Kanban system.</p>
            <div className="pt-4 border-t border-gray-500">
              <div className="flex flex-wrap items-center justify-between -m-2">
                <div className="w-auto p-2">
                  <div className="flex items-center p-2 bg-gray-500 rounded-md">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.0001 2.33337H3.00008C2.2637 2.33337 1.66675 2.93033 1.66675 3.66671V11.6667C1.66675 12.4031 2.2637 13 3.00008 13H11.0001C11.7365 13 12.3334 12.4031 12.3334 11.6667V3.66671C12.3334 2.93033 11.7365 2.33337 11.0001 2.33337Z" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M9.66675 1V3.66667" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M4.3335 1V3.66667" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M1.66675 6.33337H12.3334" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M6.3335 9H7.00016" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M7 9V11" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <span className="ml-2 text-xs font-medium text-gray-200">Jul 03</span>
                  </div>
                </div>
                <div className="w-auto p-2">
                  <div className="flex h-full items-center">
                    {/* <Image className="w-7 h-7 rounded-full object-cover" src="trizzle-assets/images/avatar-women-3-circle-border.png" alt="" />
                    <Image className="w-7 h-7 -ml-3 rounded-full object-cover" src="trizzle-assets/images/avatar-women-circle-border.png" alt="" /> */}
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a className="block p-4 mb-4 bg-gray-600 rounded-xl hover:bg-gray-700 transition duration-200" href="#">
            <h4 className="text-white font-semibold leading-6 mb-1">Design Review</h4>
            <div className="flex items-center mb-4">
              <span className="h-2 w-2 mr-1 bg-purple-500 rounded-full"></span>
              <span className="text-xs font-medium text-purple-500">Design</span>
            </div>
            <div className="pt-4 border-t border-gray-500">
              <div className="flex flex-wrap items-center justify-between -m-2">
                <div className="w-auto p-2">
                  <div className="flex items-center p-2 bg-gray-500 rounded-md">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.0001 2.33337H3.00008C2.2637 2.33337 1.66675 2.93033 1.66675 3.66671V11.6667C1.66675 12.4031 2.2637 13 3.00008 13H11.0001C11.7365 13 12.3334 12.4031 12.3334 11.6667V3.66671C12.3334 2.93033 11.7365 2.33337 11.0001 2.33337Z" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M9.66675 1V3.66667" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M4.3335 1V3.66667" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M1.66675 6.33337H12.3334" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M6.3335 9H7.00016" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M7 9V11" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <span className="ml-2 text-xs font-medium text-gray-200">Jul 05</span>
                  </div>
                </div>
                <div className="w-auto p-2">
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-gray-500 rounded-full">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.47333 7.47332C10.1269 6.95909 10.604 6.25393 10.8382 5.45594C11.0723 4.65796 11.0519 3.80682 10.7799 3.02096C10.5078 2.23509 9.9975 1.55358 9.32005 1.07122C8.64259 0.588861 7.83163 0.329651 7 0.329651C6.16836 0.329651 5.35741 0.588861 4.67995 1.07122C4.0025 1.55358 3.49223 2.23509 3.22014 3.02096C2.94805 3.80682 2.92767 4.65796 3.16184 5.45594C3.396 6.25393 3.87307 6.95909 4.52666 7.47332C3.40672 7.92201 2.42952 8.66621 1.69926 9.62659C0.968996 10.587 0.51304 11.7275 0.379998 12.9266C0.370368 13.0142 0.378075 13.1028 0.402681 13.1874C0.427287 13.2719 0.468309 13.3508 0.523405 13.4195C0.634677 13.5583 0.79652 13.6472 0.973331 13.6666C1.15014 13.6861 1.32744 13.6345 1.46621 13.5232C1.60499 13.412 1.69388 13.2501 1.71333 13.0733C1.85972 11.7701 2.48112 10.5665 3.45881 9.69251C4.4365 8.8185 5.70193 8.33533 7.01333 8.33533C8.32473 8.33533 9.59016 8.8185 10.5679 9.69251C11.5455 10.5665 12.1669 11.7701 12.3133 13.0733C12.3315 13.2371 12.4096 13.3884 12.5327 13.498C12.6559 13.6076 12.8152 13.6676 12.98 13.6666H13.0533C13.2281 13.6465 13.3878 13.5582 13.4977 13.4208C13.6076 13.2835 13.6587 13.1082 13.64 12.9333C13.5063 11.7308 13.0479 10.5873 12.3139 9.62545C11.5799 8.6636 10.5979 7.91963 9.47333 7.47332ZM7 6.99998C6.47258 6.99998 5.95701 6.84358 5.51848 6.55057C5.07995 6.25755 4.73815 5.84107 4.53632 5.3538C4.33449 4.86653 4.28168 4.33036 4.38457 3.81307C4.48746 3.29579 4.74144 2.82064 5.11438 2.4477C5.48732 2.07476 5.96247 1.82078 6.47976 1.71789C6.99704 1.61499 7.53322 1.6678 8.02049 1.86964C8.50776 2.07147 8.92423 2.41326 9.21725 2.85179C9.51027 3.29033 9.66667 3.8059 9.66667 4.33331C9.66667 5.04056 9.38571 5.71884 8.88562 6.21893C8.38552 6.71903 7.70724 6.99998 7 6.99998Z" fill="#3D485B"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a className="block p-4 mb-4 bg-gray-600 rounded-xl hover:bg-gray-700 transition duration-200" href="#">
            <h4 className="text-white font-semibold leading-6 mb-1">Shuffle Improvements</h4>
            <div className="flex items-center mb-4">
              <span className="h-2 w-2 mr-1 bg-green-500 rounded-full"></span>
              <span className="text-xs font-medium text-green-500">Planning</span>
            </div>
            {/* <Image className="block w-full h-28 object-cover rounded-md mb-3" src="trizzle-assets/images/laptop-photo-placeholder.png" alt="" /> */}
            <p className="text-xs text-gray-300 mb-4">This is an example task that can be used within a Kanban system.</p>
            <div className="pt-4 border-t border-gray-500">
              <div className="flex flex-wrap items-center justify-between -m-2">
                <div className="w-auto p-2">
                  <div className="flex items-center p-2 bg-gray-500 rounded-md">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.0001 2.33337H3.00008C2.2637 2.33337 1.66675 2.93033 1.66675 3.66671V11.6667C1.66675 12.4031 2.2637 13 3.00008 13H11.0001C11.7365 13 12.3334 12.4031 12.3334 11.6667V3.66671C12.3334 2.93033 11.7365 2.33337 11.0001 2.33337Z" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M9.66675 1V3.66667" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M4.3335 1V3.66667" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M1.66675 6.33337H12.3334" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M6.3335 9H7.00016" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M7 9V11" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <span className="ml-2 text-xs font-medium text-gray-200">Jul 05</span>
                  </div>
                </div>
                <div className="w-auto p-2">
                  <div className="flex h-full items-center">
                    {/* <Image className="w-7 h-7 rounded-full object-cover" src="trizzle-assets/images/avatar-women-circle-border.png" alt="" />
                    <Image className="w-7 h-7 -ml-3 rounded-full object-cover" src="trizzle-assets/images/avatar-men-2-circle-border.png" alt="" /> */}
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-8">
        <div className="max-w-sm mx-auto h-full px-4 pt-6 pb-24 bg-gray-500 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <h3 className="text-lg text-white font-semibold mr-2">In Review</h3>
              <span className="inline-flex items-center justify-center w-6 h-7 rounded-full bg-gray-600 text-xs font-medium text-gray-400">10</span>
            </div>
            <div>
              <button className="inline-block mr-2 text-gray-400 hover:text-gray-300">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.6667 5.33329H6.66675V1.33329C6.66675 1.15648 6.59651 0.986913 6.47149 0.861888C6.34646 0.736864 6.17689 0.666626 6.00008 0.666626C5.82327 0.666626 5.6537 0.736864 5.52868 0.861888C5.40365 0.986913 5.33342 1.15648 5.33342 1.33329V5.33329H1.33341C1.1566 5.33329 0.987035 5.40353 0.86201 5.52855C0.736986 5.65358 0.666748 5.82315 0.666748 5.99996C0.666748 6.17677 0.736986 6.34634 0.86201 6.47136C0.987035 6.59639 1.1566 6.66663 1.33341 6.66663H5.33342V10.6666C5.33342 10.8434 5.40365 11.013 5.52868 11.138C5.6537 11.2631 5.82327 11.3333 6.00008 11.3333C6.17689 11.3333 6.34646 11.2631 6.47149 11.138C6.59651 11.013 6.66675 10.8434 6.66675 10.6666V6.66663H10.6667C10.8436 6.66663 11.0131 6.59639 11.1382 6.47136C11.2632 6.34634 11.3334 6.17677 11.3334 5.99996C11.3334 5.82315 11.2632 5.65358 11.1382 5.52855C11.0131 5.40353 10.8436 5.33329 10.6667 5.33329Z" fill="currentColor"></path>
                </svg>
              </button>
              <a className="inline-block py-1 text-gray-400 hover:text-gray-300" href="#">
                <svg width="12" height="4" viewBox="0 0 12 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 0.666626C5.73629 0.666626 5.47851 0.744825 5.25924 0.891333C5.03998 1.03784 4.86908 1.24608 4.76816 1.48971C4.66724 1.73335 4.64084 2.00144 4.69229 2.26008C4.74373 2.51872 4.87072 2.7563 5.05719 2.94277C5.24366 3.12924 5.48124 3.25623 5.73988 3.30767C5.99852 3.35912 6.26661 3.33272 6.51025 3.2318C6.75388 3.13088 6.96212 2.95998 7.10863 2.74072C7.25514 2.52145 7.33333 2.26367 7.33333 1.99996C7.33333 1.64634 7.19286 1.3072 6.94281 1.05715C6.69276 0.807102 6.35362 0.666626 6 0.666626ZM1.33333 0.666626C1.06963 0.666626 0.811839 0.744825 0.592574 0.891333C0.373308 1.03784 0.202411 1.24608 0.101495 1.48971C0.000577708 1.73335 -0.0258267 2.00144 0.0256202 2.26008C0.0770672 2.51872 0.204055 2.7563 0.390525 2.94277C0.576995 3.12924 0.814572 3.25623 1.07321 3.30767C1.33185 3.35912 1.59994 3.33272 1.84358 3.2318C2.08721 3.13088 2.29545 2.95998 2.44196 2.74072C2.58847 2.52145 2.66667 2.26367 2.66667 1.99996C2.66667 1.64634 2.52619 1.3072 2.27614 1.05715C2.02609 0.807102 1.68696 0.666626 1.33333 0.666626ZM10.6667 0.666626C10.403 0.666626 10.1452 0.744825 9.92591 0.891333C9.70664 1.03784 9.53574 1.24608 9.43483 1.48971C9.33391 1.73335 9.30751 2.00144 9.35895 2.26008C9.4104 2.51872 9.53739 2.7563 9.72386 2.94277C9.91033 3.12924 10.1479 3.25623 10.4065 3.30767C10.6652 3.35912 10.9333 3.33272 11.1769 3.2318C11.4205 3.13088 11.6288 2.95998 11.7753 2.74072C11.9218 2.52145 12 2.26367 12 1.99996C12 1.64634 11.8595 1.3072 11.6095 1.05715C11.3594 0.807102 11.0203 0.666626 10.6667 0.666626Z" fill="currentColor"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="h-1 w-full mb-4 rounded-full bg-yellow-500"></div>
          <a className="block p-4 mb-4 bg-gray-600 rounded-xl hover:bg-gray-700 transition duration-200" href="#">
            <h4 className="text-white font-semibold leading-6 mb-1">Implement Login</h4>
            <div className="flex items-center mb-4">
              <span className="h-2 w-2 mr-1 bg-pink-400 rounded-full"></span>
              <span className="text-xs font-medium text-pink-400">Development</span>
            </div>
            <p className="text-xs text-gray-300 leading-normal mb-10">This is an example task that can be used within a Kanban system.</p>
            <div className="pt-4 border-t border-gray-500">
              <div className="flex flex-wrap items-center justify-between -m-2">
                <div className="w-auto p-2">
                  <div className="flex items-center p-2 bg-gray-500 rounded-md">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.0001 2.33337H3.00008C2.2637 2.33337 1.66675 2.93033 1.66675 3.66671V11.6667C1.66675 12.4031 2.2637 13 3.00008 13H11.0001C11.7365 13 12.3334 12.4031 12.3334 11.6667V3.66671C12.3334 2.93033 11.7365 2.33337 11.0001 2.33337Z" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M9.66675 1V3.66667" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M4.3335 1V3.66667" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M1.66675 6.33337H12.3334" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M6.3335 9H7.00016" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M7 9V11" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <span className="ml-2 text-xs font-medium text-gray-200">Jul 03</span>
                  </div>
                </div>
                <div className="w-auto p-2">
                  <div className="flex h-full items-center">
                    {/* <Image className="w-7 h-7 rounded-full object-cover" src="trizzle-assets/images/avatar-women-3-circle-border.png" alt="" />
                    <Image className="w-7 h-7 -ml-3 rounded-full object-cover" src="trizzle-assets/images/avatar-women-circle-border.png" alt="" /> */}
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a className="block p-4 mb-4 bg-gray-600 rounded-xl hover:bg-gray-700 transition duration-200" href="#">
            {/* <Image className="block w-full h-28 object-cover rounded-md mb-3" src="trizzle-assets/images/working-women-laptop.png" alt="" /> */}
            <h4 className="text-white font-semibold leading-6 mb-1">Posts for Social Media</h4>
            <div className="flex items-center mb-4">
              <span className="h-2 w-2 mr-1 bg-blue-500 rounded-full"></span>
              <span className="text-xs font-medium text-blue-500">Design</span>
            </div>
            <div className="pt-4 border-t border-gray-500">
              <div className="flex flex-wrap items-center justify-between -m-2">
                <div className="w-auto p-2">
                  <div className="flex flex-wrap -m-1">
                    <div className="w-auto p-1">
                      <div className="inline-flex w-10 h-8 items-center py-1 px-2 bg-gray-400 rounded-lg">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.66675 9.3333C6.884 9.55503 7.14331 9.73118 7.4295 9.85144C7.71568 9.9717 8.02299 10.0336 8.33341 10.0336C8.64384 10.0336 8.95114 9.9717 9.23733 9.85144C9.52352 9.73118 9.78283 9.55503 10.0001 9.3333L12.6667 6.66663C13.1088 6.22461 13.3571 5.62509 13.3571 4.99997C13.3571 4.37485 13.1088 3.77533 12.6667 3.3333C12.2247 2.89127 11.6252 2.64294 11.0001 2.64294C10.375 2.64294 9.77544 2.89127 9.33341 3.3333L9.00008 3.66663" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path d="M9.33342 6.66665C9.11617 6.44492 8.85686 6.26876 8.57067 6.14851C8.28449 6.02825 7.97718 5.96631 7.66676 5.96631C7.35633 5.96631 7.04903 6.02825 6.76284 6.14851C6.47665 6.26876 6.21734 6.44492 6.00009 6.66665L3.33342 9.33332C2.89139 9.77534 2.64307 10.3749 2.64307 11C2.64307 11.6251 2.89139 12.2246 3.33342 12.6666C3.77545 13.1087 4.37497 13.357 5.00009 13.357C5.62521 13.357 6.22473 13.1087 6.66676 12.6666L7.00009 12.3333" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <span className="ml-1 text-xs text-white">2</span>
                      </div>
                    </div>
                    <div className="w-auto p-1">
                      <div className="inline-flex w-10 h-8 items-center py-1 px-2 bg-gray-400 rounded-lg">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 13.3333L2.86667 10.7333C2.11763 9.62549 1.84666 8.31358 2.10415 7.04151C2.36163 5.76943 3.13004 4.62375 4.26651 3.81749C5.40298 3.01122 6.83017 2.59924 8.28273 2.65813C9.73528 2.71703 11.1143 3.24279 12.1635 4.13768C13.2127 5.03256 13.8606 6.23567 13.9867 7.52329C14.1128 8.81092 13.7086 10.0955 12.8492 11.1381C11.9899 12.1807 10.7338 12.9104 9.31453 13.1915C7.89529 13.4727 6.40947 13.2862 5.13333 12.6666L2 13.3333Z" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path d="M8 8V8.00667" stroke="#64748B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path d="M5.33325 8V8.00667" stroke="#64748B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path d="M10.6667 8V8.00667" stroke="#64748B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <span className="ml-1 text-xs text-white">5</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-auto p-2">
                  <div className="flex h-full items-center">
                    {/* <Image className="w-7 h-7 rounded-full object-cover" src="trizzle-assets/images/avatar-women-3-circle-border.png" alt="" />
                    <Image className="w-7 h-7 -ml-3 rounded-full object-cover" src="trizzle-assets/images/avatar-women-circle-border.png" alt="" /> */}
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a className="block p-4 mb-4 bg-gray-600 rounded-xl hover:bg-gray-700 transition duration-200" href="#">
            <h4 className="text-white font-semibold leading-6 mb-1">Design Review</h4>
            <div className="flex items-center mb-4">
              <span className="h-2 w-2 mr-1 bg-purple-500 rounded-full"></span>
              <span className="text-xs font-medium text-purple-500">Design</span>
            </div>
            <div className="pt-4 border-t border-gray-500">
              <div className="flex flex-wrap items-center justify-between -m-2">
                <div className="w-auto p-2">
                  <div className="flex items-center p-2 bg-gray-500 rounded-md">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.0001 2.33337H3.00008C2.2637 2.33337 1.66675 2.93033 1.66675 3.66671V11.6667C1.66675 12.4031 2.2637 13 3.00008 13H11.0001C11.7365 13 12.3334 12.4031 12.3334 11.6667V3.66671C12.3334 2.93033 11.7365 2.33337 11.0001 2.33337Z" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M9.66675 1V3.66667" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M4.3335 1V3.66667" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M1.66675 6.33337H12.3334" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M6.3335 9H7.00016" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M7 9V11" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <span className="ml-2 text-xs font-medium text-gray-200">Jul 05</span>
                  </div>
                </div>
                <div className="w-auto p-2">
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-gray-500 rounded-full">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.47333 7.47332C10.1269 6.95909 10.604 6.25393 10.8382 5.45594C11.0723 4.65796 11.0519 3.80682 10.7799 3.02096C10.5078 2.23509 9.9975 1.55358 9.32005 1.07122C8.64259 0.588861 7.83163 0.329651 7 0.329651C6.16836 0.329651 5.35741 0.588861 4.67995 1.07122C4.0025 1.55358 3.49223 2.23509 3.22014 3.02096C2.94805 3.80682 2.92767 4.65796 3.16184 5.45594C3.396 6.25393 3.87307 6.95909 4.52666 7.47332C3.40672 7.92201 2.42952 8.66621 1.69926 9.62659C0.968996 10.587 0.51304 11.7275 0.379998 12.9266C0.370368 13.0142 0.378075 13.1028 0.402681 13.1874C0.427287 13.2719 0.468309 13.3508 0.523405 13.4195C0.634677 13.5583 0.79652 13.6472 0.973331 13.6666C1.15014 13.6861 1.32744 13.6345 1.46621 13.5232C1.60499 13.412 1.69388 13.2501 1.71333 13.0733C1.85972 11.7701 2.48112 10.5665 3.45881 9.69251C4.4365 8.8185 5.70193 8.33533 7.01333 8.33533C8.32473 8.33533 9.59016 8.8185 10.5679 9.69251C11.5455 10.5665 12.1669 11.7701 12.3133 13.0733C12.3315 13.2371 12.4096 13.3884 12.5327 13.498C12.6559 13.6076 12.8152 13.6676 12.98 13.6666H13.0533C13.2281 13.6465 13.3878 13.5582 13.4977 13.4208C13.6076 13.2835 13.6587 13.1082 13.64 12.9333C13.5063 11.7308 13.0479 10.5873 12.3139 9.62545C11.5799 8.6636 10.5979 7.91963 9.47333 7.47332ZM7 6.99998C6.47258 6.99998 5.95701 6.84358 5.51848 6.55057C5.07995 6.25755 4.73815 5.84107 4.53632 5.3538C4.33449 4.86653 4.28168 4.33036 4.38457 3.81307C4.48746 3.29579 4.74144 2.82064 5.11438 2.4477C5.48732 2.07476 5.96247 1.82078 6.47976 1.71789C6.99704 1.61499 7.53322 1.6678 8.02049 1.86964C8.50776 2.07147 8.92423 2.41326 9.21725 2.85179C9.51027 3.29033 9.66667 3.8059 9.66667 4.33331C9.66667 5.04056 9.38571 5.71884 8.88562 6.21893C8.38552 6.71903 7.70724 6.99998 7 6.99998Z" fill="#3D485B"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-8">
        <div className="max-w-sm mx-auto h-full px-4 pt-6 pb-24 bg-gray-500 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <h3 className="text-lg text-white font-semibold mr-2">In progress</h3>
              <span className="inline-flex items-center justify-center w-6 h-7 rounded-full bg-gray-600 text-xs font-medium text-gray-400">2</span>
            </div>
            <div>
              <button className="inline-block mr-2 text-gray-400 hover:text-gray-300">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.6667 5.33329H6.66675V1.33329C6.66675 1.15648 6.59651 0.986913 6.47149 0.861888C6.34646 0.736864 6.17689 0.666626 6.00008 0.666626C5.82327 0.666626 5.6537 0.736864 5.52868 0.861888C5.40365 0.986913 5.33342 1.15648 5.33342 1.33329V5.33329H1.33341C1.1566 5.33329 0.987035 5.40353 0.86201 5.52855C0.736986 5.65358 0.666748 5.82315 0.666748 5.99996C0.666748 6.17677 0.736986 6.34634 0.86201 6.47136C0.987035 6.59639 1.1566 6.66663 1.33341 6.66663H5.33342V10.6666C5.33342 10.8434 5.40365 11.013 5.52868 11.138C5.6537 11.2631 5.82327 11.3333 6.00008 11.3333C6.17689 11.3333 6.34646 11.2631 6.47149 11.138C6.59651 11.013 6.66675 10.8434 6.66675 10.6666V6.66663H10.6667C10.8436 6.66663 11.0131 6.59639 11.1382 6.47136C11.2632 6.34634 11.3334 6.17677 11.3334 5.99996C11.3334 5.82315 11.2632 5.65358 11.1382 5.52855C11.0131 5.40353 10.8436 5.33329 10.6667 5.33329Z" fill="currentColor"></path>
                </svg>
              </button>
              <a className="inline-block py-1 text-gray-400 hover:text-gray-300" href="#">
                <svg width="12" height="4" viewBox="0 0 12 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 0.666626C5.73629 0.666626 5.47851 0.744825 5.25924 0.891333C5.03998 1.03784 4.86908 1.24608 4.76816 1.48971C4.66724 1.73335 4.64084 2.00144 4.69229 2.26008C4.74373 2.51872 4.87072 2.7563 5.05719 2.94277C5.24366 3.12924 5.48124 3.25623 5.73988 3.30767C5.99852 3.35912 6.26661 3.33272 6.51025 3.2318C6.75388 3.13088 6.96212 2.95998 7.10863 2.74072C7.25514 2.52145 7.33333 2.26367 7.33333 1.99996C7.33333 1.64634 7.19286 1.3072 6.94281 1.05715C6.69276 0.807102 6.35362 0.666626 6 0.666626ZM1.33333 0.666626C1.06963 0.666626 0.811839 0.744825 0.592574 0.891333C0.373308 1.03784 0.202411 1.24608 0.101495 1.48971C0.000577708 1.73335 -0.0258267 2.00144 0.0256202 2.26008C0.0770672 2.51872 0.204055 2.7563 0.390525 2.94277C0.576995 3.12924 0.814572 3.25623 1.07321 3.30767C1.33185 3.35912 1.59994 3.33272 1.84358 3.2318C2.08721 3.13088 2.29545 2.95998 2.44196 2.74072C2.58847 2.52145 2.66667 2.26367 2.66667 1.99996C2.66667 1.64634 2.52619 1.3072 2.27614 1.05715C2.02609 0.807102 1.68696 0.666626 1.33333 0.666626ZM10.6667 0.666626C10.403 0.666626 10.1452 0.744825 9.92591 0.891333C9.70664 1.03784 9.53574 1.24608 9.43483 1.48971C9.33391 1.73335 9.30751 2.00144 9.35895 2.26008C9.4104 2.51872 9.53739 2.7563 9.72386 2.94277C9.91033 3.12924 10.1479 3.25623 10.4065 3.30767C10.6652 3.35912 10.9333 3.33272 11.1769 3.2318C11.4205 3.13088 11.6288 2.95998 11.7753 2.74072C11.9218 2.52145 12 2.26367 12 1.99996C12 1.64634 11.8595 1.3072 11.6095 1.05715C11.3594 0.807102 11.0203 0.666626 10.6667 0.666626Z" fill="currentColor"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="h-1 w-full mb-4 rounded-full bg-blue-500"></div>
          <a className="block p-4 mb-4 bg-gray-600 rounded-xl hover:bg-gray-700 transition duration-200" href="#">
            <h4 className="text-white font-semibold leading-6 mb-1">UI Adjustments</h4>
            <div className="flex items-center mb-4">
              <span className="h-2 w-2 mr-1 bg-purple-500 rounded-full"></span>
              <span className="text-xs font-medium text-purple-500">Design</span>
            </div>
            <p className="text-xs text-gray-300 leading-normal mb-10">This is an example task that can be used within a Kanban system.</p>
            <div className="pt-4 border-t border-gray-500">
              <div className="flex flex-wrap items-center justify-between -m-2">
                <div className="w-auto p-2">
                  <div className="flex items-center p-2 bg-gray-500 rounded-md">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.0001 2.33337H3.00008C2.2637 2.33337 1.66675 2.93033 1.66675 3.66671V11.6667C1.66675 12.4031 2.2637 13 3.00008 13H11.0001C11.7365 13 12.3334 12.4031 12.3334 11.6667V3.66671C12.3334 2.93033 11.7365 2.33337 11.0001 2.33337Z" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M9.66675 1V3.66667" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M4.3335 1V3.66667" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M1.66675 6.33337H12.3334" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M6.3335 9H7.00016" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M7 9V11" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <span className="ml-2 text-xs font-medium text-gray-200">Jul 03</span>
                  </div>
                </div>
                <div className="w-auto p-2">
                  <div className="flex h-full items-center">
                    {/* <Image className="w-7 h-7 rounded-full object-cover" src="trizzle-assets/images/avatar-women-3-circle-border.png" alt="" />
                    <Image className="w-7 h-7 -ml-3 rounded-full object-cover" src="trizzle-assets/images/avatar-women-circle-border.png" alt="" /> */}
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a className="block p-4 mb-4 bg-gray-600 rounded-xl hover:bg-gray-700 transition duration-200" href="#">
            <h4 className="text-white font-semibold leading-6 mb-1">Design Review</h4>
            <div className="flex items-center mb-4">
              <span className="h-2 w-2 mr-1 bg-purple-500 rounded-full"></span>
              <span className="text-xs font-medium text-purple-500">Design</span>
            </div>
            <div className="pt-4 border-t border-gray-500">
              <div className="flex flex-wrap items-center justify-between -m-2">
                <div className="w-auto p-2">
                  <div className="flex items-center p-2 bg-gray-500 rounded-md">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.0001 2.33337H3.00008C2.2637 2.33337 1.66675 2.93033 1.66675 3.66671V11.6667C1.66675 12.4031 2.2637 13 3.00008 13H11.0001C11.7365 13 12.3334 12.4031 12.3334 11.6667V3.66671C12.3334 2.93033 11.7365 2.33337 11.0001 2.33337Z" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M9.66675 1V3.66667" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M4.3335 1V3.66667" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M1.66675 6.33337H12.3334" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M6.3335 9H7.00016" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M7 9V11" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <span className="ml-2 text-xs font-medium text-gray-200">Jul 05</span>
                  </div>
                </div>
                <div className="w-auto p-2">
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-gray-500 rounded-full">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.47333 7.47332C10.1269 6.95909 10.604 6.25393 10.8382 5.45594C11.0723 4.65796 11.0519 3.80682 10.7799 3.02096C10.5078 2.23509 9.9975 1.55358 9.32005 1.07122C8.64259 0.588861 7.83163 0.329651 7 0.329651C6.16836 0.329651 5.35741 0.588861 4.67995 1.07122C4.0025 1.55358 3.49223 2.23509 3.22014 3.02096C2.94805 3.80682 2.92767 4.65796 3.16184 5.45594C3.396 6.25393 3.87307 6.95909 4.52666 7.47332C3.40672 7.92201 2.42952 8.66621 1.69926 9.62659C0.968996 10.587 0.51304 11.7275 0.379998 12.9266C0.370368 13.0142 0.378075 13.1028 0.402681 13.1874C0.427287 13.2719 0.468309 13.3508 0.523405 13.4195C0.634677 13.5583 0.79652 13.6472 0.973331 13.6666C1.15014 13.6861 1.32744 13.6345 1.46621 13.5232C1.60499 13.412 1.69388 13.2501 1.71333 13.0733C1.85972 11.7701 2.48112 10.5665 3.45881 9.69251C4.4365 8.8185 5.70193 8.33533 7.01333 8.33533C8.32473 8.33533 9.59016 8.8185 10.5679 9.69251C11.5455 10.5665 12.1669 11.7701 12.3133 13.0733C12.3315 13.2371 12.4096 13.3884 12.5327 13.498C12.6559 13.6076 12.8152 13.6676 12.98 13.6666H13.0533C13.2281 13.6465 13.3878 13.5582 13.4977 13.4208C13.6076 13.2835 13.6587 13.1082 13.64 12.9333C13.5063 11.7308 13.0479 10.5873 12.3139 9.62545C11.5799 8.6636 10.5979 7.91963 9.47333 7.47332ZM7 6.99998C6.47258 6.99998 5.95701 6.84358 5.51848 6.55057C5.07995 6.25755 4.73815 5.84107 4.53632 5.3538C4.33449 4.86653 4.28168 4.33036 4.38457 3.81307C4.48746 3.29579 4.74144 2.82064 5.11438 2.4477C5.48732 2.07476 5.96247 1.82078 6.47976 1.71789C6.99704 1.61499 7.53322 1.6678 8.02049 1.86964C8.50776 2.07147 8.92423 2.41326 9.21725 2.85179C9.51027 3.29033 9.66667 3.8059 9.66667 4.33331C9.66667 5.04056 9.38571 5.71884 8.88562 6.21893C8.38552 6.71903 7.70724 6.99998 7 6.99998Z" fill="#3D485B"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a className="block p-4 mb-4 bg-gray-600 rounded-xl hover:bg-gray-700 transition duration-200" href="#">
            <h4 className="text-white font-semibold leading-6 mb-1">Shuffle Improvements</h4>
            <div className="flex items-center mb-4">
              <span className="h-2 w-2 mr-1 bg-green-500 rounded-full"></span>
              <span className="text-xs font-medium text-green-500">Planning</span>
            </div>
            {/* <Image className="block w-full h-28 object-cover rounded-md mb-3" src="trizzle-assets/images/laptop-photo-placeholder.png" alt="" /> */}
            <p className="text-xs text-gray-300 mb-4">This is an example task that can be used within a Kanban system.</p>
            <div className="pt-4 border-t border-gray-500">
              <div className="flex flex-wrap items-center justify-between -m-2">
                <div className="w-auto p-2">
                  <div className="flex items-center p-2 bg-gray-500 rounded-md">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.0001 2.33337H3.00008C2.2637 2.33337 1.66675 2.93033 1.66675 3.66671V11.6667C1.66675 12.4031 2.2637 13 3.00008 13H11.0001C11.7365 13 12.3334 12.4031 12.3334 11.6667V3.66671C12.3334 2.93033 11.7365 2.33337 11.0001 2.33337Z" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M9.66675 1V3.66667" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M4.3335 1V3.66667" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M1.66675 6.33337H12.3334" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M6.3335 9H7.00016" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M7 9V11" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <span className="ml-2 text-xs font-medium text-gray-200">Jul 05</span>
                  </div>
                </div>
                <div className="w-auto p-2">
                  <div className="flex h-full items-center">
                    {/* <Image className="w-7 h-7 rounded-full object-cover" src="trizzle-assets/images/avatar-women-circle-border.png" alt="" />
                    <Image className="w-7 h-7 -ml-3 rounded-full object-cover" src="trizzle-assets/images/avatar-men-2-circle-border.png" alt="" /> */}
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      </>
    )
}


        // <div className="flex flex-wrap -m-4">
        //     <div className="p-4 lg:w-1/3">
        //         <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
        //         <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
        //         <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Raclette Blueberry Nextious Level</h1>
        //         <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
        //         <Link href={"/"} legacyBehavior>
        //             <a className="text-indigo-500 inline-flex items-center">Learn More
        //                 <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        //                 <path d="M5 12h14"></path>
        //                 <path d="M12 5l7 7-7 7"></path>
        //                 </svg>
        //             </a>
        //         </Link>
        //         <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
        //             <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
        //             <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        //                 <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        //                 <circle cx="12" cy="12" r="3"></circle>
        //             </svg>1.2K
        //             </span>
        //             <span className="text-gray-400 inline-flex items-center leading-none text-sm">
        //             <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        //                 <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
        //             </svg>6
        //             </span>
        //         </div>
        //         </div>
        //     </div>
        //     <div className="p-4 lg:w-1/3">
        //         <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
        //         <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
        //         <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Ennui Snackwave Thundercats</h1>
        //         <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
        //         <a className="text-indigo-500 inline-flex items-center">Learn More
        //             <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        //             <path d="M5 12h14"></path>
        //             <path d="M12 5l7 7-7 7"></path>
        //             </svg>
        //         </a>
        //         <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
        //             <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
        //             <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        //                 <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        //                 <circle cx="12" cy="12" r="3"></circle>
        //             </svg>1.2K
        //             </span>
        //             <span className="text-gray-400 inline-flex items-center leading-none text-sm">
        //             <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        //                 <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
        //             </svg>6
        //             </span>
        //         </div>
        //         </div>
        //     </div>
        //     <div className="p-4 lg:w-1/3">
        //         <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
        //         <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
        //         <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Selvage Poke Waistcoat Godard</h1>
        //         <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
        //         <a className="text-indigo-500 inline-flex items-center">Learn More
        //             <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        //             <path d="M5 12h14"></path>
        //             <path d="M12 5l7 7-7 7"></path>
        //             </svg>
        //         </a>
        //         <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
        //             <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
        //             <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        //                 <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        //                 <circle cx="12" cy="12" r="3"></circle>
        //             </svg>1.2K
        //             </span>
        //             <span className="text-gray-400 inline-flex items-center leading-none text-sm">
        //             <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        //                 <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
        //             </svg>6
        //             </span>
        //         </div>
        //         </div>
        //     </div>
        // </div>