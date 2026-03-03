import { createContext, useContext, useRef } from 'react';

/**
 * Provides a stable ref that Archive cards can write their DOMRect into
 * just before navigating, so the overlay can expand from the card's position.
 */
const OverlayContext = createContext(null);

export function OverlayProvider({ children }) {
    const cardRectRef = useRef(null);
    return (
        <OverlayContext.Provider value={cardRectRef}>
            {children}
        </OverlayContext.Provider>
    );
}

/** Returns the cardRectRef — write .current before navigating, read it in the overlay */
export function useCardRect() {
    return useContext(OverlayContext);
}
