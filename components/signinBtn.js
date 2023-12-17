import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function SignInButton() {
    return (
    <div className={styles.nav_options}>
        <div className={styles.nav_box}>
            <Image
                src="/lock.svg"
                width={18}
                height={18}
            />
            <p> Sign In</p>
          </div>
      </div>
    )
}