import { Fragment, memo, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { RenderWindow, Root, ScrolledFullSizeWrapper } from './VirtualizedList.styles';

interface VirtualizedListProps<T extends object> {
    data: T[];

    renderBuffer?: number;
    renderCount?: number;

    containerHeight: number;
    itemHeight: number;

    renderItem: (item: T) => ReactNode;
}
const _VirtualizedList = <T extends object>(props: VirtualizedListProps<T>) => {
    const {
        containerHeight,
        data,
        itemHeight,
        renderCount = 10,
        renderItem,
        renderBuffer = 5,
    } = props;

    const containerRef = useRef<HTMLDivElement>(null);
    const topTriggerRef = useRef<HTMLDivElement>(null);
    const bottomTriggerRef = useRef<HTMLDivElement>(null);

    const [startIndex, setStartIndex] = useState<number>(0);

    const safeStart = Math.min(startIndex, Math.max(0, data.length - 1));
    const safeEnd = Math.max(
        safeStart,
        Math.min(data.length - 1, startIndex + renderCount + renderBuffer)
    );

    const totalHeight = data.length * itemHeight;

    const shiftList = useCallback(
        (trigger: 'top' | 'bottom') => {
            setStartIndex(previous => {
                if (data.length <= renderCount) {
                    return 0;
                }

                const nextStartIndex = Math.max(0, previous - renderCount);
                const nextEndIndex = Math.min(data.length - renderCount, previous + renderCount);

                const next = trigger === 'top' ? nextStartIndex : nextEndIndex;

                return next;
            });
        },
        [data.length, renderCount]
    );

    const visibleItems = data.slice(safeStart, safeEnd + 1);
    const topOffset = startIndex * itemHeight;

    useEffect(() => {
        const options: IntersectionObserverInit = { root: containerRef.current, threshold: 0.1 };

        const observerCallback: IntersectionObserverCallback = entries => {
            for (const entry of entries) {
                if (!entry.isIntersecting) continue;

                if (entry.target === topTriggerRef.current) {
                    shiftList('top');
                    continue;
                }

                if (entry.target === bottomTriggerRef.current) {
                    shiftList('bottom');
                }
            }
        };

        const observer = new IntersectionObserver(observerCallback, options);

        if (topTriggerRef.current) observer.observe(topTriggerRef.current);

        if (bottomTriggerRef.current) observer.observe(bottomTriggerRef.current);

        return () => observer.disconnect();
    }, [shiftList]);

    return (
        <Root ref={containerRef} $height={containerHeight}>
            <ScrolledFullSizeWrapper $height={totalHeight}>
                <RenderWindow $top={topOffset}>
                    <div ref={topTriggerRef} style={{ height: 1 }} />

                    {visibleItems.map((item, index) => (
                        <Fragment key={startIndex + index}>{renderItem(item)}</Fragment>
                    ))}

                    <div ref={bottomTriggerRef} style={{ height: 1 }} />
                </RenderWindow>
            </ScrolledFullSizeWrapper>
        </Root>
    );
};

// typeof hack needed since there's no normal way for memo() to deal with generics
export const VirtualizedList = memo(_VirtualizedList) as typeof _VirtualizedList;
