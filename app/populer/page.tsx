"use client";

import { useCallback, useEffect, useState } from "react";
import Pagination from "../components/utils/Pagination";
import HeaderMenu from "../components/utils/HeaderMenu";
import AnimeListPage from "../components/Animelist";
import { getAnimeRes } from "../libs/api-libs";

const PopulerPage = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState({} as any);

  const fetchData = useCallback(async () => {
    const populerAnime = await getAnimeRes("top/anime", `page=${page}`);
    setTopAnime(populerAnime);
  }, [page]);

  useEffect(() => {
    fetchData();
  }, [fetchData, page]);
  return (
    <>
      <HeaderMenu title={"Anime terpopuler"}></HeaderMenu>
      <AnimeListPage api={topAnime}></AnimeListPage>
      <Pagination page={page} lastPage={topAnime.pagination?.last_visible_page} setPage={setPage}></Pagination>
    </>
  );
};

export default PopulerPage;
