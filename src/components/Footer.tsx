import Container from "@/components/Container";
import { Logo } from "@/components/Logo";
import { contact, routes, socials } from "@/configs/navigation";
import Heading from "./Heading";
import UiLink from "./UiLink";

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <Container>
        {/* Main Content */}
        <div className="grid gap-10 py-16 md:grid-cols-3">
          <Logo background="dark" className="col-span-1 md:hidden" />
          <div className="col-span-1">
            <Heading level={"none"} size="xs" color="primary" hasMarginBottom>
              Menu
            </Heading>
            <ul className="flex flex-col gap-1">
              {routes.map((route) => (
                <li key={route.label}>
                  <UiLink
                    href={route.href}
                    hoverEffect="scale-up"
                    className="font-bold uppercase"
                  >
                    {route.label}
                  </UiLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1">
            <Heading level={"none"} size="xs" color="primary" hasMarginBottom>
              Další odkazy
            </Heading>
            <ul className="flex flex-col gap-1">
              {contact.map((item) => (
                <li key={item.label}>
                  <UiLink
                    href={item.href}
                    hoverEffect="scale-up"
                    className="font-bold uppercase"
                  >
                    {item.label}
                  </UiLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1 flex flex-col justify-start">
            <Heading
              level={"none"}
              size="xs"
              color="primary"
              hasMarginBottom
              className="font-bold uppercase"
            >
              Sledujte nás
            </Heading>
            <ul className="mb-auto flex gap-5">
              {socials.map((item) => (
                <li key={item.label}>
                  <UiLink
                    href={item.href}
                    className="transition-colors hover:text-primary"
                  >
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </UiLink>
                </li>
              ))}
            </ul>
            <Logo
              background="dark"
              className="mt-auto hidden origin-bottom-left scale-125 justify-self-end md:block xl:scale-[1.75]"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="py-16">
          <p className="text-center text-sm text-gray-500 md:text-left">
            © {new Date().getFullYear()} F.H. Prager | F.H. PRAGER s.r.o., U
            Národní galerie 470, 156 00 Zbraslav, Česká republika
          </p>
        </div>
      </Container>
    </footer>
  );
}
