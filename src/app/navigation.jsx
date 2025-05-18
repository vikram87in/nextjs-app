import Link from 'next/link'
import styles from './navigation.module.css'


function Navigation() {
  return (
    <div className={styles.navigation}>
      <Link href="/" className={styles.link} >Home</Link>
      <Link href="/about" className={styles.link} >About</Link>
    </div>
  )
}

export default Navigation