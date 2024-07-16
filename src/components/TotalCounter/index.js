import React, { useEffect, useState } from 'react';

const useSmoothCounter = (endValue, duration) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = endValue / (duration * 1000 / 16); // 16ms per frame

        const counter = setInterval(() => {
            start += increment;
            if (start >= endValue) {
                clearInterval(counter);
                setCount(endValue);
            } else {
                setCount(Math.ceil(start));
            }
        }, 16); // roughly 60 frames per second

        return () => clearInterval(counter);
    }, [endValue, duration]);

    return count;
};

const TotalCounter = () => {
    const projectsCompleted = useSmoothCounter(45, 2);
    const positiveReviews = useSmoothCounter(39, 2);
    const satisfiedCustomers = useSmoothCounter(34, 2);

    return (
        <div className="rating-sect">
            <div className="rating-text">
                <h1>
                    {projectsCompleted} <span>+</span>
                </h1>
                <p>Projects Completed</p>
            </div>
            <div className="rating-text">
                <h1>
                    {positiveReviews} <span>+ </span>
                </h1>
                <p>Positive Clients Reviews</p>
            </div>
            <div className="rating-text">
                <h1>
                    {satisfiedCustomers} <span>+ </span>
                </h1>
                <p>Satisfied Customers</p>
            </div>
        </div>
    );
};

export default TotalCounter;
