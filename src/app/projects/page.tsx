import LayoutV2 from '@/components/Layouts/LayoutV2';
import PortfolioV1 from '@/components/portfolio/PortfolioV1';

export const metadata = {
    title: "Duyen"
}

const ProjectsPage = () => {
    return (
        <>
            <LayoutV2 headerVariant='home' breadCrumb='Projects' title='Digital marketing and analytical solution'>
                <PortfolioV1 sectionClass='default-padding-bottom' hasTitle={false} />
            </LayoutV2>
        </>
    );
};

export default ProjectsPage;
