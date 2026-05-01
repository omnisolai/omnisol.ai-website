import HeadingSection from "@/components/commons/HeadersAllScreen"
import ReferralSection from "./_components/ReferralSection"

const ReferralPage = () => {
    return (
        <>
            <HeadingSection
                Heading={"Referral program"}
                Title={"Earn with Omnisol"}
                Description={"Join us in helping people create richer and more productive relationships."}

            />
            <ReferralSection />
        </>
    )
}

export default ReferralPage;