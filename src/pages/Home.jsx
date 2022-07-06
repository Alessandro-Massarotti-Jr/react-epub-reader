import FormFileBook from "../components/FormFileBook";
import FormUrlBook from "../components/FormUrlBook";
import styles from "./home.module.css"

export default function Home() {
    return (
        <>
            <section className={styles.formContainer}>
                <FormUrlBook />
                <div className={styles.formContainer__descripition}>
                    <h2>Livro a partir de um link</h2>
                    <p>Neste formulario ao inserir a url de um arquivo .epub o usuario será redirecionado para o leitor com o livro pronto para leitura.</p>
                </div>
            </section>
            <section className={styles.formContainerReverse}>
                <FormFileBook />
                <div className={styles.formContainer__descripition}>
                    <h2>Livro a partir de um arquivo</h2>
                    <p>Neste formulario ao inserir um arquivo .epub de seu computador o usuario será redirecionado para o leitor com o livro pronto para leitura.</p>
                </div>
            </section>

        </>
    );
}