import { NextSeo } from "next-seo";

import AboutHero from "@/components/about-hero";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import { EXPERIENCE } from "@/data/experience";
import { EDUCATION } from "@/data/education";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function About() {
  const getMonthNunber = (month: string) => {
    switch (month) {
      case "Jan":
        return 1;
      case "Feb":
        return 2;
      case "March":
        return 3;
      case "April":
        return 4;
      case "May":
        return 5;
      case "June":
        return 6;
      case "July":
        return 7;
      case "Aug":
        return 8;
      case "Sep":
        return 9;
      case "Oct":
        return 10;
      case "Nov":
        return 11;
      case "Dec":
        return 12;
      default:
        return 0;
    }
  };
  const getExperienceInYear = () => {
    const [sm, sY] = EXPERIENCE[EXPERIENCE.length - 1].date
      .split("-")[1]
      .split(",");
    const [em, eY] = EXPERIENCE[0].date.split("-")[0].split(",");
    return (
      ((Number(eY) - Number(sY)) * 12 +
        getMonthNunber(em) +
        12 -
        getMonthNunber(sm)) /
        12 -
      1
    ).toFixed(1);
  };
  return (
    <>
      <NextSeo
        title="About Pranav Sharma | Full Stack Engineer"
        description="Learn more about Pranav Sharma, a dedicated Full Stack Engineer with 2 years of experience. Discover the journey, skills, and passion that drive me to create innovative and user-friendly web solutions."
        canonical={`${siteMetadata.siteUrl}/about`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/about`,
          title: "Learn About Pranav Sharma - Full Stack Engineer",
          description:
            "Dive into the story of Pranav Sharma, a Full Stack Engineer. Uncover the experiences, skills, and passion that fuel a commitment to delivering exceptional web solutions.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Pranav Sharma - Portfolio Image",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Full Stack Engineer portfolio, Full Stack Engineer, React Developer, Frontend Developer, Web Developer, JavaScript, HTML, CSS, Professional Journey, Skills, Passion for Web Development",
          },
        ]}
      />
      <AboutHero />
      <ExperienceShowcaseList
        title={`Experience ( ${getExperienceInYear() + " Year"} )`}
        details={EXPERIENCE}
      />
      <ExperienceShowcaseList title="Education" details={EDUCATION} />
    </>
  );
}
