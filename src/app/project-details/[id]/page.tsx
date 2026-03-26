import LayoutV2 from '@/components/Layouts/LayoutV2';
import ProjectDetailsContent from '@/components/project/ProjectDetailsContent';
import PromoV1 from '@/components/promo/PromoV1';
import PortfolioData from "@/assets/jsonData/portfolio/PortfolioData.json"
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

const getValidProjectById = (id: string) => {
    if (!/^\d+$/.test(id)) {
        return null;
    }

    const projectId = Number(id);
    if (!Number.isSafeInteger(projectId) || projectId <= 0) {
        return null;
    }

    return PortfolioData.find((portfolio) => portfolio.id === projectId) || null;
};

interface Params {
    id: string;
}

interface PageProps {
    params: Promise<Params>;
}

export const dynamicParams = false;

export const generateStaticParams = () => {
    return PortfolioData.map((project) => ({
        id: String(project.id)
    }));
};

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
    const { id } = await params;
    const project = getValidProjectById(id);

    return {
        title: project
            ? `Duyen - ${project.title}`
            : "Duyen - Project Details"
    };
};

const ProjectDetailsPage = async ({ params }: PageProps) => {

    const { id } = await params;
    const data = getValidProjectById(id);

    if (!data) {
        notFound();
    }

    return (
        <>
            <LayoutV2 breadCrumb='project-details' title={data.title}>
                <ProjectDetailsContent projectInfo={data} totalProject={PortfolioData.length} />
                <PromoV1 />
            </LayoutV2>
        </>
    );
};

export default ProjectDetailsPage;
