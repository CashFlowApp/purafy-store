import React, { createContext, useContext, useState, useCallback } from 'react';

type ProductType = 'home' | 'mini';

interface UpsellContextType {
  isOpen: boolean;
  product: ProductType | null;
  openUpsellModal: (product: ProductType) => void;
  closeUpsellModal: () => void;
}

const UpsellContext = createContext<UpsellContextType>({
  isOpen: false,
  product: null,
  openUpsellModal: () => {},
  closeUpsellModal: () => {},
});

export const useUpsell = () => useContext(UpsellContext);

export const UpsellProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<ProductType | null>(null);

  const openUpsellModal = useCallback((p: ProductType) => {
    setProduct(p);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeUpsellModal = useCallback(() => {
    setIsOpen(false);
    setProduct(null);
    document.body.style.overflow = '';
  }, []);

  return (
    <UpsellContext.Provider value={{ isOpen, product, openUpsellModal, closeUpsellModal }}>
      {children}
    </UpsellContext.Provider>
  );
};

export default UpsellContext;
