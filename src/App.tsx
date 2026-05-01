import { useEffect, useState } from "react";
import Landingpage from "./pages/Landingpage";
import ChatbotDevelopmentService from "./pages/services-page/chatbot-development-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AiDevelopmentServices from "./pages/services-page/ai-development-page/index";
import AiAgents from "./pages/services-page/ai-agent-page/index";
import GenerativeAi from "./pages/services-page/generative-ai-page/index";
import AiPoc from "./pages/services-page/ai-proof-of-concept-page/index";
import DataMigration from "./pages/services-page/data-migration-page";
import AiConsulting from "./pages/services-page/ai-consulting-page";
import DigitalTransformation from "./pages/services-page/digital-transformation-page";
import DiscoveryWorkshop from "./pages/services-page/discovery-workshop-page";
import TechnicallyFeasibility from "./pages/services-page/technical-feasibilty-page";
import UserExperience from "./pages/services-page/user-experience-page";
import ErrorPage from "./pages/NotFound";
import ContactPage from "./pages/ContactPage";
import JobApplication from "./pages/careers-page/job-application-page";
import OpenPositions from "./pages/careers-page/open-positions";
import ReferralPage from "./pages/referral-page";
import { Toaster } from "react-hot-toast";
import ProjectBasedDelivery from "./pages/project-based-delivery-page";
import DedicatedTeam from "./pages/dedicated-team-page";
import GoToMarket from "./pages/go-to-market-page";
import BlogScreen from "./pages/blogs-page";
import BlogDetail from "./pages/blogs-page/BlogDetail.tsx";
import PrivacyPolicy from "./pages/legals/PrivacyPolicy.tsx";
import TermsAndConditions from "./pages/legals/TermsAndConditions.tsx";
import CookiePolicy from "./pages/legals/CookiePolicy.tsx";
import Countdown from "./pages/countdown-page/Countdown.tsx";

// June 1, 2026 00:00:00 local time
const LAUNCH_DATE = new Date("2026-06-01T00:00:00");

const isLaunched = () => new Date() >= LAUNCH_DATE;

const router = createBrowserRouter([
  {
    path: "/",
    element: isLaunched() ? <MainLayout /> : <Countdown />,
    errorElement: <ErrorPage />,
    children: isLaunched()
      ? [
          { index: true, element: <Landingpage /> },

          // Services
          { path: "services/ai-development", element: <AiDevelopmentServices /> },
          { path: "services/ai-agents", element: <AiAgents /> },
          { path: "services/chatbot-development", element: <ChatbotDevelopmentService /> },
          { path: "services/generative-ai", element: <GenerativeAi /> },
          { path: "services/ai-proof-of-concept", element: <AiPoc /> },
          { path: "services/data-migration", element: <DataMigration /> },
          { path: "services/ai-consulting", element: <AiConsulting /> },
          { path: "services/digital-transformation", element: <DigitalTransformation /> },
          { path: "services/workshop", element: <DiscoveryWorkshop /> },
          { path: "services/technical-feasibility", element: <TechnicallyFeasibility /> },
          { path: "services/user-experience", element: <UserExperience /> },

          // Contact
          { path: "contact", element: <ContactPage /> },

          // Special service
          { path: "special/project-based-delivery", element: <ProjectBasedDelivery /> },
          { path: "special/dedicated-team", element: <DedicatedTeam /> },
          { path: "special/go-to-market", element: <GoToMarket /> },

          // Hiring
          { path: "careers/job-application", element: <JobApplication /> },
          { path: "careers/open-positions", element: <OpenPositions /> },

          // Blog
          { path: "blog", element: <BlogScreen /> },
          { path: "blog/:slug", element: <BlogDetail /> },

          // Referral
          { path: "referral", element: <ReferralPage /> },

          // Legals
          { path: "legal/privacy-policy", element: <PrivacyPolicy /> },
          { path: "legal/terms-and-conditions", element: <TermsAndConditions /> },
          { path: "legal/cookie-policy", element: <CookiePolicy /> },

          // Not Found
          { path: "*", element: <ErrorPage /> },
        ]
      : [], // No child routes during countdown
  },
]);

function App() {
  const titles = [
    "Omnisol AI | Let us craft your digital success",
    "Omnisol AI | AI solutions tailored for your business",
    "Omnisol AI | Build smarter, scale faster",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    document.title = titles[index];

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <>
      <Toaster />
      <RouterProvider router={router} />
    </>
  );
}

export default App;