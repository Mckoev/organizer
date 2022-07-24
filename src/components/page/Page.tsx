import React from 'react';
import PropTypes from 'prop-types';
import './page.css'
import Icons from "../icons/Icons";

const Page = ({ component }: { component: React.ReactNode}) => {
    return (
        <div className='page'>
            {component}
            <Icons/>
        </div>
    );
};

Page.propTypes = {

};

export default Page;