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
            { name: "Skills", href: "#skills" }
        ],
        cta: {
            label: "Connect",
            link: "https://linkedin.com/in/raymonddesimone"
        }
    },

    // ──────── HERO SECTION ────────
    hero: {
        greeting: "Hi, I'm Raymond DeSimone,",
        title: "Senior UX Designer",
        subtitle: "specializing in AI interfaces, healthcare, and manufacturing.",
        // Typing effect text
        telemetryText: "> Conducting usability audits... Mapping conversational architectures... Refining interaction patterns...",
        cta: "Explore Featured Work"
    },

    // ──────── FEATURED WORK (ARCHIVE) ────────
    work: {
        title: "Featured Work.",
        description: "",
        projects: [
            {
                id: 1,
                slug: "invisible-ai",
                title: "Invisible AI Video Center",
                desc: "Redesigning a computer vision review interface to make high-volume AI video data manageable and actionable.",
                thumb: "img/invisible_ai_thumb.png",
                modelUrl: "img/invisible_ai/3D iMacs Mockup.glb",
                tags: ["AI", "UX Strategy"]
            },
            {
                id: 2,
                slug: "voice-guidelines",
                title: "Voice Guidelines",
                desc: "Developing formal voice and personality guidelines to standardize NLP-powered chatbot responses across product suites.",
                thumb: "img/voice_guidelines_thumb.png",
                modelUrl: "img/mynm_redesign/new_design/MyNM_phone_mockups.glb",
                tags: ["AI", "Design System"]
            },
            {
                id: 3,
                slug: "mynm-app",
                title: "MyNM App",
                desc: "Modernizing a major healthcare mobile app through research-driven IA and industry-standard navigation patterns.",
                thumb: "img/mynm_app_thumb.png",
                modelUrl: "img/mynm_redesign/new_design/MyNM_phone_mockups.glb",
                tags: ["Information Architecture", "UX Strategy", "Design System"]
            },
            {
                id: 4,
                slug: "ai-portfolio",
                title: "AI Portfolio",
                desc: "A meta case study on how this premium, scalable React architecture was built efficiently in tandem with AI assistance.",
                thumb: "img/ai_portfolio/thumb.png",
                modelUrl: "img/mynm_redesign/new_design/MyNM_phone_mockups.glb",
                tags: ["AI", "Design System"]
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
        copyright: "RAYMOND DESIMONE."
    }
};
