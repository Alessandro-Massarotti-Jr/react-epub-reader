import styles from "./styles.module.css";

import { Book } from "epubjs";
import { useEffect, useState } from "react";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { FaList } from "react-icons/fa";
import Loading from "../Layout/Loading";


export default function BookReader({bookData}) {


    const [bookTitle, setBookTitle] = useState('Reader');
    const [bookPercentage, setBookPercentage] = useState(0);
    const [bookNavigation, setBookNavigation] = useState([]);
    const [navigationIsOpen, setNavigationIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    function setNavigationIsOpenHandler() {
        if (navigationIsOpen) {
            setNavigationIsOpen(false);
        } else {
            setNavigationIsOpen(true);
        }
    }


    async function renderBook() {
        setIsLoading(true);


        const viewer = document.querySelector('#viewer');

        // Link de um arquivo.epub: 'https://react-reader.metabits.no/files/alice.epub'

        const book = new Book(bookData, {})
        const rendition = book.renderTo("viewer", {
            width: "100%",
            spread: "always",
        });
        await book.opened;

        var displayed = await rendition.display();

       

        const bookInfo = book.packaging.metadata

        setBookTitle(bookInfo.title);


        let itens = [];
  
        book.navigation.toc.forEach((item) => {
            itens.push(<a key={item.id} className={styles.bookNav__item} onClick={() => {
                rendition.display(item.href).then(() => {
                    setBookPercentage(Math.floor(rendition.currentLocation().start.percentage * 100));
                    setNavigationIsOpen(false);
                });
            }}>{item.label}</a>)
        });
        setBookNavigation(itens);

        var currentLocation = rendition.currentLocation();

        await book.locations.generate();

        if (viewer.childNodes.length > 1) {
            while (viewer.childNodes.length > 1) {
                viewer.removeChild(viewer.firstChild);
            }
        }

        if (viewer.childNodes.length === 1) {
            const nextButton = document.querySelector('#nextPageButton');
            const prevButton = document.querySelector('#prevPageButton')

            nextButton.addEventListener('click', () => {
                rendition.next();
                setBookPercentage(Math.floor(rendition.currentLocation().end.percentage * 100));
            });

            prevButton.addEventListener('click', () => {
                rendition.prev();
                setBookPercentage(Math.floor(rendition.currentLocation().start.percentage * 100));
            });
        }
        setIsLoading(false);
    }

    useEffect(() => {
        renderBook();
    }, []);

    return (
        <div className={`${styles.bookReader} ${isLoading && styles.loading}`}>
            {isLoading && <Loading/>}
            <div className={styles.bookReader__header}>
                <div className={styles.bookReader__header__right}>
                    <FaList onClick={setNavigationIsOpenHandler} className={styles.bookReader__openNavButton} />
                    <h1 className={styles.bookReader__header__title} >{bookTitle}</h1>
                </div>
                <div className={styles.bookReader__controls} >
                    <button id='prevPageButton'>< MdArrowBackIos /></button>
                    <p>{bookPercentage}%</p>
                    <button id="nextPageButton"><MdArrowForwardIos /></button>
                </div>
            </div>
            {navigationIsOpen &&
                <div className={styles.bookNav}>
                    {bookNavigation}
                </div>
            }
            <div className={styles.bookReader__bookContainer}>
                <div className={styles.bookField} id="viewer"></div>;
            </div>
        </div>
    );
}