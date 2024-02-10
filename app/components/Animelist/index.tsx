import Image from "next/image";
import Link from "next/link";

interface AnimeListPageProps {
  api: any;
}
const AnimeListPage = ({ api }: AnimeListPageProps) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {api.data?.map((anime: any) => {
        return (
          <Link key={anime.mal_id} href={`/anime/${anime.mal_id}`} className="cursor-pointer text-primary hover:text-accent transition-all">
            <Image src={anime.images.webp.image_url} alt="logo" width={350} height={350} className="w-full max-h-64 object-cover"></Image>
            <h3 className="font-bold md:text-xl p-4 text-md ">{anime.title}</h3>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeListPage;
