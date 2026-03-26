"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import PortfolioData from "@/assets/jsonData/portfolio/PortfolioData.json";

interface ProjectDetailData {
  detailSections?: ProjectDetailSection[];
  results?: ProjectResultItem[];
  results2?: ProjectResultItem[];
  challengeSections?: ProjectResultItem[];
  resultsHeading?: string;
  challengesHeading?: string;
  solutionHeading?: string;
  infoItems?: ProjectInfoItem[];
  client?: string;
  date?: string;
  followers?: string;
  field?: string;
  postingFrequency?: string;
  description?: string[];
  gallery?: string[];
  background?: string[];
  challenges?: string[];
  challengeTitle?: string;
  challengeList?: string[];
  challengeImage?: string;
  solution?: string[];
}

interface ProjectResultItem {
  title?: string;
  text: string;
  image?: string;
}

interface ProjectDetailSection {
  heading: string;
  items: ProjectResultItem[];
  listTitle?: string;
  listItems?: string[];
}

interface ProjectInfoItem {
  label: string;
  value: string;
}

interface ProjectDataType {
  id: number;
  title: string;
  thumbFull: string;
  details?: ProjectDetailData;
}

interface ProjectSingleProps {
  projectInfo: ProjectDataType;
  totalProject: number;
}

const renderFormattedText = (text: string) => {
  const lines = text.split(/<br\s*\/?>/i);

  return lines.map((line, lineIndex) => (
    <span key={`line-${lineIndex}`}>
      {line.split(/(<strong>.*?<\/strong>)/gi).map((segment, segmentIndex) => {
        const strongMatch = segment.match(/^<strong>(.*?)<\/strong>$/i);

        if (strongMatch) {
          return (
            <strong key={`segment-${lineIndex}-${segmentIndex}`}>
              {strongMatch[1]}
            </strong>
          );
        }

        return (
          <span key={`segment-${lineIndex}-${segmentIndex}`}>{segment}</span>
        );
      })}
      {lineIndex < lines.length - 1 && <br />}
    </span>
  ));
};

const ProjectDetailsContent = ({
  projectInfo,
  totalProject,
}: ProjectSingleProps) => {
  const { id, thumbFull, details } = projectInfo;

  // Image Scroll Animation
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Project Navigation
  const currentId = id;

  // Calculate the previous and next IDs dynamically
  const previousId = currentId === 1 ? totalProject : currentId - 1;
  const nextId = currentId === totalProject ? 1 : currentId + 1;

  // Get the previous and next project titles
  const previousProject = PortfolioData.find(
    (project) => project.id === previousId,
  );
  const nextProject = PortfolioData.find((project) => project.id === nextId);

  // Get the first two words of the project title
  const getFirstTwoWords = (text?: string) =>
    text?.split(" ").slice(0, 2).join(" ") || "No Title";

  const infoItems: ProjectInfoItem[] =
    details?.infoItems && details.infoItems.length > 0
      ? details.infoItems.filter(
          (item): item is ProjectInfoItem =>
            Boolean(item?.label) && Boolean(item?.value),
        )
      : [
          details?.client
            ? { label: "Client", value: details.client }
            : null,
          details?.date
            ? { label: "Date", value: details.date }
            : null,
          details?.followers
            ? { label: "Followers", value: details.followers }
            : null,
          details?.field
            ? { label: "Field", value: details.field }
            : null,
          details?.postingFrequency
            ? { label: "Posting frequency", value: details.postingFrequency }
            : null,
        ].filter((item): item is ProjectInfoItem => item !== null);
  const description =
    details?.description && details.description.length > 0
      ? details.description
      : [];
  const resultsHeading = details?.resultsHeading || "Results";
  const challengesHeading = details?.challengesHeading || "Challenges";
  const solutionHeading = details?.solutionHeading || "Solution";
  const results: ProjectResultItem[] =
    details?.results && details.results.length > 0
      ? details.results
      : details?.background && details.background.length > 0
        ? details.background.map((paragraph) => ({ text: paragraph }))
        : [];
  const challengeSections: ProjectResultItem[] =
    details?.challengeSections && details.challengeSections.length > 0
      ? details.challengeSections
      : details?.results2 && details.results2.length > 0
        ? details.results2
      : details?.challenges && details.challenges.length > 0
        ? details.challenges.map((paragraph, index, source) => ({
            text: paragraph,
            image:
              index === source.length - 1 ? details?.challengeImage : undefined,
          }))
        : [];
  const solution =
    details?.solution && details.solution.length > 0
      ? details.solution
      : [];
  const challengeList = details?.challengeList || [];
  const challengeTitle = details?.challengeTitle || "";
  const hasTopInfo = infoItems.length > 0 || description.length > 0;
  const detailSections: ProjectDetailSection[] =
    details?.detailSections && details.detailSections.length > 0
      ? details.detailSections.filter(
          (section): section is ProjectDetailSection =>
            Boolean(section?.heading) &&
            Array.isArray(section?.items) &&
            section.items.length > 0,
        )
      : [
          results.length > 0
            ? {
                heading: resultsHeading,
                items: results,
              }
            : null,
          challengeSections.length > 0 ||
          challengeList.length > 0 ||
          Boolean(challengeTitle)
            ? {
                heading: challengesHeading,
                items: challengeSections,
                listTitle: challengeTitle || undefined,
                listItems: challengeList.length > 0 ? challengeList : undefined,
              }
            : null,
          solution.length > 0
            ? {
                heading: solutionHeading,
                items: solution.map((text) => ({ text })),
              }
            : null,
        ].filter((section): section is ProjectDetailSection => section !== null);

  return (
    <>
      <div className="banner-animation-zoom overflow-hidden">
        <div className="container">
          <div className="image-move-bg">
            <div
              className="animation-zoom-banner"
              id="js-hero"
              style={{ width: `${100 + scroll / 18}%` }}
            >
              <Image
                src={`/assets/img/projects/${thumbFull}`}
                alt="Image Not Found"
                width={1600}
                height={700}
              />
            </div>
          </div>
        </div>
      </div>

      {hasTopInfo && (
        <div className="project-details-items default-padding">
          <div className="container">
            <div className="top-info">
              <div className="row">
                {infoItems.length > 0 && (
                  <div className="col-xl-4 col-lg-5 left-info mb-xs-40 mb-md-50">
                    <div className="project-single-info">
                      <ul>
                        {infoItems.map((item) => (
                          <li key={`${id}-${item.label}`}>
                            {item.label} <span>{item.value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                {description.length > 0 && (
                  <div
                    className={`${infoItems.length > 0 ? "right-info col-xl-8 col-lg-7 pl-50 pl-md-15 pl-xs-15 mt-md-10" : "col-12"}`}
                  >
                    <h2>Responsibilities</h2>
                    {description.map((paragraph, index) => (
                      <ul key={`${id}-description-${index}`}>
                        <li>{paragraph}</li>
                      </ul>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {detailSections.length > 0 && (
        <div className="project-details-items default-padding bg-gray">
          <div className="container">
            <div className="item-grid-container">
              {detailSections.map((section, sectionIndex) => (
                <div
                  className="single-grid"
                  key={`${id}-detail-section-${sectionIndex}`}
                >
                  <div className="item-grid-colum">
                    <div className="left-info">
                      <h2>{section.heading}</h2>
                    </div>
                    <div className="right-info">
                      {section.items.map((paragraph, index) => (
                        <div
                          className="project-result-block"
                          key={`${id}-section-${sectionIndex}-item-${index}`}
                        >
                          {paragraph.title && (
                            <h3>{paragraph.title}</h3>
                          )}
                          <p>{renderFormattedText(paragraph.text)}</p>
                          {paragraph.image && (
                            <div className="project-result-media">
                              <Image
                                src={`/assets/img/projects/${paragraph.image}`}
                                alt={`${projectInfo.title} detail ${sectionIndex + 1}-${index + 1}`}
                                width={1200}
                                height={700}
                              />
                            </div>
                          )}
                        </div>
                      ))}
                      {section.listTitle && <h3>{section.listTitle}</h3>}
                      {section.listItems && section.listItems.length > 0 && (
                        <ul className="list-style-one">
                          {section.listItems.map((item, index) => (
                            <li key={`${id}-section-${sectionIndex}-list-${index}`}>
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="project-pagination default-padding-bottom bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="project-paginvation-items mt-xs--25 mt-md--25">
                <div className="project-previous">
                  <Link href={`/project-details/${previousId}`}>
                    <div className="icon">
                      <i className="fas fa-angle-double-left" />
                    </div>
                    <div className="nav-title">
                      {" "}
                      Previous Post{" "}
                      <h5>{getFirstTwoWords(previousProject?.title)}</h5>
                    </div>
                  </Link>
                </div>

                <div className="project-all">
                  <Link href="/projects">
                    <i className="fas fa-th-large" />
                  </Link>
                </div>

                <div className="project-next">
                  <Link href={`/project-details/${nextId}`}>
                    <div className="nav-title">
                      Next Post <h5>{getFirstTwoWords(nextProject?.title)}</h5>
                    </div>
                    <div className="icon">
                      <i className="fas fa-angle-double-right" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsContent;
