function PageContent({ children }: { children: React.ReactNode }) {
    return (
        <span className="mt-6 px-2">
            {children}
        </span>
    );
}

export default PageContent;
