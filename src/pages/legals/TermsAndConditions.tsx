import React from 'react';

const TermsAndConditions = () => {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: "By accessing or using this website (the \"Site\"), you agree to be legally bound by these Terms and Conditions (the \"Terms\"), our Privacy Policy, and any other applicable policies posted on this Site. If you do not agree to these Terms, do not use this Site. These Terms apply to all visitors, users, and others who access or use the Site."
    },
    {
      title: "Intellectual Property Rights",
      content: "All content, features, and functionality on the Site—including but not limited to text, graphics, logos, icons, images, videos, software, and code—are the intellectual property of OmniSol AI, LLC or its licensors and are protected under U.S. and international copyright, trademark, patent, and other intellectual property laws. You may not use, copy, reproduce, republish, upload, post, transmit, distribute, or modify any content from this Site without our prior written consent, except as explicitly permitted under these Terms."
    },
    {
      title: "User Conduct",
      content: "You agree not to use the Site:",
      items: [
        "In any way that violates any applicable local, state, national, or international law or regulation",
        "To transmit any unsolicited or unauthorized advertising or promotional material",
        "To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Site",
        "To upload or distribute malicious software or code"
      ],
      footer: "We reserve the right to suspend or terminate your access to the Site for any violation of these Terms."
    },
    {
      title: "Third-Party Links",
      content: "The Site may contain links to third-party websites or services. We do not control and are not responsible for the content, privacy policies, or practices of any third-party sites or services. Inclusion of a link does not imply endorsement by OmniSol AI."
    },
    {
      title: "Disclaimers",
      content: "The Site and all content, materials, and services provided on or through the Site are provided \"as is\" and \"as available,\" without warranties of any kind, either express or implied. To the maximum extent permitted by applicable law, OmniSol AI disclaims all warranties, including but not limited to warranties of merchantability, fitness for a particular purpose, non-infringement, or uninterrupted or error-free use."
    },
    {
      title: "Limitation of Liability",
      content: "To the fullest extent permitted by law, in no event shall OmniSol AI, its affiliates, directors, officers, employees, agents, or licensors be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, arising out of:",
      items: [
        "Your use or inability to use the Site",
        "Any content obtained from the Site",
        "Unauthorized access to or alteration of your transmissions or data"
      ],
      footer: "Our total liability shall not exceed one hundred dollars ($100 USD), even if we have been advised of the possibility of such damages."
    },
    {
      title: "Indemnification",
      content: "You agree to defend, indemnify, and hold harmless OmniSol AI, its affiliates, officers, directors, employees, contractors, and agents from and against any claims, liabilities, damages, losses, and expenses—including reasonable attorney's fees—arising out of or in any way connected with your use of the Site or violation of these Terms."
    },
    {
      title: "Privacy",
      content: "Your use of the Site is also governed by our Privacy Policy, which explains how we collect, use, and disclose information that pertains to your privacy."
    },
    {
      title: "Modifications",
      content: "We may revise and update these Terms from time to time at our sole discretion. All changes are effective immediately when posted. By continuing to use the Site after the posting of revised Terms, you agree to be bound by the changes."
    },
    {
      title: "Governing Law and Jurisdiction",
      content: "These Terms are governed by and construed in accordance with the laws of the State of Missouri, without regard to its conflict of law provisions. You agree to submit to the exclusive jurisdiction of the state and federal courts located in St. Louis County, Missouri for any legal action or proceeding related to your use of the Site."
    },
    {
      title: "Contact Information",
      content: "If you have any questions or concerns about these Terms, you may contact us at:",
      contactItems: [
        { label: "Email", value: "info@omnisol.ai" },
        { label: "Website", value: "omnisol.ai" }
      ]
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
            Terms and Conditions
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
            By accessing or using this website (the "Site"), you agree to be legally bound by these Terms and Conditions (the "Terms"), our Privacy Policy, and any other applicable policies posted on this Site. If you do not agree to these Terms, do not use this Site.
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

                {section.contactItems && (
                  <div className="bg-gray rounded-xl p-6 space-y-4">
                    {section.contactItems.map((contact, contactIndex) => (
                      <div key={contactIndex}>
                        <p className="text-textColor font-semibold mb-1">{contact.label}:</p>
                        {contact.label === "Email" ? (
                          <a
                            href={`mailto:${contact.value}`}
                            className="text-orange hover:text-orange-100 font-medium text-lg underline"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-para text-lg">{contact.value}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {section.footer && (
                  <div className="mt-4 p-4 bg-orange-400 border-l-4 border-orange rounded-lg">
                    <p className="text-para">
                      {section.footer}
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
            Have Questions About Our Terms?
          </h2>
          <p className="text-weBuildText text-lg mb-6 max-w-2xl mx-auto">
            If you have any questions or concerns about these Terms and Conditions, please don't hesitate to reach out to our team.
          </p>
          <a
            href="mailto:info@omnisol.ai"
            className="inline-block bg-white text-orange px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-400 transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;