import BookReader from "../components/BookReader";
import { useFileBook } from "../providers/FileBookProvider";


export default function ReaderFile() {

    const {fileBook,setFileBook} = useFileBook();

    return (
        <>
            <BookReader bookData={fileBook} />
        </>
    );
}