import { getAnimeRes } from "@/app/libs/api-libs";
import AnimeListPage from "../../components/Animelist";
import Header from "../../components/Animelist/header";

const Home = async ({ params }: { params: { keyword: string } }) => {
  const key = params.keyword;
  const decodeKey = decodeURIComponent(key);
  const searchAnime = await getAnimeRes("anime", `q=${decodeKey}`);
  return (
    <>
      {/* Anime terpopuler */}
      <section>
        <Header title={`Hasil Pencarian: ${decodeKey}`} linkHref={""} linkTitle={""} />
        <AnimeListPage api={searchAnime} />
      </section>
    </>
  );
};

export default Home;
