import BookReader from "../components/BookReader";
import { useFileBook } from "../providers/FileBookProvider";


export default function ReaderFile() {

    const {fileBook,setFileBook} = useFileBook();

console.log(fileBook);

    return (
        <>
            <BookReader bookData={fileBook} />
        </>
    );
}