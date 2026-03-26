import FooterV1 from '../footer/FooterV1';
import HeaderV1 from '../header/HeaderV1';
import HeaderV2 from '../header/HeaderV2';
import BreadCrumb from '../breadCrumb/BreadCrumb';

interface LayoutProps {
    children?: React.ReactNode;
    breadCrumb?: string;
    title?: string;
    headerVariant?: 'home' | 'default';
}

const LayoutV2 = ({ children, breadCrumb, title, headerVariant = 'default' }: LayoutProps) => {
    return (
        <>
            {headerVariant === 'home' ? <HeaderV1 /> : <HeaderV2 />}
            {breadCrumb && <BreadCrumb breadCrumb={breadCrumb} title={title} />}
            {children}
            <FooterV1 />
        </>
    );
};

export default LayoutV2;
