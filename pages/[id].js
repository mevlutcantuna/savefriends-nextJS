import { useRouter } from "next/router";
import MasterPage from "../Components/MasterPage";
import DetailCard from "../Components/DetailCard";

function Details(props) {

  const router = useRouter();
  const id = router.asPath.slice(11);
  const localStr = JSON.parse(localStorage.getItem("favs"));

  return (
    <MasterPage>
      {localStr && (localStr.map((item) => (
          <div key={Math.random()}>
            {item.id.toString() === id && (
                <div>
                  <DetailCard item={item} />
                </div>
            )}
          </div>
      )))}
    </MasterPage>
  );
}

export default Details;
