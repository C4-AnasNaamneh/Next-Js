import styles from "./layout.module.css"

export default function Layout ({children}) {
return (
    <div >
    <header className={styles.header}>Header</header>
    <main  className={styles.main}>{children} </main>
    <footer className={styles.footer}>Footer</footer>
    
    </div>
)

}
