/* eslint-disable no-unused-vars */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import { Dialog } from "@headlessui/react";

const navigation = [
  { name: "Home", component: "/", current: false },
  { name: "Diagnosis", component: "/check", current: false },
  // { name: "Contact", component: "/contact", current: false },
  { name: "Team", component: "/team", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.component}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div> */}
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.component}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                {/* <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div> */}
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
    // <Disclosure as="nav" className="bg-gray-800">
    //   {({ open }) => (
    //     <>
    //       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    //         <div className="relative flex h-16 items-center justify-between">
    //           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
    //             {/* Mobile menu button*/}
    //             <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
    //               <span className="sr-only">Open main menu</span>
    //               {open ? (
    //                 <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
    //               ) : (
    //                 <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
    //               )}
    //             </Disclosure.Button>
    //           </div>
    //           <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
    //             <div className="flex flex-shrink-0 items-center">
    //               <img
    //                 className="block h-8 w-auto lg:hidden"
    //                 src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
    //                 alt="Your Company"
    //               />
    //               <img
    //                 className="hidden h-8 w-auto lg:block"
    //                 src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
    //                 alt="Your Company"
    //               />
    //             </div>
    //             <div className="hidden sm:ml-6 sm:block">
    //               <div className="flex space-x-4 cursor-pointer">
    //                 {navigation.map((item) => (
    //                   <NavLink
    //                     key={item.name}
    //                     to={item.component}
    //                     activeclassname="bg-gray-900 text-white"
    //                     className={classNames(
    //                       "text-gray-300 hover:bg-gray-700 hover:text-white",
    //                       "rounded-md px-3 py-2 text-sm font-medium"
    //                     )}
    //                     aria-current={item.current ? "page" : undefined}
    //                   >
    //                     {item.name}
    //                   </NavLink>
    //                 ))}
    //               </div>
    //             </div>
    //           </div>
    //           <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
    //             {/* <button
    //               type="button"
    //               className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
    //             >
    //               <span className="sr-only">View notifications</span>
    //               <BellIcon className="h-6 w-6" aria-hidden="true" />
    //             </button> */}

    //             {/* Profile dropdown */}
    //             {/* <Menu as="div" className="relative ml-3">
    //               <div>
    //                 <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
    //                   <span className="sr-only">Open user menu</span>
    //                   <img
    //                     className="h-8 w-8 rounded-full"
    //                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    //                     alt=""
    //                   />
    //                 </Menu.Button>
    //               </div>
    //               <Transition
    //                 as={Fragment}
    //                 enter="transition ease-out duration-100"
    //                 enterFrom="transform opacity-0 scale-95"
    //                 enterTo="transform opacity-100 scale-100"
    //                 leave="transition ease-in duration-75"
    //                 leaveFrom="transform opacity-100 scale-100"
    //                 leaveTo="transform opacity-0 scale-95"
    //               >
    //                 <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
    //                   <Menu.Item>
    //                     {({ active }) => (
    //                       <a
    //                         href="#"
    //                         className={classNames(
    //                           active ? "bg-gray-100" : "",
    //                           "block px-4 py-2 text-sm text-gray-700"
    //                         )}
    //                       >
    //                         Your Profile
    //                       </a>
    //                     )}
    //                   </Menu.Item>
    //                   <Menu.Item>
    //                     {({ active }) => (
    //                       <a
    //                         href="#"
    //                         className={classNames(
    //                           active ? "bg-gray-100" : "",
    //                           "block px-4 py-2 text-sm text-gray-700"
    //                         )}
    //                       >
    //                         Settings
    //                       </a>
    //                     )}
    //                   </Menu.Item>
    //                   <Menu.Item>
    //                     {({ active }) => (
    //                       <a
    //                         href="#"
    //                         className={classNames(
    //                           active ? "bg-gray-100" : "",
    //                           "block px-4 py-2 text-sm text-gray-700"
    //                         )}
    //                       >
    //                         Sign out
    //                       </a>
    //                     )}
    //                   </Menu.Item>
    //                 </Menu.Items>
    //               </Transition>
    //             </Menu> */}
    //           </div>
    //         </div>
    //       </div>

    //       <Disclosure.Panel className="sm:hidden">
    //         <div className="space-y-1 px-2 pb-3 pt-2">
    //           {navigation.map((item) => (
    //             <Disclosure.Button
    //               key={item.name}
    //               as="a"
    //               href={item.component}
    //               className={classNames(
    //                 item.current
    //                   ? "bg-gray-900 text-white"
    //                   : "text-gray-300 hover:bg-gray-700 hover:text-white",
    //                 "block rounded-md px-3 py-2 text-base font-medium"
    //               )}
    //               aria-current={item.current ? "page" : undefined}
    //             >
    //               {item.name}
    //             </Disclosure.Button>
    //           ))}
    //         </div>
    //       </Disclosure.Panel>
    //     </>
    //   )}
    // </Disclosure>
  );
}
