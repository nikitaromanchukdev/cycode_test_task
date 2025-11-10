import { HighlightText } from './Search.styles';

interface SearchMatchHighlightProps {
    searched: string;
    children: string;
}

export const SearchMatchHighlight: React.FC<SearchMatchHighlightProps> = props => {
    const { searched, children } = props;

    if (!searched) return <>{children}</>;

    const regex = new RegExp(`(${searched})`, 'gi');
    const chunks = children.split(regex);

    return (
        <>
            {chunks.map((chunk, index) => {
                if (chunk.toLowerCase() !== searched.toLowerCase())
                    return <span key={index}>{chunk}</span>;

                return <HighlightText key={index}>{chunk}</HighlightText>;
            })}
        </>
    );
};
