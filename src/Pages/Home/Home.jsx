
import { useLoaderData } from 'react-router';
import Banner from '../../Componemts/Banner/Banner';
import Books from '../Books/books';
import { Outlet } from 'react-router';

const Home = () => {
    const booksData = useLoaderData();
   
    return (
        <div>
            <Banner></Banner>
            <Books booksData={booksData}></Books>
        </div>
    );
};

export default Home;