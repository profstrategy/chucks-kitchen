import { onboardingSvg } from "./onboarding-svg"

const OnboardingCard = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="bg-[#F3F4F6] py-1.5 px-2.25 rounded-lg flex gap-2.75 items-center ">
        <div className="bg-[#FFE1C4] p-2.5 rounded-[13px] w-11 h-11 grid self-start">
            <i className="w-4 h-4 flexCenter grid m-auto text-primary-color">{onboardingSvg.forkAndKnife}</i>
        </div>
        <div>
        {children}
        </div>
    </div>
  )
}

export default OnboardingCard