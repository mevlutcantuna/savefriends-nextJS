import MasterPage from "../Components/MasterPage";
import HomePages from "../Components/HomePage";

import Head from "next/head";

function HomePage() {
  return (
    <MasterPage>
      <Head>
        <title>HomePage</title>
      </Head>
      <HomePages/>
    </MasterPage>
  );
}

export default HomePage;
