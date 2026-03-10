import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | 26labs",
    description:
        "Learn how 26 Labs collects, uses, and protects your personal data.",
    alternates: {
        canonical: "https://26labs.live/privacy-policy",
    },
};

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6">
            <article className="max-w-3xl mx-auto prose prose-gray">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                    Privacy Policy
                </h1>
                <p className="text-sm text-gray-400 mb-10">
                    Last updated: January 27, 2026
                </p>

                <Section title="Introduction">
                    <p>
                        26 Labs (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;)
                        respects your privacy and is committed to protecting your personal
                        data. This privacy policy explains how we collect, use, disclose, and
                        safeguard your information when you visit our website or engage with
                        our services.
                    </p>
                </Section>

                <Section title="Information We Collect">
                    <p>We may collect the following types of information:</p>
                    <ul>
                        <li>
                            <strong>Contact Information:</strong> Name, email address, phone
                            number, and company name when you fill out our contact forms or
                            request our services.
                        </li>
                        <li>
                            <strong>Usage Data:</strong> Information about how you interact
                            with our website, including pages visited, time spent on pages, and
                            navigation patterns.
                        </li>
                        <li>
                            <strong>Device Information:</strong> Browser type, operating
                            system, IP address, and device identifiers.
                        </li>
                        <li>
                            <strong>Communications:</strong> Records of correspondence if you
                            contact us directly.
                        </li>
                    </ul>
                </Section>

                <Section title="How We Use Your Information">
                    <p>We use the information we collect to:</p>
                    <ul>
                        <li>Provide, operate, and maintain our services</li>
                        <li>Respond to your inquiries and fulfill your requests</li>
                        <li>Send you marketing communications (with your consent)</li>
                        <li>Improve our website and services</li>
                        <li>Analyze usage patterns and trends</li>
                        <li>Protect against fraudulent or illegal activity</li>
                        <li>Comply with legal obligations</li>
                    </ul>
                </Section>

                <Section title="Information Sharing">
                    <p>
                        We do not sell your personal information. We may share your
                        information with:
                    </p>
                    <ul>
                        <li>
                            <strong>Service Providers:</strong> Third-party vendors who assist
                            us in operating our website and delivering services.
                        </li>
                        <li>
                            <strong>Business Partners:</strong> Trusted partners with whom we
                            collaborate to provide services.
                        </li>
                        <li>
                            <strong>Legal Requirements:</strong> When required by law or to
                            protect our rights and safety.
                        </li>
                    </ul>
                </Section>

                <Section title="Cookies and Tracking Technologies">
                    <p>
                        We use cookies and similar tracking technologies to enhance your
                        experience on our website. Cookies help us understand how you use our
                        site, remember your preferences, and improve our services. You can
                        control cookie settings through your browser preferences.
                    </p>
                </Section>

                <Section title="Data Security">
                    <p>
                        We implement appropriate technical and organizational measures to
                        protect your personal data against unauthorized access, alteration,
                        disclosure, or destruction. However, no method of transmission over
                        the internet is 100% secure, and we cannot guarantee absolute
                        security.
                    </p>
                </Section>

                <Section title="Your Rights">
                    <p>Depending on your location, you may have the right to:</p>
                    <ul>
                        <li>Access the personal data we hold about you</li>
                        <li>Request correction of inaccurate data</li>
                        <li>Request deletion of your data</li>
                        <li>Object to or restrict processing of your data</li>
                        <li>Request data portability</li>
                        <li>Withdraw consent at any time</li>
                    </ul>
                </Section>

                <Section title="Data Retention">
                    <p>
                        We retain your personal data only for as long as necessary to fulfill
                        the purposes for which it was collected, comply with legal
                        obligations, resolve disputes, and enforce our agreements.
                    </p>
                </Section>

                <Section title="Third-Party Links">
                    <p>
                        Our website may contain links to third-party websites. We are not
                        responsible for the privacy practices of these external sites. We
                        encourage you to review the privacy policies of any third-party sites
                        you visit.
                    </p>
                </Section>

                <Section title="Children's Privacy">
                    <p>
                        Our services are not directed to individuals under the age of 18. We
                        do not knowingly collect personal information from children. If we
                        become aware that we have collected data from a child, we will take
                        steps to delete it promptly.
                    </p>
                </Section>

                <Section title="Changes to This Policy">
                    <p>
                        We may update this privacy policy from time to time. We will notify
                        you of any material changes by posting the new policy on this page
                        and updating the &ldquo;Last updated&rdquo; date.
                    </p>
                </Section>

                <Section title="Contact Us">
                    <p>
                        If you have any questions about this privacy policy or our data
                        practices, please contact us at:
                    </p>
                    <address className="not-italic leading-relaxed">
                        <strong>26 Labs</strong>
                        <br />
                        Dubai, UAE
                        <br />
                        Email:{" "}
                        <a
                            href="mailto:sales@26labs.live"
                            className="text-[#8CA9FF] hover:underline"
                        >
                            sales@26labs.live
                        </a>
                    </address>
                </Section>
            </article>
        </div>
    );
}

function Section({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">{title}</h2>
            <div className="text-sm sm:text-base text-gray-600 leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:text-gray-600">
                {children}
            </div>
        </section>
    );
}
