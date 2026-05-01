import React from 'react';

const CookiePolicy = () => {
  const sections = [
    {
      title: "What Are Cookies?",
      content: "Cookies are small text files stored on your device when you visit a website. They help us understand how users interact with the site, remember preferences, and improve your experience."
    },
    {
      title: "Types of Cookies We Use",
      content: "We use the following types of cookies:",
      subsections: [
        {
          subtitle: "2.1. Essential Cookies",
          description: "These cookies are necessary for the website to function (e.g., login, navigation)."
        },
        {
          subtitle: "2.2. Analytics Cookies",
          description: "These cookies help us understand how visitors interact with the website (e.g., Google Analytics)."
        },
        {
          subtitle: "2.3. Functional Cookies",
          description: "These cookies remember preferences and settings (e.g., language, region)."
        },
        {
          subtitle: "2.4. Marketing Cookies",
          description: "These cookies are used to deliver relevant ads and track ad performance (only used if user consents)."
        }
      ]
    },
    {
      title: "How You Can Control Cookies",
      content: "You can manage your cookie preferences through:",
      items: [
        "Your browser settings (to block or delete cookies)",
        "The cookie consent banner shown on your first visit",
        "Changing your preferences at any time by contacting us"
      ],
      footer: "Note: Disabling some cookies may affect the functionality of the site."
    },
    {
      title: "Third-Party Cookies",
      content: "Some cookies are placed by third-party services we use (e.g., analytics or embedded content). These providers have their own privacy and cookie policies."
    },
    {
      title: "Updates",
      content: "We may update this Cookie Notice periodically. The updated version will be posted on this page with a revised date."
    },
    {
      title: "Contact",
      content: "For questions about our cookie practices, please email:",
      contactItems: [
        { label: "Email", value: "info@omnisol.ai" }
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
            Cookie Policy
          </h1>
          <p className="text-white/90 text-lg">
            omnisol.ai
          </p>~
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-badgeBg border border-badgeBorder rounded-2xl p-8 mb-12">
          <p className="text-textColor text-lg leading-relaxed">
            OmniSol AI ("Company," "we," "us," or "our") uses cookies and similar tracking technologies to enhance your experience on our website. This Cookie Notice explains what cookies are, how we use them, and how you can manage your cookie preferences.
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
                  <div className="space-y-4">
                    {section.subsections.map((subsection, subIndex) => (
                      <div key={subIndex} className="bg-gray rounded-xl p-6 border border-lightborder">
                        <h3 className="text-xl font-semibold text-textColor mb-3">
                          {subsection.subtitle}
                        </h3>
                        {subsection.description && (
                          <p className="text-para leading-relaxed">{subsection.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {section.contactItems && (
                  <div className="bg-gray rounded-xl p-6 border border-lightborder">
                    {section.contactItems.map((contact, contactIndex) => (
                      <div key={contactIndex}>
                        <p className="text-textColor font-semibold mb-2">{contact.label}:</p>
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

        {/* Call to Action Section */}
        <div className="mt-16 bg-gradient-to-br from-weBuildBg to-orange-100 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Manage Your Cookie Preferences
          </h2>
          <p className="text-weBuildText text-lg mb-6 max-w-2xl mx-auto">
            You have the right to control your cookie preferences. Review this policy to understand how we use cookies and reach out if you have any questions.
          </p>
          <a
            href="mailto:info@omnisol.ai"
            className="inline-block bg-white text-orange px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-400 transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>

        {/* Additional Info Box */}
        <div className="mt-12 bg-header-sub border border-header-box-border rounded-2xl p-8">
          <h3 className="text-xl font-bold text-header-sub-color mb-4">
            Browser Cookie Controls
          </h3>
          <p className="text-para mb-4">
            Most browsers allow you to control cookies through settings. Here's how you can manage them in popular browsers:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-2 h-2 rounded-full bg-orange mt-2"></span>
              <span className="text-para"><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-2 h-2 rounded-full bg-orange mt-2"></span>
              <span className="text-para"><strong>Firefox:</strong> Preferences → Privacy & Security → Cookies and Site Data</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-2 h-2 rounded-full bg-orange mt-2"></span>
              <span className="text-para"><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-2 h-2 rounded-full bg-orange mt-2"></span>
              <span className="text-para"><strong>Edge:</strong> Settings → Privacy, search and services → Clear browsing data</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
