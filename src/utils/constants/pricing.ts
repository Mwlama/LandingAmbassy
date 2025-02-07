export const PLANS = [
    {
        name: "Ambassador",
        info: "For most individuals",
        price: {
            monthly: 0,
            yearly: 0,
        },
        features: [
            { text: "Create Ambassador profile" },
            { text: "Browse brand opportunities" },
            { text: "Customizable branded links" },
            { text: "Basic analytics", tooltip: "Track basic stats about your audience" },
            { text: "Direct messaging", tooltip: "Chat directly with brands" },
            { text: "Approach the pros", tooltip: "Reach out to top professionals" },
        ],
        btn: {
            text: "Start for free",
            href: "/auth/sign-up?plan=free",
            variant: "default",
        }
    },
    {
        name: "Pro",
        info: "Launch offer",
        price: {
            monthly: 39.99,
            yearly: Math.round(39.99 * 12 * (1 - 0.12)), // Applying a 12% discount for yearly plan
        },
        features: [
            { text: "All Ambassador features" },
            { text: "Advanced campaign analytics", tooltip: "Get deep insights into campaign performance" },
            { text: "Priority support", tooltip: "Get faster responses from our team" },
            { text: "Custom campaign creation", tooltip: "Launch personalized marketing campaigns" },
            { text: "Unlimited influencer outreach", tooltip: "Connect with unlimited influencers" },
            { text: "Campaign performance tracking", tooltip: "Monitor the success of your campaigns" },
            { text: "AI powered chatbot", tooltip: "Automate customer interactions" },
        ],
        btn: {
            text: "Get started",
            href: "/auth/sign-up?plan=pro",
            variant: "purple",
        }
    },
    {
        name: "VIP",
        info: "For large organizations",
        price: {
            monthly: 299.99,
            yearly: Math.round(299.99 * 12 * (1 - 0.12)),
        },
        features: [
            { text: "All Ambassador & Pro features" },
            { text: "Fully Automated", tooltip: "Automate influencer and campaign management" },
            { text: "Google Ads Campaign", tooltip: "Run Google Ads directly through our platform" },
            { text: "TikTok Ads Campaign", tooltip: "Launch high-performing TikTok Ads" },
        ],
        btn: {
            text: "Contact team",
            href: "/auth/sign-up?plan=business",
            variant: "default",
        }
    }
];
