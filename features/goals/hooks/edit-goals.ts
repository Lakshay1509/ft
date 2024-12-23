import { create } from "zustand";

type EditGoalState = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useEditGoal = create<EditGoalState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
