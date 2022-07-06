import BookReader from "../components/BookReader";
import exampleBook from "../assets/epub/alice.epub"

export default function ReaderExample(){
    return(
        <BookReader bookData={exampleBook}/>
    );
}