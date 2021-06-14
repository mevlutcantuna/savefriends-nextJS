import {Routes} from "../Router/Routes";
import Link from "next/link";

function Navbar() {
    return (
        <div className={'navbar'}>
            <Link href={Routes.homePage.path}>
                <a className={'navbar__link'}>{Routes.homePage.title}</a>
            </Link>
            <Link href={Routes.favourites.path}>
                <a className={'navbar__link'}>{Routes.favourites.title}</a>
            </Link>
        </div>
    );
}

export default Navbar;