import { WidthWrapper, StyledLayout } from "./style";

interface Props {
    children: React.ReactNode | React.ReactNode[];
}

const Layout = ({ children }: Props) => {
    return (
        <StyledLayout>
            <WidthWrapper>
                {children}
            </WidthWrapper>
        </StyledLayout>
    )
};

export default Layout;
