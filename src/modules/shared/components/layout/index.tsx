import LayoutStyle from "./style";

interface Props {
    children: React.ReactNode | React.ReactNode[];
}

const Layout = ({ children }: Props) => {
    return <LayoutStyle>{children}</LayoutStyle>;
};

export default Layout;
