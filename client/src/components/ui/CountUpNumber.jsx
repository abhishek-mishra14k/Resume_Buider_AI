import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function CountUpNumber({
    value = 0,
    suffix = "",
    duration = 1800,
}) {
    const ref = useRef(null);

    const isInView = useInView(ref, {
        once: true,
    });

    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        let startTimestamp;

        const animate = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;

            const progress = Math.min(
                (timestamp - startTimestamp) / duration,
                1
            );

            const eased = 1 - Math.pow(1 - progress, 3);

            setCount(Math.floor(eased * value));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [value, duration, isInView]);

    return (
        <span ref={ref}>
            {count}
            {suffix}
        </span>
    );
}

export default CountUpNumber;