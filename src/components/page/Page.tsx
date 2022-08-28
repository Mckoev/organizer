import React from 'react';
import './page.css'
import Icons from "../icons/Icons";

const Page = ({component}: { component: React.ReactNode }) => {
    return (
        <div className='page'>
            {component}
            <Icons/>
        </div>
    );
};

export default Page;