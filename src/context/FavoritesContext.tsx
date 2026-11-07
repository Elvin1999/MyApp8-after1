import { createContext, ReactNode, useContext, useState } from "react";

type FavoriteContextType = {
  favorites: string[];
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
};

const FavoriteContext = createContext<FavoriteContextType | undefined>(
  undefined,
);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const isFavorite = (id: string) => favorites.includes(id);

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorites(){
    const context=useContext(FavoriteContext);

    if(!context){
        throw new Error("useFavorites must be inside FavoritesProvider");
    }

    return context;
}