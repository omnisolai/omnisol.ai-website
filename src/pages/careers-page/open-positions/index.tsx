import HeadingSection from "../../../components/commons/HeadersAllScreen";
import OpenPositions from "./_components/OpenPositionSection"
import Faq from "../../../components/commons/Faq"

const JobApplication = () => {
    return (
        <>
            <HeadingSection
                Heading={"Careers"}
                Title={"Let’s build OmnisolAI more better, together"}
                Description={"Join us in helping people create richer and more productive relationships."}

            />
            <OpenPositions />
            <Faq />
        </>
    )
}

export default JobApplication;