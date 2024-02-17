import { useState } from "react";
import { faq, plansDetails, subscriptionMail } from "../../constans";

type PlanType = "Basic" | "Professional" | "Team";

const Billing = () => {
  const [period, setPeriod] = useState<"monthly" | "6month">("monthly");

  const handlePeriodChange = (period: "monthly" | "6month") => {
    setPeriod(period);
  };

  const getPrice = (plan: "Basic" | "Professional" | "Team"): number => {
    // Placeholder logic
    const selectedPlanDetails = plansDetails[plan]?.[0];
    if (selectedPlanDetails) {
      if (period === "monthly") {
        return selectedPlanDetails.price[0];
      } else {
        const discountedPrice =
          selectedPlanDetails.price[0] *
          (1 -
            (selectedPlanDetails.discount_rate
              ? selectedPlanDetails.discount_rate[0]
              : 0));
        return discountedPrice * 6;
      }
    }
    return 0;
  };

  const getDiscountPercentage = (plan: "Professional" | "Team"): number => {
    const selectedPlanDetails = plansDetails[plan]?.[0];
    if (selectedPlanDetails && period === "6month") {
      const discountRate = selectedPlanDetails.discount_rate?.[0] || 0;
      return Math.round(discountRate * 100);
    }
    return 0;
  };

  const renderFeatures = (features: string[], planName: string) => {
    return (
      <ul className="flex flex-col justify-center gap-1 mt-6">
        {features.map((feature, index) => {
          let featureClass = "";

          switch (planName) {
            case "Basic":
              featureClass = index < 6 ? "active-feature" : "";
              break;
            case "Professional":
              featureClass = index < 8 ? "active-feature" : "";
              break;
            case "Team":
              featureClass = "active-feature";
              break;
            default:
              featureClass = "";
              break;
          }

          return (
            <li
              key={index}
              className={`flex gap-2 text-zinc-500 items-center p-1 ${featureClass}`}
            >
              {featureClass !== "" ? (
                <img
                  src="/assets/icons/check.svg"
                  alt="Check"
                  className="w-[15px] h-[15px]"
                />
              ) : (
                <img
                  src="/assets/icons/cross.svg"
                  alt="cross"
                  className="opacity-40 w-[15px] h-[15px]"
                />
              )}
              {feature}
            </li>
          );
        })}
      </ul>
    );
  };

  const renderHookText = (plan: "Basic" | "Professional" | "Team"): string => {
    const selectedPlanDetails = plansDetails[plan]?.[0];
    if (selectedPlanDetails) {
      if (
        period === "monthly" &&
        (plan === "Professional" || plan === "Team")
      ) {
        const { discount_rate } = selectedPlanDetails;
        const discountAmount =
          getPrice(plan) * 6 * (discount_rate ? discount_rate[0] : 0);
        return `Save $${discountAmount} half-year`;
      } else {
        if (plan === "Professional") {
          return "Join as a creator";
        } else {
          return "Let’s build trust.";
        }
      }
    }
    return "";
  };

  // compose mail
  const handleGetSubscription = (plan: PlanType) => {
    const mailData = subscriptionMail[0][plan];
    if (mailData) {
      const { subject, mail } = mailData;
      const mailBody = generateMailBody(mail);
      window.location.href = `mailto:heynihals@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(mailBody)}`;
    }
  };

  const generateMailBody = (mailArray: string[]) => {
    let body = "";
    let isInList = false;

    for (let i = 0; i < mailArray.length; i++) {
      const item = mailArray[i];

      if (item.startsWith("-")) {
        if (!isInList) {
          isInList = true;
        }
        body += item + "\n";
      } else {
        if (isInList) {
          body += "\n\n";
          isInList = false;
        }
        body += item + "\n\n";
      }
    }

    return body.trim(); // Trim extra whitespace at the end
  };

  // faq functions ----------------

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="common-container">
      <div className="flex-center flex-col">
        <div className="text-center">
          <h1 className="page-heading">
            I've got a plan that's <br /> perfect for your content.
          </h1>
          <p className="text-light mt-3 small-regular">
            Watch anywhere. Cancel anytime.
          </p>
        </div>
        <div className="plan-period_buttons">
          <button
            className={`plan-btn ${
              period === "monthly" ? "bg-green text-zinc-800" : ""
            }`}
            onClick={() => handlePeriodChange("monthly")}
          >
            Monthly
          </button>
          <button
            className={`plan-btn ${
              period === "6month" ? "bg-green text-zinc-800" : ""
            }`}
            onClick={() => handlePeriodChange("6month")}
          >
            Half year
          </button>
        </div>

        <div className="pricing-grid">
          {Object.keys(plansDetails).map((plan) => {
            const planName = plan as "Basic" | "Professional" | "Team";
            const planFeatures = plansDetails[planName]?.[0].features;
            const nameColor =
              plan === "Basic"
                ? "text-yellow"
                : plan === "Professional"
                ? "text-green"
                : plan === "Team"
                ? "text-blue"
                : "";

            return (
              <div
                key={plan}
                className={`pricing-grid_content ${plan.toLowerCase()} ${
                  plan === "Professional" ? "professional-plan" : ""
                } ${plan !== "Professional" ? "lg:border-none" : ""}`}
              >
                <div className="text-center">
                  <p className={`body-regular pb-2 ${nameColor}`}>{plan}</p>
                  <div className="flex  items-center justify-center">
                    <h1 className="h1-bold">${getPrice(planName)}</h1>
                    {period === "6month" &&
                      (plan === "Professional" || plan === "Team") && (
                        <span className=" pl-2 small-medium text-red">
                          -{getDiscountPercentage(plan)}%
                        </span>
                      )}
                  </div>
                </div>
                {renderFeatures(planFeatures, planName)}
                <div className="flex-center flex-col mt-4 w-full">
                  <button
                    className={`get-plan_btn ${
                      planName === "Professional" ? "bg-green text-black" : ""
                    }`}
                    onClick={() => handleGetSubscription(planName)}
                  >
                    Get Access
                  </button>
                  <span className="hook-text mt-3">
                    {renderHookText(planName)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <span className="block text-center small-regular text-zinc-400 my-[6rem]">
          Chose you suite and just send the MAIL i will confirm your Plan.
        </span>
      </div>
      <div className="flex items-center flex-col">
        <h1 className="h2-semibold">Frequently Asked Questions</h1>
        <ul className="flex flex-col gap-5 max-w-[70%] m-auto">
          {faq.map((faqItem, index) => (
            <li
              key={index}
              onClick={() => toggleFaq(index)}
              className="flex flex-col bg-zinc-900 py-4 px-5 rounded-lg cursor-pointer"
            >
              <div className="faq-question flex items-center justify-between min-w-full">
                <h3 className="body-semibold">{faqItem.question}</h3>
                <img
                  src={
                    openIndex === index
                      ? "/assets/icons/cross.svg"
                      : "/assets/icons/plus.svg"
                  }
                  alt=""
                  width={22}
                  style={{ cursor: "pointer" }}
                />
              </div>
              {/* Show the answer if the FAQ item is open */}
              <p
                className={`faq-ans pt-2 text-light text-sm leading-6 max-w-[90%] ${
                  openIndex === index ? "block" : "hidden"
                }`}
              >
                {faqItem.ans}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Billing;
