// Shared by app/about/page.tsx (JSON-LD) and AboutClient.tsx (visible FAQ).
// Keep visible answers and schema answers identical, Google requires it.

export const SITE_URL = "https://divineesoft.com"; // TODO: confirm production domain
export const FOUNDED_YEAR = 2020; // TODO: confirm before publishing

export const ABOUT_FAQS = [
    {
        question: "Where is DivineeSoft Technologies based?",
        answer:
            "Our engineering studio is in Lahore, Punjab, Pakistan. We work with clients in the US, UK, Pakistan and the Middle East, with scheduled overlap hours for each time zone.",
    },
    {
        question: "Do I own the source code and accounts?",
        answer:
            "Yes. You own 100% of the source code, Git repositories, cloud accounts, App Store listings and intellectual property from day one.",
    },
    {
        question: "How fast can you ship an MVP?",
        answer:
            "Focused MVPs ship in 6–10 weeks, with a working staging build every week so you can test real software early and adjust to user feedback.",
    },
    {
        question: "Will I talk to engineers or account managers?",
        answer:
            "You talk directly to the senior leads and engineers building your product, through shared project boards, Slack or WhatsApp, and a live demo every Friday.",
    },
    {
        question: "Do you support the product after launch?",
        answer:
            "Yes. Go-live is the start of the relationship. We provide 24/7 monitoring, scaling and new releases, the same way we have supported BarberzLink LLC for more than four years.",
    },
] as const;