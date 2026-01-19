import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import type { FooterSection, FooterLinkItem } from "../../types/footer/footer";

const Footer = () => {
  const companyDescription =
    "The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.";

  const footerSections: FooterSection[] = [
    {
      title: "Services",
      links: [
        { label: "Email Marketing", href: "#" },
        { label: "Campaigns", href: "#" },
        { label: "Branding", href: "#" },
      ],
    },
    {
      title: "Furniture",
      links: [
        { label: "Beds", href: "#" },
        { label: "Chair", href: "#" },
        { label: "All", href: "#" },
      ],
    },
    {
      title: "Follow Us",
      links: [
        {
          label: "Facebook",
          href: "#",
          icon: <Facebook sx={{ fontSize: 20 }} />,
        },
        {
          label: "Twitter",
          href: "#",
          icon: <Twitter sx={{ fontSize: 20 }} />,
        },
        {
          label: "Instagram",
          href: "#",
          icon: <Instagram sx={{ fontSize: 20 }} />,
        },
      ],
    },
  ];

  const bottomLinks: FooterLinkItem[] = [
    { label: "Terms & Conditions", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ];

  const renderLinkItem = (link: FooterLinkItem) => (
    <li key={link.label}>
      <a
        href={link.href}
        className={`text-gray-700 hover:text-gray-900 text-sm transition-colors ${link.icon ? "inline-flex items-center gap-2" : ""
          }`}
      >
        {link.icon}
        {link.label}
      </a>
    </li>
  );

  const renderSection = (section: FooterSection) => (
    <div key={section.title}>
      <h3 className="text-orange-500 font-semibold text-base mb-4">
        {section.title}
      </h3>
      <ul className="space-y-2">{section.links.map(renderLinkItem)}</ul>
    </div>
  );

  return (
    <footer className="bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Sección izquierda - Información de la empresa */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Panto</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              {companyDescription}
            </p>
          </div>

          {/* Secciones dinámicas */}
          {footerSections.map(renderSection)}
        </div>

        {/* Fila inferior */}
        <div className="border-t border-gray-300 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">the design is not my property - credits to: Kretya Studio©</p>
          <div className="flex gap-6">
            {bottomLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-700 hover:text-gray-900 text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
