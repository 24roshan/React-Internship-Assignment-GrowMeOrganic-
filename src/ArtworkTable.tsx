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
  
}
export default ArtworkTable;
