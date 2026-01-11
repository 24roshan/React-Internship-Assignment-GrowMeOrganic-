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
  const selectedRows = artworks.filter((a) => selectedIds.has(a.id));
  const handleSelectionChange = (rows: Artwork[]) => {
    const newSet = new Set(selectedIds);
    artworks.forEach((a) => newSet.delete(a.id));
    rows.forEach((r) => newSet.add(r.id));

    setSelectedIds(newSet);
  };
  const handlePageChange = (e: any) => {
    setPage(e.page + 1);
  };
  const handleCustomSelect = (count: number) => {
    const newSet = new Set(selectedIds);
    const limit = Math.min(count, artworks.length);
    for (let i = 0; i < limit; i++) {
      newSet.add(artworks[i].id);
    }
    setSelectedIds(newSet);
  };
  return (
    <div style={{ padding: "20px" }}>
      <h3>Art Institute of Chicago – Artworks</h3>
      <ArtworkTable
        artworks={artworks}
        total={total}
        rowsPerPage={ROWS_PER_PAGE}
        page={page}
        selectedRows={selectedRows}
        selectedCount={selectedIds.size}
        onPageChange={handlePageChange}
        onSelectionChange={handleSelectionChange}
        onCustomSelect={handleCustomSelect}
      />
    </div>
  );
}
export default App;
