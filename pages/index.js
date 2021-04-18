import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from './layout'
import Image from 'next/image'
import Link from 'next/link'
import BookCard from '../public/components/book_card'
import { useState, useEffect, useRef } from 'react'

export default function Home() {
  const data = [
    {
      bookId: 1,
      title: "Death: An Inside Story",
      author: "Sadhguru",
      img: "book_img.jpg",
      price: "188.50"
    },
    {
      bookId: 2,
      title: "Death: An Inside Story",
      author: "Sadhguru",
      img: "book_img.jpg",
      price: "188.50"
    },
    {
      bookId: 3,
      title: "Death: An Inside Story",
      author: "Sadhguru",
      img: "book_img.jpg",
      price: "188.50"
    },
    {
      bookId: 4,
      title: "Death: An Inside Story",
      author: "Sadhguru",
      img: "book_img.jpg",
      price: "188.50"
    },
    {
      bookId: 5,
      title: "Death: An Inside Story",
      author: "Sadhguru",
      img: "book_img.jpg",
      price: "188.50"
    },
    {
      bookId: 6,
      title: "Death: An Inside Story",
      author: "Sadhguru",
      img: "book_img.jpg",
      price: "188.50"
    },
    {
      bookId: 7,
      title: "Death: An Inside Story",
      author: "Sadhguru",
      img: "book_img.jpg",
      price: "188.50"
    },
    {
      bookId: 8,
      title: "Death: An Inside Story",
      author: "Sadhguru",
      img: "book_img.jpg",
      price: "188.50"
    },
    {
      bookId: 9,
      title: "Death: An Inside Story",
      author: "Sadhguru",
      img: "book_img.jpg",
      price: "188.50"
    }
  ]
  const data1 = [
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
  
  return (
    <Layout>
      <Head>
        <title>e-Book Manager</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.banner}>
          {images.map((image) => (
            <div className={styles.img_banner}>
              <Image src={"/../public/"+image} layout="fill" objectFit="fill" objectPosition="center"/>
            </div>
          ))}
          <div className={styles.welcome}>
            <h1>e-Book Manager</h1>
          </div>
        </div>
          <section className={styles.genres}>
            <div className={styles.section_title}>
              <h2>Genres</h2>
              <div className={styles.prevNext_wrapper}>
                <div className={styles.prev} onClick={(e) => {document.querySelector("."+styles.genres+" ."+styles.scroll_books).scrollLeft -= 660}}>
                  <svg class="svg-triangle" width='100' height='100'>
                    <polygon points="0,50 100,0 100,100" />
                  </svg>
                </div>
                <div className={styles.next} onClick={(e) => {document.querySelector("."+styles.genres+" ."+styles.scroll_books).scrollLeft += 660}}>
                  <svg class="svg-triangle" width='100' height='100'>
                    <polygon points="100,50 0,100 0,0" />
                  </svg>
                </div>
              </div>
            </div>
            <div className={styles.scroll_books}>
              <ul className={styles.ul}>
                {genres.map((genre) => (
                  <li>
                    <div className={styles.genre_card}>
                      <div>
                        <h1>{genre}</h1>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <section className={styles.book_list1}>
            <div className={styles.section_title}>
              <h2>Popular</h2>
              <div className={styles.prevNext_wrapper}>
                <div className={styles.prev} onClick={(e) => {document.querySelector("."+styles.book_list1+" ."+styles.scroll_books).scrollLeft -= 1290}}>
                  <svg class="svg-triangle" width='100' height='100'>
                    <polygon points="0,50 100,0 100,100" />
                  </svg>
                </div>
                <div className={styles.next} onClick={(e) => {document.querySelector("."+styles.book_list1+" ."+styles.scroll_books).scrollLeft += 1290}}>
                  <svg class="svg-triangle" width='100' height='100'>
                    <polygon points="100,50 0,100 0,0" />
                  </svg>
                </div>
              </div>
            </div>
            <div className={styles.scroll_books}>
              <ul className={styles.ul}>
                {data.map( (book) => (
                  <Link href={{
                    pathname: "/books/[bookId]",
                    query: { bookId : book.bookId}
                  }}>
                    <li>
                      <BookCard src={"/"+book.img} bookTitle={book.title} authorName={book.author} price={book.price}/>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </section> 
          <section className={styles.book_list2}>
            <div className={styles.section_title}>
              <h2>New Arrivals</h2>
              <div className={styles.prevNext_wrapper}>
                <div className={styles.prev} onClick={(e) => {document.querySelector("."+styles.book_list2+" ."+styles.scroll_books).scrollLeft -= 1290}}>
                  <svg class="svg-triangle" width='100' height='100'>
                    <polygon points="0,50 100,0 100,100" />
                  </svg>
                </div>
                <div className={styles.next} onClick={(e) => {document.querySelector("."+styles.book_list2+" ."+styles.scroll_books).scrollLeft += 1290}}>
                  <svg class="svg-triangle" width='100' height='100'>
                    <polygon points="100,50 0,100 0,0" />
                  </svg>
                </div>
              </div>
            </div>
            <div className={styles.scroll_books}>
              <ul className={styles.ul}>
                {data1.map((book) => (
                  <Link href="/cart">
                  <li>
                      <BookCard src={"/" + book.img} bookTitle={book.title} authorName={book.author} price={book.price} />
                      </li>
                      </Link>
                ))}
              </ul>
            </div>
        </section>
      </div>
    </Layout>
  )
}
