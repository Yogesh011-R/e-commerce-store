import { Product } from '@/types';
import { create } from 'zustand';

interface IPreviewModalStore {
  isOpen: boolean;
  data?: Product;
  onOpen: (data: Product) => void;
  onClose: () => void;
}

const usePreviewModal = create<IPreviewModalStore>(set => {
  return {
    isOpen: false,
    data: undefined,
    onOpen: (data: Product) => set({ data, isOpen: true }),
    onClose: () => set({ isOpen: false }),
  };
});

export default usePreviewModal;
