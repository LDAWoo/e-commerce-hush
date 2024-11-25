import React from "react";

const BackdropBackground = () => {
    return <div className="absolute top-0 pointer-events-none left-0 right-0 bottom-0 w-full h-full] bg-no-repeat bg-auto bg-[url('/assets/bg-backdrop.png')]" />;
};

export default React.memo(BackdropBackground);
