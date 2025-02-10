import { BarChart3Icon, BarChartIcon, FolderOpenIcon, LinkIcon, UsersIcon, WandSparklesIcon } from "lucide-react";

export const DEFAULT_AVATAR_URL = "https://api.dicebear.com/8.x/initials/svg?backgroundType=gradientLinear&backgroundRotation=0,360&seed=";

export const PAGINATION_LIMIT = 10;

export const COMPANIES = [
    {
        name: "Asana",
        logo: "/assets/tiktok.svg",
    },
    {
        name: "Tidal",
        logo: "/assets/instagram.svg",
    },
    {
        name: "Innovaccer",
        logo: "/assets/facebook.svg",
    },
    {
        name: "Raycast",
        logo: "/assets/x.svg",
    },
    {
        name: "Labelbox",
        logo: "/assets/youtube.svg",
    },
    {
        name: "Labelbox",
        logo: "/assets/snapchat.svg",
    }
    
] as const;

export const PROCESS = [
    {
        title: "Ambassador Selection and Onboarding",
        description: "Strategically scout and recruit the perfect social media ambassadors who align with your brand's vision and target audience.",
        icon: LinkIcon,
    },
    {
        title: "Campaign Creation and Execution",
        description: "Design compelling, platform-specific content strategies that transform Ambassador into powerful storytellers of your product's unique value.",
        icon: UsersIcon,
    },
    {
        title: "Performance Tracking and Optimization",
        description: "Implement data-driven analytics to continuously measure, learn, and evolve your influencer marketing approach for maximum ROI.",
        icon: BarChartIcon,
    },
] as const;

