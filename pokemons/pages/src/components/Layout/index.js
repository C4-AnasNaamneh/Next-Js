import styles from "./layout.module.css"

export default function Layout ({children}) {
return (
    <div>
    <header className={styles.header}>this is header</header>
    <main  className={styles.main}>{children} </main>
    <footer className={styles.footer}>this is footer</footer>
    
    </div>
)

}
