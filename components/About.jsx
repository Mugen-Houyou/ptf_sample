import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
  Phone,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Gabriel Kim",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+1-631-428-0000",
  },
  {
    icon: <MailIcon size={20} />,
    text: "oooooo@hhhhhhh.ccc",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on Jan 01, 2005",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "B.S. in Information Systems",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "0 Somewhere Drive, Stony Brook, NY",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        institute: "Susung High School at Suwon",
        qualification: "High School Diploma",
        years: "2011-2013",
      },
      {
        institute: "Konkuk University",
        qualification: "Withdrawal",
        years: "2015-2020",
      },
      {
        institute: "SUNY Stony Brook",
        qualification: "Bachelor of Science",
        years: "2020-2023",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        organization: "Somewhere inc.",
        qualification: "test",
        years: "2013-2014",
      },
      {
        institute: "Woori FIS",
        qualification: "Infrastructure and Cloud Engineer Intern",
        years: "2025",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS, JS",
      },
      {
        name: "Frontend Development",
      },
      {
        name: "JS, React, Nextjs",
      },
      {
        name: "Frontend Development",
      },
      {
        name: "Python, Java, Spring",
      },
      {
        name: "Backend Development",
      },
      {
        name: "JS, React, Nextjs",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/vscode.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  console.log(getData(qualificationData, "education"));
  console.log(getData(qualificationData, "experience"));
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto ">
          about me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* Images */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative "
              imgSrc="/about/developer.png"
            />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none" >
                <TabsTrigger value='personal'>Personal Info</TabsTrigger>
                <TabsTrigger value='qualifications'>Qualifications</TabsTrigger>
                <TabsTrigger value='skills'>Skills</TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value='personal'>personal info</TabsContent>
                <TabsContent value='qualifications'>qualifications info</TabsContent>
                <TabsContent value='skills'>skills info</TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
