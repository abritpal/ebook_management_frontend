import Layout from './layout'
import styles from "./../styles/Book.module.css"
import styles2 from "./../styles/Cart.module.css"
import Image from 'next/image'
import { useState } from 'react'
export default function Cart(props) {
    const [Items, setItems] = useState(
        {
            userID: "",
            books: [
                {
                    ID: "007",
                    BookName: "a",
                    Author: "a",
                    Price: "$200",
                },
                {
                    ID: "003",
                    BookName: "a",
                    Author: "a",
                    Price: "$2",
                }
            ]
        }
    )
    function arrayRemove(arr, value) {

        return arr.filter(function (ele) {
            return ele.ID != value;
        });
    }

    const handleClick = (event, IDval) => {
        // console.log(Items);
        console.log(IDval)


        Items.books = arrayRemove(Items.books, IDval)
        setItems(Items);
        console.log(Items);
    }
    const CartItems = (props) => (
        <div className={styles.book_info_container}>
            <div className={styles.book_container_col_one}>
                {/* <div className={styles.book_image}> */}
                <Image src='/../public/book_img.jpg' height="218px" width="136px"></Image>
                {/* </div> */}

                <button className={styles.buy_button} onClick={(event) => handleClick(event, "007")}>Delete from cart</button>
                <div>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" className={styles2.quatity_icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className={styles2.quatity_icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p>XXX</p> */}
                </div>
            </div>
            <div>
                Hello this is the function
                <h4>{props.bookName}</h4>
                <p><strong>Author: </strong>{props.authorName}</p>
                <p><strong>Price: </strong>{props.bookPrice}</p>
            </div>
        </div>
    );
    return (
        <>
            <Layout>
<div className={styles2.cart_container}>
                {Items.books.map((book) => (<CartItems bookID={book.ID} bookName={book.bookName} authorName={book.Author} bookPrice={book.Price} />))}
                {/* <CartItems />
                <CartItems />
                <CartItems />
                <CartItems /> */}
</div>
            </Layout>
        </>
    )
}