import {ReactNode, createContext, useContext, useState} from 'react';

interface CartItem {
    quantity: any;
    id: number;
    count: number;
}

interface ProductTotalContextType {
    cartItems: CartItem[];
    setCount: (id: number, count: number) => void;
}

const ProductTotalContext = createContext<ProductTotalContextType | undefined>(undefined);

export const useProductTotal = () => {
    const context = useContext(ProductTotalContext);
    if (!context) {
        throw new Error('useProductTotal must be used within a ProductTotalProvider');
    }
    return context;
};

interface ICartProviderProps {
    children: ReactNode;
}

export const ProductTotalProvider = ({children}: ICartProviderProps) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const setCount = (id: number, count: number) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === id);
            if (existingItem) {
                return prevItems.map((item) => (item.id === id ? {...item, count} : item));
            } else {
                return [...prevItems, {id, count}];
            }
        });
    };

    return (
        <ProductTotalContext.Provider value={{cartItems, setCount}}>
            {children}
        </ProductTotalContext.Provider>
    );
};
