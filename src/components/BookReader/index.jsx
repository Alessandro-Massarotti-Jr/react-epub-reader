import styles from "./styles.module.css";

import { Book } from "epubjs";
import { useEffect, useState } from "react";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { FaList } from "react-icons/fa";


export default function BookReader({bookData}) {


    const [bookTitle, setBookTitle] = useState('Reader');
    const [bookPercentage, setBookPercentage] = useState(0);
    const [bookNavigation, setBookNavigation] = useState([]);
    const [navigationIsOpen, setNavigationIsOpen] = useState(false);
    const [isBookLoading, setIsBookLoading] = useState(false);


    function setNavigationIsOpenHandler() {
        if (navigationIsOpen) {
            setNavigationIsOpen(false);
        } else {
            setNavigationIsOpen(true);
        }
    }


    async function renderBook() {
        setIsBookLoading(true);



        const epubFile = 'https://react-reader.metabits.no/files/alice.epub'


        const viewer = document.querySelector('#viewer');

        // Link de um arquivo.epub: 'https://react-reader.metabits.no/files/alice.epub'

        const book = new Book(bookData, {})
        const rendition = book.renderTo("viewer", {
            width: "100%",
            spread: "always",
        });
        await book.opened;

        var displayed = await rendition.display();

        console.log(book);

        const bookInfo = book.packaging.metadata

        setBookTitle(bookInfo.title);

        console.log(bookInfo);

        let itens = [];

        book.navigation.toc.forEach((item) => {
            itens.push(<a key={item.id} className={styles.bookNav__item} onClick={() => {
                // console.log(item);
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
        setIsBookLoading(false);
    }

    useEffect(() => {
        renderBook();
    }, []);

    return (
        <div className={`${styles.bookReader} ${isBookLoading && styles.loading}`}>
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
                <div id="viewer"></div>;
            </div>
        </div>
    );
}