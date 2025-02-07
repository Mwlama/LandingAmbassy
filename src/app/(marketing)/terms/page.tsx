import { AnimationContainer, MaxWidthWrapper } from "@/components";
import Link from "next/link";

const TermsPage = () => {
    return (
        <MaxWidthWrapper className="max-w-3xl mx-auto px-8 mb-40">
            <AnimationContainer delay={0.1} className="w-full">
                <h1 className="text-4xl md:text-6xl font-heading font-bold my-12 text-center w-full">
                    Terms and Conditions
                </h1>
                <p className="text-sm mb-2 italic mt-20">
                    Last updated: 3rd February 2025
                </p>
                <p className="mt-4">
                    Welcome to Ambassy.io. These terms and conditions outline the rules and regulations for the use of Ambassy FZ LLC&aposs (&aposAmbassy.io&apos) website and services.
                </p>

                <h2 className="text-xl font-medium mt-8">
                    1. Acceptance of Terms
                </h2>
                <p className="mt-8 text-muted-foreground">
                    By accessing or using https://ambassy.io (&aposSite&apos), you expressly agree to be bound by these Terms of Use and the Ambassy.io privacy policy. Ambassy.io reserves the right to change these Terms of Use at any time, effective immediately upon posting on the Site.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    2. Use of the Site
                </h2>
                <h3 className="text-lg mt-8">
                    Limited License
                </h3>
                <p className="mt-8 text-muted-foreground">
                    You are granted a limited, non-exclusive, revocable, and non-transferable license to use and access the Site pursuant to these Terms of Use. Ambassy.io may change, suspend, or discontinue any aspect of the Site at any time without notice or liability.
                </p>
                <h3 className="text-lg mt-8">
                    Site Operation
                </h3>
                <p className="mt-8 text-muted-foreground">
                    United Arab Emirates (U.A.E) is our country of domicile. Ambassy.io controls this Site from the U.A.E. Users accessing the Site from other locations are responsible for compliance with local laws.
                </p>
                <h3 className="text-lg mt-8">
                    No Commercial Use
                </h3>
                <p className="mt-8 text-muted-foreground">
                    This Site may not be used for commercial purposes without prior written consent from Ambassy.io.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    3. User Responsibilities
                </h2>
                <h3 className="text-lg mt-8">
                    Your Account
                </h3>
                <p className="mt-8 text-muted-foreground">
                    If you use the Ambassy.io Site, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your account. You accept responsibility for all activities that occur under your account.
                </p>
                <h3 className="text-lg mt-8">
                    Representations by You
                </h3>
                <p className="mt-8 text-muted-foreground">
                    By visiting the Site, you represent, warrant, and covenant that (a) you are at least 18 years old; (b) all materials submitted by you to Ambassy.io through the Site will not plagiarize, violate, or infringe upon the rights of any third party.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    4. Intellectual Property
                </h2>
                <p className="mt-8 text-muted-foreground">
                    Ambassy.io respects intellectual property rights and may terminate the privileges of any user who infringes such rights. The Site&aposs content is the property of Ambassy.io and protected by intellectual property laws.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    5. Purchases and Payments
                </h2>
                <p className="mt-8 text-muted-foreground">
                    Ambassy.io accepts payment by Visa or Mastercard debit and credit cards in USD for its products and services. Once the payment is made, a confirmation notice will be sent via email within 1 minute of receipt of payment.
                </p>
                <h3 className="text-lg mt-8">
                    Cancellation and Refund Policy
                </h3>
                <p className="mt-8 text-muted-foreground">
                    Cancellations can be made at any time, but they are non-refundable. All services provided by Ambassy.io are non-refundable.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    6. Disclaimer and Liability
                </h2>
                <p className="mt-8 text-muted-foreground">
                    Ambassy.io makes no warranties of any kind regarding the Site. Ambassy.io shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from your use of the Site.
                </p>
                <h3 className="text-lg mt-8">
                    Indemnity
                </h3>
                <p className="mt-8 text-muted-foreground">
                    You agree to indemnify and hold Ambassy.io, its subsidiaries, affiliates, officers, agents, and employees harmless from any claims, damages, or expenses arising from your use of the Site.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    7. General Provisions
                </h2>
                <h3 className="text-lg mt-8">
                    Applicable Law
                </h3>
                <p className="mt-8 text-muted-foreground">
                    The laws of the United Arab Emirates shall govern the use of the Site and these Terms of Use. Any disputes shall be heard only by a court of competent jurisdiction in the U.A.E.
                </p>
                <h3 className="text-lg mt-8">
                    OFAC Sanctioned Countries
                </h3>
                <p className="mt-8 text-muted-foreground">
                    Ambassy.io will not trade with or provide any services to individuals and companies owned or controlled by, or acting for or on behalf of, OFAC-targeted countries and individuals, groups, and entities.
                </p>
                <h3 className="text-lg mt-8">
                    Severability
                </h3>
                <p className="mt-8 text-muted-foreground">
                    If any provision of these Terms of Use is held invalid, the remaining provisions shall continue in full force and effect.
                </p>

                <p className="mt-8 font-medium">
                    By using the Ambassy.io Site, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
                </p>
            </AnimationContainer>
        </MaxWidthWrapper>
    );
};

export default TermsPage;
