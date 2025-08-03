import StyledLayout from "./style";

interface Props {
    children: React.ReactNode | React.ReactNode[];
}

const Layout = ({ children }: Props) => {
    return <StyledLayout>{children}</StyledLayout>;
};

export default Layout;
