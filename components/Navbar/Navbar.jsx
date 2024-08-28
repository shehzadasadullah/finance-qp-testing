import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/router";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "@/public/logo/logo_harvv.png";

function Navbar({ activePage }) {
  const router = useRouter();
  const navigation = [
    {
      name: "Home",
      href: "/home",
      current: activePage === "home" ? true : false,
    },
    {
      name: "Pricing",
      href: "/pricing",
      current: activePage === "pricing" ? true : false,
    },
    {
      name: "Industries",
      href: "#",
      current: false,
      children: [
        {
          name: "Power Sports",
          href: "/industries/powersports",
          current: activePage === "power-sports" ? true : false,
        },
        {
          name: "Solar",
          href: "/industries/solar",
          current: activePage === "solar" ? true : false,
        },
      ],
    },
    {
      name: "Customer Support",
      href: "/customer-support",
      current: activePage === "customer-support" ? true : false,
    },
    {
      name: "About Us",
      href: "/about-us",
      current: activePage === "about-us" ? true : false,
    },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      <Disclosure as="nav" className="w-full bg-[#fff] navbar-wrapper">
        <div className="w-full bg-white px-2 sm:px-6 lg:px-12 lg:py-4 lg:pt-0">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block h-6 w-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden h-6 w-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>
            <div className="flex w-full flex-1 items-center justify-center sm:items-center sm:justify-between">
              <div className="flex flex-shrink-0 items-center">
                <img
                  alt="Harvv Logo"
                  src={logo.src}
                  onClick={() => {
                    router.push("/home");
                  }}
                  className="h-8 w-auto cursor-pointer"
                />
              </div>
              <div className="hidden navbar-links-wrapper sm:ml-6 sm:block">
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
                              <ChevronDownIcon
                                aria-hidden="true"
                                className="-mr-1 h-5 w-5 navbar-link hover:text-[#FF007A]"
                              />
                            </MenuButton>
                          </div>

                          <MenuItems
                            transition
                            className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                          >
                            {item.children.map((child) => (
                              <div className="py-1">
                                <MenuItem>
                                  <button
                                    onClick={() => {
                                      router.push(child.href);
                                    }}
                                    key={child.name}
                                    className={classNames(
                                      child.current
                                        ? "navbar-link-active text-[#FF007A]"
                                        : "navbar-link hover:text-[#FF007A]",
                                      "rounded-md block w-full px-3 py-2 text-sm font-medium"
                                    )}
                                  >
                                    {child.name}
                                  </button>
                                </MenuItem>
                              </div>
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
                <a
                  href={"https://b2b.harvv.com/"}
                  className="navbar-login-button"
                >
                  Log In
                </a>
                <a
                  href={"https://b2b.harvv.com/register"}
                  className="navbar-sign-up-button"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 w-full">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative w-full flex justify-center items-center"
              >
                {item.children ? (
                  <Menu
                    as="div"
                    className="relative w-full inline-block text-left"
                  >
                    <div>
                      <MenuButton
                        className={
                          "navbar-link hover:text-[#FF007A] rounded-md px-3 py-2 text-sm font-medium flex w-full justify-between items-center gap-x-1.5"
                        }
                      >
                        {item.name}
                        <ChevronDownIcon
                          aria-hidden="true"
                          className="-mr-1 h-5 w-5 navbar-link hover:text-[#FF007A]"
                        />
                      </MenuButton>
                    </div>

                    <MenuItems
                      transition
                      className="absolute w-full right-0 z-10 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      <div className="py-1">
                        {item.children.map((child) => (
                          <MenuItem>
                            <button
                              onClick={() => {
                                router.push(child.href);
                              }}
                              key={child.name}
                              className={classNames(
                                child.current
                                  ? "navbar-link-active text-[#FF007A]"
                                  : "navbar-link hover:text-[#FF007A]",
                                "rounded-md block px-3 py-2 text-sm font-medium"
                              )}
                            >
                              {child.name}
                            </button>
                          </MenuItem>
                        ))}
                      </div>
                    </MenuItems>
                  </Menu>
                ) : (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    style={{
                      filter: item.current
                        ? "drop-shadow(0px 0px 4px #FF007A)"
                        : "",
                    }}
                    className={classNames(
                      item.current
                        ? "navbar-link-active bg-[#FF007A] text-white"
                        : "navbar-link hover:text-[#FF007A]",
                      "block w-full rounded-md px-3 py-2 text-base font-medium"
                    )}
                  >
                    {item.name}
                  </DisclosureButton>
                )}
              </div>
            ))}
          </div>
          <div className="w-full p-2 flex md:hidden items-center justify-center flex-col gap-3">
            <button
              style={{
                borderRadius: "5px",
              }}
              type="button"
              className="navbar-login-button w-full border"
            >
              Log In
            </button>
            <button
              style={{
                borderRadius: "5px",
              }}
              type="button"
              className="navbar-sign-up-button w-full"
            >
              Sign Up
            </button>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </>
  );
}

export default Navbar;
