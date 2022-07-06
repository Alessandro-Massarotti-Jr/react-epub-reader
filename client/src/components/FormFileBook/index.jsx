import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFileBook } from "../../providers/FileBookProvider";

import styles from "./styles.module.css"

export default function FormFileBook() {

    const navigate = useNavigate();


    const { fileBook, setFileBook } = useFileBook();
    const [bookFile,setBookFile] = useState('')


    async function readUrlBook(event) {
        event.preventDefault();

        console.log(bookFile);
             
        const formData = new FormData();
        formData.append('file',bookFile)

        const request = await fetch('http://localhost:3001/sendFile',{
            method:"POST",
            headers: { },
            body:formData
        })

        const data = await request.json();

        console.log(data);

        setFileBook(data.file_url);


    console.log(data.file_url);
        console.log(fileBook);
        
        setTimeout(()=>{
            navigate('/reader/file', { replace: true });
        },5000)
       
    }

    return (
        <form onSubmit={(event) => { readUrlBook(event); }} action="">
            <label htmlFor="bookFile">Url do Ebook</label>
            <input onChange={(event) => { setBookFile(event.target.files[0]); }} type="file" accept="application/epub+zip" name="bookFile" id="bookFile" />
            <button type="submit">Ok</button>
        </form>
    );
}