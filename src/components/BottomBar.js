import GitHubIcon from '@mui/icons-material/GitHub';
import { GITHUB } from '@/src/utils/constants';
import ColorScale from './ColorScale';
import styles from '@/styles/BottomBar.module.css';

export default function BottomBar() {
    return (
        <div className={styles.bottomBar}>
            {/* <ColorScale /> TODO: Uncomment once hover text is implemented  */}
            <GitHubIcon className={styles.github} onClick={() => window.open(GITHUB, '_blank')} />
        </div>
    )
}