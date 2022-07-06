
import BookReader from "../components/BookReader";
import { useUrlBook } from "../providers/UrlBookProvider";

export default function ReaderUrl() {

   const {urlBook,setUrlBook} = useUrlBook();


    return (
        <>
            <BookReader bookData={urlBook} />
        </>
    );
}