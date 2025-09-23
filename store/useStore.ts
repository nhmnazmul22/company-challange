import { FormDataType } from "@/types";
import { create } from "zustand";

type State = {
  contactSubmissions: Array<FormDataType>;
};

type Action = {
  addContact: (payload: FormDataType) => void;
};

export const useStore = create<State & Action>((set) => ({
  contactSubmissions: [],
  addContact: (payload) =>
    set((state) => ({
      contactSubmissions: [
        ...state.contactSubmissions,
        { id: String(Date.now()), ...payload },
      ],
    })),
}));
