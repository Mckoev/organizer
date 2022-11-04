import Icons from 'components/Icons/Icons';
import { Outlet } from "react-router-dom";
import styles from './layout.module.scss';

function Layout() {
    return (
        <div className={styles.layout}>
          <Outlet/>
            <Icons />
        </div>
    );
}

export default Layout;
