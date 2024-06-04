import { create } from 'zustand';

type UIState = {
  homeCategory: string;
  setHomeCategory: (value: string) => void;
  headerImageSrc: string;
  setHeaderImageSrc: (value: string) => void;
};

const useUIState = create<UIState>((set) => ({
  homeCategory: '',
  setHomeCategory: (value) => set({ homeCategory: value }),
  headerImageSrc:
    'https://images.unsplash.com/photo-1487956382158-bb926046304a',
  setHeaderImageSrc: (src) => set({ headerImageSrc: src }),
}));

export default useUIState;
