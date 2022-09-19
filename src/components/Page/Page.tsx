import React from 'react';
import Icons from 'components/Icons/Icons';
import styles from './page.module.scss';

function Page({ component }: { component: React.ReactNode }) {
    return (
        <div className={styles.page}>
            {component}
            <Icons />
        </div>
    );
}

export default Page;
