import Layout from '../layout'
import { useRouter } from 'next/router'

export default function Book(props) {
    
    const router = useRouter();
    const { id } = router.query
    console.log(router.query)
    return (
        <>
            <Layout>
                <div> Hello {id}</div>
            </Layout>
        </>
    )
}