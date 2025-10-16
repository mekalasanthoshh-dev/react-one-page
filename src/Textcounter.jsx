import React, { useRef, useState, useEffect } from "react";
function Textcounter() {
    
    const ScrollCounter = ({ targetNumber = 1000, duration = 2000 }) => {
        const ref = useRef<HTMLDivElement>(null);
        const [isVisible, setIsVisible] = useState(false);
        const [count, setCount] = useState(0);
        
        // Detect when element enters the viewport
        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setIsVisible(true);
                },
                { threshold: 0.5 } // trigger when 50% visible
            );
            
            if (ref.current) observer.observe(ref.current);
            
            return () => {
                if (ref.current) observer.unobserve(ref.current);
            };
        }, []);
        
        // Animate counter when visible
        useEffect(() => {
            if (!isVisible) return;
            
            let start = 0;
            const startTime = performance.now();
            
            const step = (timestamp) => {
                const progress = Math.min((timestamp - startTime) / duration, 1);
                const current = Math.floor(progress * targetNumber);
                setCount(current);
                if (progress < 1) requestAnimationFrame(step);
            };
            
            requestAnimationFrame(step);
        }, [isVisible, targetNumber, duration]);
        
        return (
            <div
            ref={ref}
            style={{
                fontSize: "2rem",
                fontWeight: "bold",
                textAlign: "center",
                margin: "200px 0",
            }}
            >
            {count.toLocaleString()}
            </div>
        );
    };
    return (
        <>
        <div>
        <div style={{ height: "100vh", background: "#eee" }}>
        Scroll down to trigger counter 👇
        </div>
        
        <ScrollCounter targetNumber={5000} duration={2500} />
        
        <div style={{ height: "100vh", background: "#eee" }}></div>
        </div>
        </>
    )
}

export default Textcounter
