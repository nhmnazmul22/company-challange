import { create } from "zustand";

type State = {
  productFilterValue: string;
  galleryFilterValue: string;
  blogFilterValue: string;
};

type Action = {
  setProductFilterValue: (value: string) => void;
  setGalleryFilterValue: (value: string) => void;

  setBlogFilterValue: (value: string) => void;
};

const useFilter = create<State & Action>((set) => ({
  productFilterValue: "all",
  galleryFilterValue: "all",
  blogFilterValue: "all",

  setProductFilterValue: (value) =>
    set(() => ({
      productFilterValue: value,
    })),
  setGalleryFilterValue: (value) =>
    set(() => ({
      galleryFilterValue: value,
    })),
  setBlogFilterValue: (value) =>
    set(() => ({
      blogFilterValue: value,
    })),
}));

export default useFilter;
