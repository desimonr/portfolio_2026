/**
 * PORTFOLIO CONTENT CONFIGURATION
 * 
 * This file contains all the text and links for your portfolio.
 * To change anything on the site, just edit the text between the quotes below.
 */

export const CONTENT = {
    // ──────── NAVBAR ────────
    navbar: {
        logo: "RD.",
        links: [
            { name: "Work", href: "#work" },
            { name: "Skills", href: "#skills" },
            { name: "Connect", href: "#connect" }
        ],
        cta: {
            label: "Connect",
            link: "https://linkedin.com/in/raymonddesimone"
        }
    },

    // ──────── HERO SECTION ────────
    hero: {
        greeting: "Hi, I'm Raymond DeSimone.",
        title: "Senior UX Designer",
        subtitle: "Conversational AI & NLP Interfaces",
        // Typing effect text
        telemetryText: "> Conducting usability audits... Mapping conversational architectures... Refining interaction patterns...",
        cta: "Explore Featured Work"
    },

    // ──────── FEATURED WORK (ARCHIVE) ────────
    work: {
        title: "Featured Work.",
        description: "Signature projects and core skill pillars engineered for scale and precision.",
        projects: [
            {
                id: 1,
                slug: "invisible-ai",
                title: "Invisible AI",
                desc: "Redesigning a computer vision review interface to make high-volume AI video data manageable and actionable.",
                thumb: "img/invisible_ai/thumb.png",
                tags: ["AI", "UX"]
            },
            {
                id: 2,
                slug: "voice-guidelines",
                title: "Voice Guidelines",
                desc: "Developing formal voice and personality guidelines to standardize NLP-powered chatbot responses across product suites.",
                thumb: "img/voice_guidelines/thumb.png",
                tags: ["NLP", "SaaS"]
            },
            {
                id: 3,
                slug: "mynm-app",
                title: "MyNM App",
                desc: "Modernizing a major healthcare mobile app through research-driven IA and industry-standard navigation patterns.",
                thumb: "img/mynm_redesign/new_design/thumb.png",
                tags: ["IoT", "Voice"]
            }
        ]
    },

    // ──────── SKILLS ────────
    skills: {
        title: "Skills",
        // The scrolling text at the top
        techMarquee: [
            "Figma", "UserTesting", "Sketch", "Optimal Workshop", "Azure Language Services",
            "Claude", "Gemini", "Photoshop", "Illustrator", "Prompt Engineering", "NLP"
        ],
        // The three columns
        categories: [
            {
                id: "01",
                label: "Conversational AI",
                items: [
                    "Voice & Tone Strategy",
                    "Prompt Engineering",
                    "Multimodal Interfaces",
                    "NLP Interaction Design"
                ]
            },
            {
                id: "02",
                label: "Research & Strategy",
                items: [
                    "Usability Testing & Moderation",
                    "Qualitative Synthesis",
                    "Journey Mapping",
                    "Competitive Analysis"
                ]
            },
            {
                id: "03",
                label: "UX Architecture",
                items: [
                    "Design Systems",
                    "Information Architecture",
                    "Accessibility (A11y)",
                    "Wireframing & Prototyping"
                ]
            }
        ]
    },

    // ──────── FOOTER ────────
    footer: {
        headline: "LET'S DESIGN",
        subHeadline: "SOMETHING.",
        tagline: "Join the conversation. Let's create something meaningful together.",
        ctaLabel: "Connect on LinkedIn",
        links: [
            { name: "LinkedIn", href: "https://linkedin.com/in/raymonddesimone" },
            { name: "GitHub", href: "https://github.com/rdes" }
        ],
        copyright: "RAYMOND DESIMONE. DESIGNED IN THE INTERFACE."
    }
};
