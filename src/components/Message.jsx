import React, { useState, useEffect } from "react";

const Message = ({ advice }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (advice) {
            setCount((prevCount) => prevCount + 1);
        }
    }, [advice]); // Run the effect whenever `advice` changes

    return (
        <p className="flex justify-center pt-6">
            You have read <strong> &nbsp;&nbsp;{count}&nbsp;&nbsp; </strong> pieces of advice.
        </p>
    );
};

export default Message;
