import Layout from './layout'
// import styles from "./../styles/Book.module.css"
import styles from "./../styles/Cart.module.css"
import Image from 'next/image'
import { useState } from 'react'
import { Router, useRouter } from 'next/router'

export default function Cart(props) {

    const router = useRouter()
    var TotalAmount = 0
    const [payment_opt, setpayment_opt] = useState(false)
    const [confirmpayment, setconfirmpayment] = useState("")
    const [Items, setItems] = useState(
        {
            userID: "",
            books: [
                {
                    ID: "007",
                    BookName: "a",
                    Author: "a",
                    Price: "200",
                },
                {
                    ID: "003",
                    BookName: "a",
                    Author: "a",
                    Price: "2",
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
        // console.log(IDval)


        Items.books = arrayRemove(Items.books, IDval)
        setItems(Items);
        // console.log(Items);
        router.push('/cart')
    }
    const CartItems = (props) => (
        <div className={styles.book_info_container}>
            <div className={styles.book_container_col_one}>

                <Image src='/../public/book_img.jpg' height="218px" width="136px"></Image>


                <button className={styles.buy_button} onClick={(event) => handleClick(event, props.bookID)}>Delete from cart</button>
            </div>
            <div>
                Hello this is the function
                <h4>{props.bookName}</h4>
                <p><strong>Author: </strong>{props.authorName}</p>
                <p><strong>Price: </strong>₹{props.bookPrice}</p>
            </div>
        </div>
    );
    function paymentype() {

        if (confirmpayment === "UPI ID")
            return confirmpayment;
        else if (confirmpayment === "CARD NO")
            return confirmpayment;
        return ""
    }
    function handleconfirm(){
        
    }
    return (
        <>
            <Layout>
               
                <div className={styles.cart_container}>
                    {Items.books.map((book) => {
                        TotalAmount += parseInt(book.Price)
                        return (
                            <CartItems
                                bookID={book.ID}
                                bookName={book.bookName}
                                authorName={book.Author}
                                bookPrice={book.Price} />)
                    })}

                </div>
                <div className={styles.total_amount}>
                    <h3 >Total Amount: {TotalAmount ? TotalAmount : ""}</h3>
                    {/* {console.log(payment_opt)} */}
                    <button className={styles.pay_button} onClick={() => setpayment_opt(true)}>Pay Now</button>
                    {/* {console.log(payment_opt)} */}
                </div>
                <div className={payment_opt ? styles.payment_options : styles.nopayment_options}>
                    <h3>Choose Payment Option</h3>
                    <div className={styles.payment_container}>
                        <div>
                            <label>UPI</label>
                            <input type="radio" name="payment" onClick={() => setconfirmpayment("UPI ID")}></input>
                        </div>
                        <div>
                            <lable>Debit Card</lable>
                            <input type="radio" name="payment" onClick={() => setconfirmpayment("CARD NO")}></input>
                        </div>
                    </div>
                    <div className={styles.showpayment_fields}>
                        {/* {console.log(paymentype())} */}
                        <input type="text" placeholder={paymentype()} ></input>
                        <input type="text" placeholder="OTP"></input>
                    </div>
                    <button className={styles.confirm_button} onClick={handleconfirm}>confirm</button>
                </div>

            </Layout>
        </>
    )
}