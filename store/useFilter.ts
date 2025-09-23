import { create } from "zustand";

type State = {
  serviceFilterValue: string;
  galleryFilterValue: string;
  blogFilterValue: string;
};

type Action = {
  setServiceFilterValue: (value: string) => void;
  setGalleryFilterValue: (value: string) => void;
  setBlogFilterValue: (value: string) => void;
};

const useFilter = create<State & Action>((set) => ({
  serviceFilterValue: "all",
  galleryFilterValue: "all",
  blogFilterValue: "all",

  setServiceFilterValue: (value) =>
    set(() => ({
      serviceFilterValue: value,
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
