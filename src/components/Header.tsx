import Button from "@/components/Button";
import Container from "@/components/Container";
import { Logo } from "@/components/Logo";
import UiLink from "@/components/UiLink";
import { contact, routes, socials } from "@/configs/navigation";
import clsx from "clsx";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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
              className="fixed inset-0 z-offcanvas min-h-screen w-screen bg-gray-800"
            >
              {/* Menu */}
              <Container
                size="md"
                className="h-full pt-24 pb-8 sm:pb-12 lg:flex lg:items-center"
              >
                <div className="grid w-full gap-8 lg:grid-cols-7 lg:pb-16">
                  {/* Navigace */}
                  <div className="col-span-1 lg:order-3 lg:col-span-2">
                    <span className="mb-3 block text-xs uppercase opacity-60 sm:text-sm lg:mb-6">
                      Menu
                    </span>
                    <ul className="flex flex-col items-start gap-y-2 lg:gap-y-5">
                      {routes.map((route, i) => (
                        <TouchNavLink key={i} i={i} {...route} />
                      ))}
                    </ul>
                  </div>

                  {/* Kontaktní údaje */}
                  <div className="col-span-1 lg:order-2 lg:col-span-2">
                    <span className="mb-3 block text-xs uppercase opacity-60 sm:text-sm lg:mb-6">
                      Kontakt
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
                  </div>

                  {/* Sociální sítě */}
                  <div className="col-span-1 lg:order-1 lg:col-span-2">
                    <span className="mb-3 block text-xs uppercase opacity-60 sm:text-sm lg:mb-6">
                      Sociální sítě
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
                  </div>
                </div>
              </Container>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default function Header() {
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
    <header>
      <Container
        as="nav"
        size="md"
        className={clsx(
          "fixed inset-x-0 top-2 z-fixed rounded-full bg-gray-900/30 py-2.5 pl-6 pr-2.5 backdrop-blur-md transition duration-500 ease-out lg:py-3.5 lg:pr-3.5",
          isScrolled && "",
          !isVisible && "translate-y-[calc(-100%-0.5rem)] shadow-none"
        )}
      >
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <UiLink href={"/"} className="relative z-offcanvas-above mr-auto">
            <Logo />
          </UiLink>

          {/* Desktop navigation */}
          <div className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
            <ul className="flex gap-5 xl:gap-8">
              {routes.map((route, i) => (
                <DesktopNavLink key={i} {...route} />
              ))}
            </ul>
          </div>

          <div>
            <ul className="flex gap-3 xl:gap-6">
              <li>
                <Button intent="white">EN</Button>
              </li>
              <li className="hidden md:block">
                <Button>E-shop</Button>
              </li>
            </ul>
          </div>

          {/* Mobile navigation */}
          <div className="lg:hidden">
            <TouchMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}
