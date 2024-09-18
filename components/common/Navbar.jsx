// import React from "react";
// import {
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
//   Menu,
//   MenuButton,
//   MenuItem,
//   MenuItems,
// } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
// import { useRouter } from "next/router";
// import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
// import logo from "@/public/logo/logo_harvv.png";
// import Link from "next/link";

// function Navbar({ activePage }) {
//   const router = useRouter();
//   const navigation = [
//     {
//       name: "Home",
//       href: "/home",
//       current: activePage === "home" ? true : false,
//     },
//     {
//       name: "Pricing",
//       href: "/pricing",
//       current: activePage === "pricing" ? true : false,
//     },
//     {
//       name: "Industries",
//       href: "#",
//       current: false,
//       children: [
//         {
//           name: "PowerSports",
//           href: "/industries/powersports",
//           current: activePage === "power-sports" ? true : false,
//           icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M17.18 18C19.58 18 20.18 16.65 20.18 15V9C20.18 7.35 19.58 6 17.18 6C14.78 6 14.18 7.35 14.18 9V15C14.18 16.65 14.78 18 17.18 18Z" stroke="#FF007A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.82001 18C4.42001 18 3.82001 16.65 3.82001 15V9C3.82001 7.35 4.42001 6 6.82001 6C9.22001 6 9.82001 7.35 9.82001 9V15C9.82001 16.65 9.22001 18 6.82001 18Z" stroke="#FF007A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.82001 12H14.18" stroke="#FF007A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M22.5 14.5V9.5" stroke="#FF007A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M1.5 14.5V9.5" stroke="#FF007A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
//         },
//         {
//           name: "Solar Distribution & Manufacturers",
//           href: "/industries/solar",
//           current: activePage === "solar" ? true : false,
//           icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2V4M12 20V22M4 12H2M6.31412 6.31412L4.8999 4.8999M17.6859 6.31412L19.1001 4.8999M6.31412 17.69L4.8999 19.1042M17.6859 17.69L19.1001 19.1042M22 12H20M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" stroke="#FF007A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
//         },
//       ],
//     },
//     {
//       name: "Customer Support",
//       href: "/customer-support",
//       current: activePage === "customer-support" ? true : false,
//     },
//     {
//       name: "About Us",
//       href: "/about-us",
//       current: activePage === "about-us" ? true : false,
//     },
//   ];
//   function classNames(...classes) {
//     return classes.filter(Boolean).join(" ");
//   }
//   return (
//     <>
//       <Disclosure as="nav" className="w-full bg-[#fff] navbar-wrapper">
//         <div className="w-full bg-white px-2 sm:px-6 lg:px-12 lg:py-4 lg:pt-0">
//           <div className="relative flex h-16 items-center justify-between">
//             <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//               {/* Mobile menu button*/}
//               <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                 <span className="absolute -inset-0.5" />
//                 <span className="sr-only">Open main menu</span>
//                 <Bars3Icon
//                   aria-hidden="true"
//                   className="block h-6 w-6 group-data-[open]:hidden"
//                 />
//                 <XMarkIcon
//                   aria-hidden="true"
//                   className="hidden h-6 w-6 group-data-[open]:block"
//                 />
//               </DisclosureButton>
//             </div>
//             <div className="flex w-full flex-1 items-center justify-center sm:items-center sm:justify-between">
//               <div className="flex flex-shrink-0 items-center">
//                 <img
//                   alt="Harvv Logo"
//                   src={logo.src}
//                   onClick={() => {
//                     router.push("/home");
//                   }}
//                   className="h-8 w-auto cursor-pointer"
//                 />
//               </div>
//               <div className="hidden navbar-links-wrapper sm:ml-6 sm:block">
//                 <div className="flex space-x-6">
//                   {navigation.map((item) => (
//                     <div
//                       key={item.name}
//                       className="relative flex justify-center items-center"
//                     >
//                       {item.children ? (
//                         <Menu
//                           as="div"
//                           className="relative inline-block text-left"
//                         >
//                           <div>
//                             <MenuButton
//                               className={
//                                 "navbar-link hover:text-[#FF007A] rounded-md px-3 py-2 text-sm font-medium flex w-full justify-center items-center gap-x-1.5"
//                               }
//                             >
//                               {item.name}
//                               <ChevronDownIcon
//                                 aria-hidden="true"
//                                 className="-mr-1 h-5 w-5 navbar-link hover:text-[#FF007A]"
//                               />
//                             </MenuButton>
//                           </div>

//                           <MenuItems
//                             transition
//                             className="absolute z-10 mt-2 min-w-96 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
//                           >
//                             {item.children.map((child) => (
//                               <div className="py-1">
//                                 <MenuItem>
//                                   <button
//                                     onClick={() => {
//                                       router.push(child.href);
//                                     }}
//                                     key={child.name}
//                                     className={classNames(
//                                       child.current
//                                         ? "navbar-child-heading-active text-[#FF007A]"
//                                         : "navbar-child-heading hover:text-[#FF007A]",
//                                       "flex justify-start items-center text-start gap-2 w-full px-3 py-2"
//                                     )}
//                                   >
//                                     <div
//                                       dangerouslySetInnerHTML={{
//                                         __html: child.icon,
//                                       }}
//                                     />
//                                     <div>{child.name}</div>
//                                   </button>
//                                 </MenuItem>
//                               </div>
//                             ))}
//                           </MenuItems>
//                         </Menu>
//                       ) : (
//                         <button
//                           type="button"
//                           onClick={() => router.push(item.href)}
//                           className={classNames(
//                             item.current
//                               ? "navbar-link-active text-[#FF007A]"
//                               : "navbar-link hover:text-[#FF007A]",
//                             "rounded-md px-3 py-2 text-sm font-medium"
//                           )}
//                         >
//                           {item.name}
//                         </button>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="absolute hidden inset-y-0 right-0 md:flex items-center pr-2 gap-x-3 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//                 <Link
//                   target="_blank"
//                   href={"https://b2b.harvv.com/"}
//                   className="navbar-login-button"
//                 >
//                   Log In
//                 </Link>
//                 <Link
//                   target="_blank"
//                   href={"https://b2b.harvv.com/register"}
//                   className="navbar-sign-up-button"
//                 >
//                   Sign Up
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>

//         <DisclosurePanel className="sm:hidden">
//           <div className="space-y-1 px-2 pb-3 pt-2 w-full">
//             {navigation.map((item) => (
//               <div
//                 key={item.name}
//                 className="relative w-full flex justify-center items-center"
//               >
//                 {item.children ? (
//                   <Menu
//                     as="div"
//                     className="relative w-full inline-block text-left"
//                   >
//                     <div>
//                       <MenuButton
//                         className={
//                           "navbar-link hover:text-[#FF007A] rounded-md px-3 py-2 text-sm font-medium flex w-full justify-between items-center gap-x-1.5"
//                         }
//                       >
//                         {item.name}
//                         <ChevronDownIcon
//                           aria-hidden="true"
//                           className="-mr-1 h-5 w-5 navbar-link hover:text-[#FF007A]"
//                         />
//                       </MenuButton>
//                     </div>

//                     <MenuItems
//                       transition
//                       className="absolute w-full right-0 z-10 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
//                     >
//                       <div className="py-1">
//                         {item.children.map((child) => (
//                           <MenuItem>
//                             <button
//                               onClick={() => {
//                                 router.push(child.href);
//                               }}
//                               key={child.name}
//                               className={classNames(
//                                 child.current
//                                   ? "navbar-child-heading-active text-[#FF007A]"
//                                   : "navbar-child-heading hover:text-[#FF007A]",
//                                 "flex justify-start items-center text-start gap-2 w-full px-3 py-2"
//                               )}
//                             >
//                               <div
//                                 dangerouslySetInnerHTML={{
//                                   __html: child.icon,
//                                 }}
//                               />
//                               <div>{child.name}</div>
//                             </button>
//                           </MenuItem>
//                         ))}
//                       </div>
//                     </MenuItems>
//                   </Menu>
//                 ) : (
//                   <DisclosureButton
//                     key={item.name}
//                     as="a"
//                     href={item.href}
//                     aria-current={item.current ? "page" : undefined}
//                     style={{
//                       filter: item.current
//                         ? "drop-shadow(0px 0px 4px #FF007A)"
//                         : "",
//                     }}
//                     className={classNames(
//                       item.current
//                         ? "navbar-link-active bg-[#FF007A] text-white"
//                         : "navbar-link hover:text-[#FF007A]",
//                       "block w-full rounded-md px-3 py-2 text-base font-medium"
//                     )}
//                   >
//                     {item.name}
//                   </DisclosureButton>
//                 )}
//               </div>
//             ))}
//           </div>
//           <div className="w-full p-2 flex md:hidden items-center justify-center flex-col gap-3">
//             <Link
//               target="_blank"
//               href={"https://b2b.harvv.com/"}
//               className="navbar-login-button w-full border text-center"
//             >
//               Log In
//             </Link>
//             <Link
//               target="_blank"
//               href={"https://b2b.harvv.com/register"}
//               className="navbar-sign-up-button w-full text-center"
//             >
//               Sign Up
//             </Link>
//           </div>
//         </DisclosurePanel>
//       </Disclosure>
//     </>
//   );
// }

// export default Navbar;

import React, { useEffect, useState } from "react";
import {
  Disclosure,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "@/public/logo/logo_harvv.png";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";

function Navbar({ activePage }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    console.log(activePage);
  }, [activePage]);

  const navigation = [
    { name: "Home", href: "/home", current: activePage === "home" },
    { name: "Pricing", href: "/pricing", current: activePage === "pricing" },
    {
      name: "Industries",
      href: "#",
      current: false,
      children: [
        {
          name: "PowerSports",
          href: "/industries/powersports",
          current: activePage === "power-sports",
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M17.18 18C19.58 18 20.18 16.65 20.18 15V9C20.18 7.35 19.58 6 17.18 6C14.78 6 14.18 7.35 14.18 9V15C14.18 16.65 14.78 18 17.18 18Z" stroke="#FF007A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.82001 18C4.42001 18 3.82001 16.65 3.82001 15V9C3.82001 7.35 4.42001 6 6.82001 6C9.22001 6 9.82001 7.35 9.82001 9V15C9.82001 16.65 9.22001 18 6.82001 18Z" stroke="#FF007A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.82001 12H14.18" stroke="#FF007A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M22.5 14.5V9.5" stroke="#FF007A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M1.5 14.5V9.5" stroke="#FF007A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        },
        {
          name: "Solar Distribution & Manufacturers",
          href: "/industries/solar",
          current: activePage === "solar",
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2V4M12 20V22M4 12H2M6.31412 6.31412L4.8999 4.8999M17.6859 6.31412L19.1001 4.8999M6.31412 17.69L4.8999 19.1042M17.6859 17.69L19.1001 19.1042M22 12H20M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" stroke="#FF007A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        },
      ],
    },
    {
      name: "Customer Support",
      href: "/customer-support",
      current: activePage === "customer-support",
    },
    { name: "About Us", href: "/about-us", current: activePage === "about-us" },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <Head>
        <title>Harvv Financing</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Navbar */}
      <Disclosure as="nav" className="w-full bg-[#fff] navbar-wrapper">
        <div className="w-full bg-white px-2 sm:px-6 lg:px-12 lg:py-4 lg:pt-0">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <button
                onClick={toggleDrawer}
                className="inline-flex items-center justify-center p-2"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen && <Bars3Icon className="block h-8 w-8" />}
              </button>
            </div>
            <div className="flex w-full items-center justify-center sm:items-center sm:justify-between">
              <div className="flex flex-shrink-0 items-center">
                <img
                  alt="Harvv Logo"
                  src={logo.src}
                  onClick={() => router.push("/home")}
                  className="h-8 w-auto cursor-pointer"
                />
              </div>
              <div className="hidden navbar-links-wrapper sm:ml-6 sm:flex">
                <div className="flex space-x-6">
                  {navigation.map((item) => (
                    <div
                      key={item.name}
                      className="relative flex justify-center items-center"
                    >
                      {item.children ? (
                        <Menu
                          as="div"
                          className="relative inline-block text-left"
                        >
                          <div>
                            <MenuButton
                              className={
                                "navbar-link hover:text-[#FF007A] rounded-md px-3 py-2 text-sm font-medium flex w-full justify-center items-center gap-x-1.5"
                              }
                            >
                              {item.name}
                              <ChevronDownIcon className="-mr-1 h-5 w-5 navbar-link hover:text-[#FF007A]" />
                            </MenuButton>
                          </div>

                          <MenuItems className="absolute z-10 mt-2 min-w-96 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                            {item.children.map((child) => (
                              <MenuItem key={child.name}>
                                <button
                                  onClick={() => router.push(child.href)}
                                  className={classNames(
                                    child.current
                                      ? "navbar-child-heading-active text-[#FF007A]"
                                      : "navbar-child-heading hover:text-[#FF007A]",
                                    "flex justify-start items-center text-start gap-2 w-full px-3 py-2"
                                  )}
                                >
                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html: child.icon,
                                    }}
                                  />
                                  <div>{child.name}</div>
                                </button>
                              </MenuItem>
                            ))}
                          </MenuItems>
                        </Menu>
                      ) : (
                        <button
                          type="button"
                          onClick={() => router.push(item.href)}
                          className={classNames(
                            item.current
                              ? "navbar-link-active text-[#FF007A]"
                              : "navbar-link hover:text-[#FF007A]",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                        >
                          {item.name}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute hidden inset-y-0 right-0 md:flex items-center pr-2 gap-x-3 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Link
                  target="_blank"
                  href="https://b2b.harvv.com/"
                  className="navbar-login-button"
                >
                  Log In
                </Link>
                <Link
                  target="_blank"
                  href="https://b2b.harvv.com/register"
                  className="navbar-sign-up-button"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>

      {/* Side Drawer */}
      <div
        className={`fixed inset-0 z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-700 bg-white w-64 h-full shadow-lg`}
      >
        <div className="p-4 flex w-full flex-col gap-6">
          <div className="flex w-full justify-between items-center flex-row">
            <img
              alt="Harvv Logo"
              src={logo.src}
              onClick={() => router.push("/home")}
              className="h-8 w-auto cursor-pointer"
            />
            <button onClick={toggleDrawer} className="self-end">
              <XMarkIcon className="block h-6 w-6" />
            </button>
          </div>
          <ul className="w-full">
            {navigation.map((item) => (
              <li key={item.name} className="mb-2 bg-white w-full">
                {item.children ? (
                  <Menu
                    as="div"
                    className="relative w-full inline-block text-left"
                  >
                    <MenuButton className="navbar-link border hover:text-[#FF007A] rounded-md px-3 py-2 text-sm font-medium flex w-full justify-between items-center gap-x-1.5">
                      {item.name}
                      <ChevronDownIcon className="-mr-1 h-5 w-5 navbar-link hover:text-[#FF007A]" />
                    </MenuButton>
                    <MenuItems className="absolute z-10 mt-2 w-full rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                      {item.children.map((child) => (
                        <MenuItem key={child.name}>
                          <button
                            onClick={() => router.push(child.href)}
                            className={classNames(
                              child.current
                                ? "navbar-child-heading-active text-[#FF007A]"
                                : "navbar-child-heading hover:text-[#FF007A]",
                              "flex justify-start items-center text-start gap-2 w-full px-3 py-2"
                            )}
                          >
                            <div
                              dangerouslySetInnerHTML={{ __html: child.icon }}
                            />
                            <div>{child.name}</div>
                          </button>
                        </MenuItem>
                      ))}
                    </MenuItems>
                  </Menu>
                ) : (
                  <div className="w-full flex">
                    <Link
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "navbar-link-active text-[#FF007A]"
                          : "navbar-link hover:text-[#FF007A]",
                        "border rounded-md w-full text-start px-3 py-2"
                      )}
                    >
                      {item.name}
                    </Link>
                  </div>
                )}
              </li>
            ))}
            <li className="mb-2 mt-5 bg-white w-full">
              <Link
                target="_blank"
                href="https://b2b.harvv.com/"
                className="navbar-login-button w-full border flex justify-center items-center"
              >
                Log In
              </Link>
            </li>
            <li className="mb-2 bg-white w-full">
              <Link
                target="_blank"
                href="https://b2b.harvv.com/register"
                className="navbar-sign-up-button w-full flex justify-center items-center"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay for blurring background */}
      {isOpen && (
        <div
          onClick={toggleDrawer}
          className="fixed inset-0 z-30 bg-black bg-opacity-50 backdrop-blur-sm"
        ></div>
      )}
    </>
  );
}

export default Navbar;
