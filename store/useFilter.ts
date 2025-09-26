import { create } from "zustand";

type State = {
  productFilterValue: string;
  galleryFilterValue: string;
};

type Action = {
  setProductFilterValue: (value: string) => void;
  setGalleryFilterValue: (value: string) => void;
};

const useFilter = create<State & Action>((set) => ({
  productFilterValue: "all",
  galleryFilterValue: "all",

  setProductFilterValue: (value) =>
    set(() => ({
      productFilterValue: value,
    })),
  setGalleryFilterValue: (value) =>
    set(() => ({
      galleryFilterValue: value,
    })),
}));

export default useFilter;
