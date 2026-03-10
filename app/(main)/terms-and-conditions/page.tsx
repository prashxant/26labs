import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms & Conditions | 26labs",
    description:
        "Terms of service for 26 Labs web design, development and growth services.",
    alternates: {
        canonical: "https://26labs.live/terms-and-conditions",
    },
};

export default function TermsPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6">
            <article className="max-w-3xl mx-auto prose prose-gray">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10">
                    Terms &amp; Conditions
                </h1>

                <Section title="Agreement to Terms">
                    <p>
                        By accessing or using the services provided by 26 Labs
                        (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or
                        &ldquo;us&rdquo;), you agree to be bound by these Terms of Service.
                        If you do not agree to these terms, please do not use our services.
                    </p>
                </Section>

                <Section title="Services">
                    <p>
                        26 Labs provides web design, development and growth services,
                        including but not limited to:
                    </p>
                    <ul>
                        <li>Website/App design and development</li>
                        <li>SaaS application development</li>
                        <li>Brand identity and UI/UX design</li>
                        <li>Growth strategy</li>
                        <li>Maintenance and support services</li>
                    </ul>
                    <p>
                        The specific scope, deliverables, and terms of each engagement will
                        be defined in a separate service agreement or statement of work.
                    </p>
                </Section>

                <Section title="Client Responsibilities">
                    <p>As a client of 26 Labs, you agree to:</p>
                    <ul>
                        <li>
                            Provide accurate and complete information necessary for service
                            delivery
                        </li>
                        <li>
                            Respond to requests for feedback and approvals in a timely manner
                        </li>
                        <li>
                            Ensure you have all necessary rights to content and materials you
                            provide
                        </li>
                        <li>Pay all fees as outlined in your service agreement</li>
                        <li>Comply with all applicable laws and regulations</li>
                    </ul>
                </Section>

                <Section title="Intellectual Property">
                    <p>
                        <strong>Client Content:</strong> You retain all rights to content,
                        materials, and intellectual property you provide to us. By providing
                        such content, you grant us a limited license to use it solely for the
                        purpose of delivering our services.
                    </p>
                    <p>
                        <strong>Deliverables:</strong> Upon full payment, you will own the
                        final deliverables created specifically for you, unless otherwise
                        specified in your service agreement.
                    </p>
                    <p>
                        <strong>Our Materials:</strong> We retain ownership of our
                        proprietary tools, processes, templates, and methodologies used in
                        delivering services.
                    </p>
                </Section>

                <Section title="Payment Terms">
                    <ul>
                        <li>
                            Payment terms will be specified in your service agreement
                        </li>
                        <li>
                            Invoices are due upon receipt unless otherwise agreed
                        </li>
                        <li>
                            Late payments may incur interest charges and/or service suspension
                        </li>
                        <li>All fees are non-refundable unless otherwise stated</li>
                    </ul>
                </Section>

                <Section title="Confidentiality">
                    <p>
                        We will treat all confidential information you share with us with
                        appropriate care and will not disclose it to third parties without
                        your consent, except as required by law or as necessary to deliver
                        our services. This obligation survives termination of our engagement.
                    </p>
                </Section>

                <Section title="Warranties and Disclaimers">
                    <p>
                        We will perform our services with reasonable skill and care. However:
                    </p>
                    <ul>
                        <li>
                            We do not guarantee specific results, metrics, or outcomes
                            (including but not limited to view counts, engagement rates, or
                            viral performance)
                        </li>
                        <li>
                            Services are provided &ldquo;as is&rdquo; without warranties of
                            any kind, express or implied
                        </li>
                        <li>
                            We disclaim all warranties of merchantability, fitness for a
                            particular purpose, and non-infringement
                        </li>
                        <li>
                            We are not responsible for the actions or policies of third-party
                            platforms
                        </li>
                    </ul>
                </Section>

                <Section title="Limitation of Liability">
                    <p>
                        To the maximum extent permitted by law, 26 Labs shall not be liable
                        for any indirect, incidental, special, consequential, or punitive
                        damages, including loss of profits, data, or business opportunities.
                        Our total liability for any claim shall not exceed the fees paid by
                        you for the specific services giving rise to the claim.
                    </p>
                </Section>

                <Section title="Indemnification">
                    <p>
                        You agree to indemnify and hold harmless 26 Labs, its officers,
                        directors, employees, and agents from any claims, damages, losses, or
                        expenses (including reasonable attorneys&apos; fees) arising from your
                        breach of these terms, your content, or your violation of any
                        third-party rights.
                    </p>
                </Section>

                <Section title="Termination">
                    <p>Either party may terminate the service relationship:</p>
                    <ul>
                        <li>
                            For convenience with 30 days&apos; written notice (unless
                            otherwise specified in your service agreement)
                        </li>
                        <li>
                            Immediately for material breach that remains uncured after 14
                            days&apos; notice
                        </li>
                        <li>
                            Immediately if the other party becomes insolvent or files for
                            bankruptcy
                        </li>
                    </ul>
                    <p>
                        Upon termination, you will pay for all services rendered and expenses
                        incurred up to the termination date.
                    </p>
                </Section>

                <Section title="Force Majeure">
                    <p>
                        Neither party shall be liable for delays or failures in performance
                        resulting from circumstances beyond their reasonable control,
                        including natural disasters, acts of war, terrorism, pandemics, or
                        third-party platform outages.
                    </p>
                </Section>

                <Section title="Changes to Terms">
                    <p>
                        We reserve the right to modify these terms at any time. We will
                        notify you of material changes by posting the updated terms on our
                        website. Your continued use of our services after such changes
                        constitutes acceptance of the new terms.
                    </p>
                </Section>

                <Section title="Severability">
                    <p>
                        If any provision of these terms is found to be unenforceable, the
                        remaining provisions will continue in full force and effect.
                    </p>
                </Section>

                <Section title="Contact Us">
                    <p>
                        If you have any questions about these Terms of Service, please
                        contact us at:
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
