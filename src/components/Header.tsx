import Button from "@/components/Button";
import Container from "@/components/Container";
import { Logo } from "@/components/Logo";
import UiLink from "@/components/UiLink";
import { contact, socials } from "@/configs/navigation";
import { Listbox } from "@headlessui/react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import React, { useEffect, useState } from "react";

// i18n
import { useTranslation } from "@/hooks/useTranslation";
import { useRouter } from "next/router";

// ToDo
// - Rewrite styling to be more pretty and easier to customize

function DesktopNavLink({ href, label }: { href: string; label: string }) {
  const router = useRouter();
  const matches = router.pathname === href;
  return (
    <UiLink
      href={href}
      hoverEffect="scale-up"
      className={clsx(
        "text-sm font-extrabold uppercase",
        matches ? "text-primary" : "text-white"
      )}
    >
      {label}
    </UiLink>
  );
}

function TouchNavLink({
  href,
  label,
  i,
}: {
  href: string;
  label: string;
  i: number;
}) {
  const router = useRouter();
  const matches = router.pathname === href;
  return (
    <li
      className={clsx(
        "text-xl font-extrabold uppercase sm:text-2xl md:text-3xl lg:text-5xl",
        matches ? "text-primary" : "text-white"
      )}
    >
      <UiLink href={href} hoverEffect="scale-up">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              delay: 0.4 + i * 0.1,
              ease: "easeOut",
            },
          }}
          className="block"
        >
          {label}
        </motion.span>
      </UiLink>
    </li>
  );
}

function BurgerButton({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <button
      aria-label="Otevřít / zavřít menu"
      className={clsx(
        "group relative z-offcanvas-above flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full"
      )}
      onClick={onClick}
    >
      <span
        className={clsx(
          "h-0.5 w-6 origin-center transform-gpu rounded-full bg-white transition duration-300 ease-out-back group-hover:bg-gray-900",
          isOpen && "translate-y-[4px] -rotate-45"
        )}
      />
      <span
        className={clsx(
          "h-0.5 w-6 origin-center transform-gpu rounded-full bg-white transition duration-300 ease-out-back group-hover:bg-gray-900",
          isOpen && "-translate-y-[4px] rotate-45"
        )}
      />
      <span
        className={clsx(
          "absolute inset-0 -z-10 h-full w-full scale-75 rounded-full bg-white opacity-0 transition duration-300 ease-out-back group-hover:scale-110 group-hover:opacity-100"
        )}
      ></span>
    </button>
  );
}

function TouchMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  // Prevents scrolling when menu is open
  useEffect(() => {
    if (isOpen === true) {
      document.body.classList.add(
        "overflow-hidden",
        "relative",
        "h-full",
        "touch-none"
      );
    } else {
      document.body.classList.remove(
        "overflow-hidden",
        "relative",
        "h-full",
        "touch-none"
      );
    }
  }, [isOpen, setIsOpen]);

  // Prevents closing menu while loading new page,
  useEffect(() => {
    if (!isOpen) return;

    function onRouteChange() {
      setIsOpen(false);
    }

    router.events.on("routeChangeComplete", onRouteChange);
    router.events.on("routeChangeError", onRouteChange);

    return () => {
      router.events.off("routeChangeComplete", onRouteChange);
      router.events.off("routeChangeError", onRouteChange);
    };
  }, [router, isOpen, setIsOpen]);

  // i18n
  const t = useTranslation();

  return (
    <>
      <BurgerButton isOpen={isOpen} onClick={toggleMenu} />
      <AnimatePresence initial={false}>
        {isOpen && (
          <>
            {/* Panel with content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.4, ease: [0.33, 1, 0.68, 1] },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.15, ease: [0.33, 1, 0.68, 1] },
              }}
              className="fixed inset-0 z-offcanvas min-h-screen bg-gray-800"
            >
              {/* Menu */}
              <Container
                size="md"
                className="h-full pb-8 pt-24 sm:pb-12 lg:flex lg:items-center"
              >
                <div className="grid w-full gap-8 lg:grid-cols-7 lg:pb-16">
                  {/* Navigace */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.4, ease: [0.33, 1, 0.68, 1] },
                    }}
                    className="col-span-1 lg:order-3 lg:col-span-2"
                  >
                    <span className="mb-3 block text-xs uppercase opacity-60 sm:text-sm lg:mb-6">
                      {t.common.nav.menu}
                    </span>
                    <ul className="flex flex-col items-start gap-y-2 lg:gap-y-5">
                      <li>
                        <TouchNavLink
                          href={t.common.routes.home.href}
                          label={t.common.routes.home.label}
                          i={0}
                        />
                      </li>
                      <li>
                        <TouchNavLink
                          href={t.common.routes.about.href}
                          label={t.common.routes.about.label}
                          i={1}
                        />
                      </li>
                      <li>
                        <TouchNavLink
                          href={t.common.routes.kombucha.href}
                          label={t.common.routes.kombucha.label}
                          i={2}
                        />
                      </li>
                      <li>
                        <TouchNavLink
                          href={t.common.routes.contact.href}
                          label={t.common.routes.contact.label}
                          i={3}
                        />
                      </li>
                      <li>
                        <TouchNavLink
                          href={t.common.fhpLink.href}
                          label={t.common.fhpLink.label}
                          i={4}
                        />
                      </li>
                      <li>
                        <TouchNavLink
                          href={"https://eshop.fhprager.cz"}
                          label={"E-shop"}
                          i={5}
                        />
                      </li>
                    </ul>
                  </motion.div>

                  {/* Kontaktní údaje */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.4,
                        delay: 0.7,
                        ease: [0.33, 1, 0.68, 1],
                      },
                    }}
                    className="col-span-1 lg:order-2 lg:col-span-2"
                  >
                    <span className="mb-3 block text-xs uppercase opacity-60 sm:text-sm lg:mb-6">
                      {t.common.nav.otherLinks}
                    </span>
                    <ul className="flex flex-col items-start gap-y-2">
                      {contact.map((contactLink, i) => (
                        <UiLink
                          href={contactLink.href}
                          key={i}
                          i={i}
                          hoverEffect="scale-down"
                          className="sm:text-lg lg:text-xl"
                        >
                          {contactLink.label}
                        </UiLink>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Sociální sítě */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.4,
                        delay: 0.9,
                        ease: [0.33, 1, 0.68, 1],
                      },
                    }}
                    className="col-span-1 lg:order-1 lg:col-span-2"
                  >
                    <span className="mb-3 block text-xs uppercase opacity-60 sm:text-sm lg:mb-6">
                      {t.common.nav.socialFollow}
                    </span>
                    <ul className="flex flex-col items-start gap-y-2">
                      {socials.map((social, i) => (
                        <UiLink
                          href={social.href}
                          key={i}
                          i={i}
                          className="transition-colors duration-150 hover:text-primary sm:text-lg lg:text-xl"
                        >
                          {social.label}
                        </UiLink>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </Container>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

const SelectItem = React.forwardRef(
  ({ children, className, ...props }: any, forwardedRef) => {
    return (
      <Listbox.Option
        className={clsx(
          "cursor-pointer items-center justify-between transition-opacity focus:outline-none",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {({ selected }) => (
          <li className={clsx("flex items-center hover:opacity-40")}>
            <span className="flex w-6 items-center justify-center">
              {selected && (
                <img
                  src="/icons/check-icon.svg"
                  alt=""
                  className="mx-2 scale-75"
                />
              )}
            </span>
            <p className="pl-1">{children}</p>
          </li>
        )}
      </Listbox.Option>
    );
  }
);

SelectItem.displayName = "SelectItem";

export default function Header() {
  // i18n
  const router = useRouter();
  const { locale } = router;
  const t = useTranslation();

  const [lang, setLang] = useState(locale);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Use useScroll hook from framer-motion
  const { scrollY } = useScroll();

  // Handeling scroll events
  useEffect(() => {
    return scrollY.on("change", (y) => {
      const current = y;
      const prev = scrollY.getPrevious();
      if (current > 64) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (current > 640 && current > prev) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    });
  }, [scrollY, setIsVisible, setIsScrolled]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 isolate z-fixed block w-screen pt-2 transition duration-500 ease-out",
        !isVisible && "-translate-y-full"
      )}
    >
      <Container size="md">
        <nav
          className={clsx(
            "w-full rounded-full py-2.5 pl-6 pr-2.5 transition-colors duration-500 lg:py-3.5 lg:pr-3.5",
            isScrolled ? "bg-gray-900/95" : "bg-gray-900/35"
          )}
        >
          {/* <div className="absolute inset-0 z-fixed-below h-full w-full rounded-full backdrop-blur-md" /> */}
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <UiLink href={"/"} className="z-offcanvas-above mr-auto">
              <Logo />
            </UiLink>

            {/* Desktop navigation */}
            <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 translate-y-[calc(-50%+0.3rem)] lg:block">
              <ul className="flex gap-5 xl:gap-8">
                <li>
                  <DesktopNavLink
                    href={t.common.routes.home.href}
                    label={t.common.routes.home.label}
                  />
                </li>
                <li>
                  <DesktopNavLink
                    href={t.common.routes.about.href}
                    label={t.common.routes.about.label}
                  />
                </li>
                <li>
                  <DesktopNavLink
                    href={t.common.routes.kombucha.href}
                    label={t.common.routes.kombucha.label}
                  />
                </li>
                <li>
                  <DesktopNavLink
                    href={t.common.routes.contact.href}
                    label={t.common.routes.contact.label}
                  />
                </li>
                <li>
                  <DesktopNavLink
                    href={t.common.fhpLink.href}
                    label={t.common.fhpLink.label}
                  />
                </li>
              </ul>
            </div>

            <div>
              <ul className="flex flex-row items-center justify-center gap-3 xl:gap-6">
                <li>
                  {!mounted ? (
                    <div className="inline-flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full bg-transparent px-3 py-1 text-xs font-bold uppercase leading-5 text-white no-underline ring-4 ring-white transition duration-300 hover:bg-white hover:text-gray-900 md:px-4 md:py-1.5 md:text-sm md:leading-5">
                      <span className="invisible font-bold">CS</span>
                      <ChevronDownIcon />
                    </div>
                  ) : (
                    <Listbox
                      as="div"
                      value={lang}
                      onChange={(value) => {
                        setLang(value);
                        router.push(router.pathname, router.pathname, {
                          locale: value,
                        });
                      }}
                      className="relative flex justify-center"
                    >
                      <Listbox.Button
                        aria-label="Language"
                        className="group inline-flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full bg-transparent px-3 py-1 text-xs font-bold uppercase leading-5 text-white no-underline ring-4 ring-white transition duration-300 hover:bg-white hover:text-gray-900 md:px-4 md:py-1.5 md:text-sm md:leading-5"
                      >
                        {lang}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-chevron-down transition duration-300 group-hover:stroke-black"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </Listbox.Button>
                      <AnimatePresence>
                        <Listbox.Options
                          as={motion.div}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className=" absolute mt-14 rounded-3xl border-4 border-white bg-white py-3 pl-3 pr-4 font-bold text-black"
                        >
                          <SelectItem value="cs">Česky</SelectItem>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="pl">Polski</SelectItem>
                        </Listbox.Options>
                      </AnimatePresence>
                    </Listbox>
                  )}
                </li>
                <li className="hidden md:block">
                  <Button href="https://eshop.fhprager.cz">E-shop</Button>
                </li>
              </ul>
            </div>

            {/* Mobile navigation */}
            <div className="lg:hidden">
              <TouchMenu />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
