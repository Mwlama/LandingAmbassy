import { HelpCircleIcon, LineChartIcon, Link2Icon, LockIcon, NewspaperIcon, QrCodeIcon } from "lucide-react";

export const NAV_LINKS = [
    {
        title: "About Us",
        href: "/aboutUs",
    },
    {
        title: "How It Works",
        href: "/features",
        menu: [
            {
                title: "For Ambassador",
                tagline: "Accept, Share, and Earn.",
                href: "/features/link-shortening",
                icon: Link2Icon,
            },
            {
                title: "For Pro",
                tagline: "Create your Army.",
                href: "/features/password-protection",
                icon: LockIcon,
            },
            {
                title: "For VIP",
                tagline: "Fully Automated Promotion.",
                href: "/features/analytics",
                icon: LineChartIcon,
            },
            {
                title: "For All",
                tagline: "We share the Best with you.",
                href: "/features/qr-codes",
                icon: QrCodeIcon,
            },
        ],
    },
    {
        title: "Pricing",
        href: "/pricing",
    },
    {
        title: "Benefits",
        href: "/enterprise",
    },
    {
        title: "Resources",
        href: "/resources",
        menu: [
            {
                title: "AI Tools",
                tagline: "Use Our AIs to create, generate and much more.",
                href: "/resources/Aitools",
                icon: NewspaperIcon,
            },
            {
                title: "Knowledge for Success",
                tagline: "Get the best practices in digital, business and AI.",
                href: "/resources/help",
                icon: HelpCircleIcon,
            },
        ]
    },
  
];
