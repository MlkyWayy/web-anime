const Pagination = ({ page, lastPage, setPage }: { page: number; lastPage: number; setPage: any }) => {
  const scrollTop = () => {
    scrollTo({ top: 0, behavior: "smooth" });
  };
  const prevPage = () => {
    if (page === 1) return;
    setPage((prevState: number) => prevState - 1);
    scrollTop();
  };
  const nextPage = () => {
    if (page === lastPage) return;
    setPage((prevStage: number) => prevStage + 1);
    scrollTop();
  };
  return (
    <div className="flex justify-center items-center p-5 gap-4 text-primary text-2xl">
      <button className="trasition-all hover:text-accent" onClick={prevPage}>
        Prev
      </button>
      <p>
        {page} of {lastPage}
      </p>
      <button className="trasition-all hover:text-accent" onClick={nextPage}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
