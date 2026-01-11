import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { OverlayPanel } from "primereact/overlaypanel";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useRef } from "react";
import type { Artwork } from "./types";
interface Props {
  artworks: Artwork[];
  total: number;
  rowsPerPage: number;
  page: number;
  selectedRows: Artwork[];
  selectedCount: number;
  onPageChange: (e: any) => void;
  onSelectionChange: (rows: Artwork[]) => void;
  onCustomSelect: (count: number) => void;
}
function ArtworkTable(props: Props) {
  const overlayRef = useRef<OverlayPanel>(null);
  let inputValue = "";
  const applyCustom = () => {
    const num = parseInt(inputValue);
    if (!num || num <= 0) return;
    props.onCustomSelect(num);
    overlayRef.current?.hide();
  };
  return (
    <>
      <Button
        label="Custom Row Select"
        onClick={(e) => overlayRef.current?.toggle(e)}
        style={{ marginBottom: "10px" }}
      />
      <OverlayPanel ref={overlayRef}>
        <div style={{ display: "flex", gap: "8px" }}>
          <InputText onChange={(e) => (inputValue = e.target.value)} />
          <Button label="Select" onClick={applyCustom} />
        </div>
      </OverlayPanel>
      <p style={{ marginBottom: "10px", fontWeight: 500 }}>
        Selected Rows: {props.selectedCount}
      </p>
      <DataTable
        value={props.artworks}
        paginator
        lazy
        rows={props.rowsPerPage}
        totalRecords={props.total}
        first={(props.page - 1) * props.rowsPerPage}
        onPage={props.onPageChange}
        selection={props.selectedRows}
        onSelectionChange={(e) => props.onSelectionChange(e.value)}
        dataKey="id"
        selectionMode="checkbox"
      >
        <Column selectionMode="multiple" style={{ width: "3rem" }} />
        <Column field="title" header="Title" />
        <Column field="place_of_origin" header="Origin" />
        <Column field="artist_display" header="Artist" />
        <Column field="inscriptions" header="Inscriptions" />
        <Column field="date_start" header="Start Year" />
        <Column field="date_end" header="End Year" />
      </DataTable>
    </>
  );
}
export default ArtworkTable;
