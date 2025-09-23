import { create } from "zustand";

type State = {
  isToggled: boolean;
};

type Action = {
  showMobileMenu: (isToggled: boolean) => void;
};

const useMobilMenu = create<State & Action>((set) => ({
  isToggled: false,
  showMobileMenu: (isToggled) =>
    set(() => ({
      isToggled: !isToggled,
    })),
}));

export default useMobilMenu;
