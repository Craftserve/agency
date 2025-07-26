import WrapperStyle from "./style";

interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return <WrapperStyle>{children}</WrapperStyle>;
};

export default Layout;
