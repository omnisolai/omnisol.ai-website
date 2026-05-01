import React from 'react';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Information We Collect",
      content: "We may collect the following types of information:",
      subsections: [
        {
          subtitle: "1.1. Personal Information",
          items: [
            "Name, email address, phone number",
            "Company name, job title, or billing details",
            "Any information submitted through contact forms, email, or service requests"
          ]
        },
        {
          subtitle: "1.2. Automatically Collected Data",
          description: "When you visit our website, we may automatically collect:",
          items: [
            "IP address",
            "Browser type",
            "Operating system",
            "Pages viewed and the dates/times of your visits",
            "Cookies and tracking data"
          ]
        }
      ]
    },
    {
      title: "How We Use Your Information",
      content: "We may use your information to:",
      items: [
        "Provide and improve our services",
        "Respond to inquiries or customer support requests",
        "Send administrative information (e.g., service changes or policy updates)",
        "Send marketing or promotional content (you can opt-out anytime)",
        "Detect, prevent, and address technical issues or fraudulent activity"
      ]
    },
    {
      title: "Sharing Your Information",
      content: "We do not sell your personal information. We may share your information only:",
      items: [
        "With service providers who perform services on our behalf (e.g., hosting, analytics)",
        "To comply with legal obligations or respond to lawful requests",
        "In connection with a business transfer (e.g., merger, acquisition, or sale of assets)"
      ]
    },
    {
      title: "Your Rights",
      content: "Depending on your location, you may have certain rights, including:",
      items: [
        "The right to access or request a copy of your data",
        "The right to correct, delete, or restrict use of your data",
        "The right to object to certain data uses (e.g., marketing)",
        "The right to data portability",
        "The right to withdraw consent at any time (where consent is the basis for processing)"
      ],
      footer: "You may exercise these rights by contacting us at Info@omnisol.ai."
    },
    {
      title: "Data Retention",
      content: "We retain personal information only for as long as necessary to fulfill the purposes described in this Policy, unless a longer retention period is required by law."
    },
    {
      title: "Security",
      content: "We implement reasonable security measures to protect your personal data. However, no transmission over the internet is completely secure, and we cannot guarantee absolute security."
    },
    {
      title: "Third-Party Services",
      content: "We may use third-party services like analytics providers (e.g., Google Analytics). These services may collect information as described in their own privacy policies."
    },
    {
      title: "Children's Privacy",
      content: "Our services are not directed to individuals under the age of 13, without the consent and monitoring of an adult or legal guardian, and we do not knowingly collect personal information from children."
    },
    {
      title: "Changes to This Policy",
      content: "We may update this Privacy Policy at any time. If material changes are made, we will notify you by email or prominent notice on the site. Continued use of the site constitutes your agreement to the revised policy."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-main">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-orange to-orange-100 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-header-sub border border-header-box-border px-4 py-2 rounded-full mb-6">
            <span className="text-header-sub-color font-medium text-sm">Last Updated: April 11th, 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Privacy Policy
          </h1>
          <p className="text-white/90 text-lg">
            omnisol.ai
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-badgeBg border border-badgeBorder rounded-2xl p-8 mb-12">
          <p className="text-textColor text-lg leading-relaxed">
            OmniSol AI ("Company," "we," "us," or "our") values your privacy. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you visit our website or use our services.
          </p>
        </div>

        {/* Main Content Sections */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <div key={index} className="scroll-mt-24">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-textColor mb-4">
                    {section.title}
                  </h2>
                </div>
              </div>

              <div className="ml-14">
                {section.content && (
                  <p className="text-para text-lg leading-relaxed mb-4">
                    {section.content}
                  </p>
                )}

                {section.items && (
                  <ul className="space-y-3 mb-4">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-2 h-2 rounded-full bg-orange mt-2"></span>
                        <span className="text-para text-lg leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.subsections && (
                  <div className="space-y-6">
                    {section.subsections.map((subsection, subIndex) => (
                      <div key={subIndex} className="bg-gray rounded-xl p-6">
                        <h3 className="text-xl font-semibold text-textColor mb-3">
                          {subsection.subtitle}
                        </h3>
                        {subsection.description && (
                          <p className="text-para mb-3">{subsection.description}</p>
                        )}
                        {subsection.items && (
                          <ul className="space-y-2">
                            {subsection.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-orange-100 mt-2"></span>
                                <span className="text-para">{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {section.footer && (
                  <div className="mt-4 p-4 bg-orange-400 border-l-4 border-orange rounded-lg">
                    <p className="text-para">
                      {section.footer.split('Info@omnisol.ai')[0]}
                      <a
                        href="mailto:Info@omnisol.ai"
                        className="text-orange hover:text-orange-100 font-semibold underline"
                      >
                        Info@omnisol.ai
                      </a>
                      {section.footer.split('Info@omnisol.ai')[1]}
                    </p>
                  </div>
                )}
              </div>

              {index < sections.length - 1 && (
                <div className="mt-8 border-b border-line"></div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-br from-weBuildBg to-orange-100 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Questions About Your Privacy?
          </h2>
          <p className="text-weBuildText text-lg mb-6 max-w-2xl mx-auto">
            If you have any questions or concerns about this Privacy Policy or how we handle your data, please don't hesitate to reach out.
          </p>
          <a
            href="mailto:Info@omnisol.ai"
            className="inline-block bg-white text-orange px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-400 transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>

    </div>
  );
};

export default PrivacyPolicy;
