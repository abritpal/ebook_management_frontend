import styles from './../styles/search.module.css'
import Layout from './../pages/layout'
import Link from 'next/link'
import BookCard from './../public/components/book_card'

export default function Search(){
    const data = [
        {
            title: "Attitude Is Everything: Change Your Attitude ... Change Your Life!",
            author: "Jeff Keller",
            img: "book_img2.jpg",
            price: "161.00"
        },
        {
            title: "Attitude Is Everything: Change Your Attitude ... Change Your Life!",
            author: "Jeff Keller",
            img: "book_img2.jpg",
            price: "161.00"
        },
        {
            title: "Attitude Is Everything: Change Your Attitude ... Change Your Life!",
            author: "Jeff Keller",
            img: "book_img2.jpg",
            price: "161.00"
        },
        {
            title: "Attitude Is Everything: Change Your Attitude ... Change Your Life!",
            author: "Jeff Keller",
            img: "book_img2.jpg",
            price: "161.00"
        },
        {
            title: "Attitude Is Everything: Change Your Attitude ... Change Your Life!",
            author: "Jeff Keller",
            img: "book_img2.jpg",
            price: "161.00"
        }
    ]
    const genres = ['Action', 'Thriller', 'Mystery', 'Comedy', 'Romantic', 'Comedy', 'Romantic', 'Comedy', 'Romantic']
    const images = ['book1.jpg']

    return( 
        <Layout>
            <div className={styles.container}>
        <div className={styles.search_container}>
            <h2 className={styles.headerTitle}>Search</h2>
<div className={styles.search_inputs}>
            <div className={styles.row}>
                {/* <label>Book Name</label> */}
                <input type="text" placeholder="search" />
            </div>  
            <div className={styles.row}>
                {/* <Link href="/"> */}
                    <button>Search</button>
                {/* </Link> */}
            </div>
</div>
        </div>
            <ul className={styles.ul}>
                {data.map((book) => (
                    <Link href={{
                        pathname: "/books/[bookId]",
                        query: { bookId: book.bookId }
                    }}>
                        <li className={styles.li}>
                            <BookCard src={"/" + book.img} bookTitle={book.title} authorName={book.author} price={book.price} />
                        </li>
                    </Link>
                ))}
            </ul>
            </div>
</Layout>
    )
}
