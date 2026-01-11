import { useEffect, useState } from "react";
import type { Artwork, ArtworkApiResponse } from "./types";
import ArtworkTable from "./ArtworkTable";
const ROWS_PER_PAGE = 10;
function App() {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set());
  useEffect(() => {
    fetch(
      `https://api.artic.edu/api/v1/artworks?page=${page}&limit=${ROWS_PER_PAGE}`
    )
      .then((res) => res.json())
      .then((data: ArtworkApiResponse) => {
        setArtworks(data.data);
        setTotal(data.pagination.total);
      });
  }, [page]);
  
}
export default App;
