import React from 'react';

export default function MyNMApp() {
    return (
        <article className="pt-32 pb-20 px-6 md:px-12 max-w-5xl mx-auto">

            <header className="mb-16 text-center">
                <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-ink mb-6">MyNM App Redesign</h1>
                <p className="text-xl text-ink/70 font-medium max-w-3xl mx-auto text-balance">
                    Streamlining healthcare access through intuitive patient-centered design.
                </p>
            </header>

            {/* Hero Image / Header */}
            <div className="w-full h-[400px] md:h-[500px] rounded-3xl bg-slate border border-white/40 shadow-sm overflow-hidden mb-16 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blurple/10 to-transparent z-10" />
                <div className="absolute inset-0 flex items-center justify-center bg-zinc-100">
                    <img
                        src="/img/mynm_redesign/new_design/mockup_no_bg.png"
                        alt="MyNM App Redesign Header"
                        className="w-auto h-full object-contain mix-blend-multiply opacity-50 block md:hidden"
                        onError={(e) => { e.target.style.display = 'none' }}
                    />
                    <span className="text-ink/40 font-mono text-sm z-20">[ header image placeholder ]</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
                <div className="md:col-span-2 space-y-12">

                    <section className="prose prose-lg prose-slate max-w-none">
                        <h2 className="text-2xl font-bold tracking-tight text-ink mb-4">Objective</h2>
                        <p className="text-ink/80 leading-relaxed mb-6">
                            Hundreds of thousands of Northwestern Medicine patients manage their healthcare through the MyNM app. However, the mobile experience was hard to navigate and lacked key features available on the web experience. As the UX designer and researcher, I led the redesign effort to modernize the app, improve usability, and ensure feature parity with MyNM's core capabilities.
                        </p>
                    </section>

                    <section className="prose prose-lg prose-slate max-w-none">
                        <h2 className="text-2xl font-bold tracking-tight text-ink mb-4">Research</h2>
                        <p className="text-ink/80 leading-relaxed mb-6">
                            Combining data from the in-app feedback form with results from a survey of app users, I found that users' biggest pain point was locating important information in a timely manner. Much of this stemmed from confusion over the MyNM app's custom layout and a desire for something closer to the stock MyChart layout that the web version of MyNM uses.
                        </p>
                        <div className="w-full h-64 bg-slate rounded-xl border border-white/40 flex items-center justify-center font-mono text-sm text-ink/40 mb-6">[ Old Designs with annotations.png ]</div>

                        <p className="text-ink/80 leading-relaxed mb-6">
                            To ensure consistency, I performed a content audit of the app and web version to identify every feature that was missing. In an effort to improve on the web experience, I looked for overall trends in mobile app navigation by doing a competitive analysis of 10 of the top apps across the iOS App Store and Google Play as well as 12 direct competitors.
                        </p>
                        <div className="w-full h-64 bg-slate rounded-xl border border-white/40 flex items-center justify-center font-mono text-sm text-ink/40 mb-6">[ Competitors.png ]</div>
                    </section>

                    <section className="prose prose-lg prose-slate max-w-none">
                        <h2 className="text-2xl font-bold tracking-tight text-ink mb-4">New Design</h2>
                        <p className="text-ink/80 leading-relaxed mb-6">
                            Following the MyNM web layout, I replaced the Home Screen icons with the Health Feed and brought shortcuts to the navigation. Instead of using the hamburger menu, though, I opted to follow industry trends and use a bottom tab bar as the persistent navigation, with "My Tools" representing the searchable menu of all activities.
                        </p>
                        <div className="w-full h-96 bg-slate rounded-xl border border-white/40 flex items-center justify-center font-mono text-sm text-ink/40 mb-6">[ New Designs With Annotations.png ]</div>
                    </section>

                    <section className="prose prose-lg prose-slate max-w-none">
                        <h2 className="text-2xl font-bold tracking-tight text-ink mb-4">Final Thoughts</h2>
                        <p className="text-ink/80 leading-relaxed mb-6">
                            The redesigned app was praised by both users and stakeholders. Users found it much easier to use. Many liked that it now felt more like the MyNM web version, which made it less confusing. I intend to monitor user interactions and make iterative improvements as needed.
                        </p>
                    </section>

                </div>

                {/* Info Sidebar */}
                <aside className="md:col-span-1">
                    <div className="glass-card p-8 rounded-3xl">
                        <h3 className="text-lg font-bold text-ink mb-6 pb-4 border-b border-ink/10">Project Details</h3>

                        <div className="mb-8">
                            <h4 className="text-xs font-mono text-blurple uppercase tracking-wider mb-3">Responsibilities</h4>
                            <ul className="space-y-2 text-ink/80 font-medium">
                                <li>Research</li>
                                <li>Information Architecture</li>
                                <li>Wireframing & Design</li>
                                <li>User Acceptance Testing</li>
                            </ul>
                        </div>

                        <div className="mb-8">
                            <h4 className="text-xs font-mono text-blurple uppercase tracking-wider mb-3">Players</h4>
                            <ul className="space-y-2 text-ink/80 font-medium">
                                <li>UX Designer</li>
                                <li>UX Researcher</li>
                                <li>Android/iOS Developers</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-xs font-mono text-blurple uppercase tracking-wider mb-3">Tools</h4>
                            <ul className="space-y-2 text-ink/80 font-medium">
                                <li>Optimal Workshop</li>
                                <li>Figma & Figjam</li>
                                <li>User Interviews</li>
                            </ul>
                        </div>

                    </div>
                </aside>
            </div>
        </article>
    );
}
