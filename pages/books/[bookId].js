import Layout from '../layout'
import { useRouter } from 'next/router'
import styles from '../../styles/Book.module.css'
import Image from 'next/image'
// import styles from '../../styles/[bookId].module.css'
export default function Book(props) {
    
    const router = useRouter();
    const { id } = router.query
    console.log(router.query)
    return (
        <>
            <Layout>
                <div className={styles.book_info_container}> 
                  <div className={styles.book_container_col_one}>
                      {/* <div className={styles.book_image}> */}
                    <Image src='/../public/book_img.jpg' height="218px" width="136px"></Image>
                        {/* </div> */}
                        
                        <button className={styles.buy_button}>Add to cart</button>
                    </div>
                <div>
                    Hello {id}
                        <h4>Death: An Inside Story</h4>
                        <p><strong>Author: </strong>Sadhguru</p>
                        <p><strong>Price: </strong>188.50</p>
                        <p>Isao is a young, engaging patriot, and a fanatical believer in the ancient samurai ethos. He turns terrorist, organising a violent plot against the new industrialists, who he believes are threatening the integrity of Japan and usurping the Emperor’s rightful power. As the conspiracy unfolds and unravels, Mishima brilliantly chronicles the conflicts of a decade that saw the fabric of Japanese life torn apart.</p>
                </div>
                </div>
            </Layout>
        </>
    )
}