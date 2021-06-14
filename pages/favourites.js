import MasterPage from "../Components/MasterPage";
import FavouritesPage from "../Components/FavouritesPage";
import Head from "next/head";

function Favourites(props) {
    return (
        <MasterPage>
            <Head>
                <title>Favourites</title>
            </Head>
            <FavouritesPage/>
        </MasterPage>
    );
}

export default Favourites;