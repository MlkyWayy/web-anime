import VideoPlayer from "@/app/components/utils/videoplayer";
import { getAnimeRes } from "@/app/libs/api-libs";
import Image from "next/image";

const DetailAnime = async ({ params }: { params: { id: string } }) => {
  const anime = await getAnimeRes(`anime/${params.id}`);
  return (
    <>
      <div className="pt-4 px-4">
        <h1 className="text-3xl text-primary">
          {anime.data.title} - {anime.data.year}
        </h1>
        <div className="pt-4 px-4 flex gap 3 text-primary overflow-x-auto">
          <div className="w-36 flex flex-col justify-center items-center rounded border border-primary p-2">
            <h3>Peringkat</h3>
            <p>{anime.data.rank}</p>
          </div>
          <div className="w-36 flex flex-col justify-center items-center rounded border border-primary p-2">
            <h3>Skor</h3>
            <p>{anime.data.score}</p>
          </div>
          <div className="w-36 flex flex-col justify-center items-center rounded border border-primary p-2">
            <h3>Episode</h3>
            <p>{anime.data.episodes}</p>
          </div>
          <div className="w-36 flex flex-col justify-center items-center rounded border border-primary p-2">
            <h3>Rating</h3>
            <p>{anime.data.rating}</p>
          </div>
        </div>
        <div className="pt-4 px-4 sm:flex-nowrap flex-wrap flex gap-2 text-primary">
          <Image src={anime.data.images.webp.image_url} alt={anime.data.title} width={500} height={500} className="w-1/2 max-h-64 object-cover"></Image>
          <p className="text-justify p-5">{anime.data.synopsis}</p>
        </div>
      </div>
      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id}></VideoPlayer>
      </div>
    </>
  );
};

export default DetailAnime;
