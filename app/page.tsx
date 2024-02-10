import Link from "next/link";
import AnimeListPage from "./components/Animelist";
import Header from "./components/Animelist/header";
import { getAnimeRes } from "./libs/api-libs";

const Home = async () => {
  const topAnimes = await getAnimeRes("top/anime", "limit=8");
  return (
    <>
      {/* Anime terpopuler */}
      <section>
        <Header title="Top 8 Anime" linkHref="/populer" linkTitle="Lihat Semua" />
        <AnimeListPage api={topAnimes} />
      </section>
    </>
  );
};

export default Home;
