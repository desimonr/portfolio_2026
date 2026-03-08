import { createContext, useContext, useRef } from 'react';

/**
 * Provides a stable ref that Archive cards can write their DOMRect into
 * just before navigating, so the overlay can expand from the card's position.
 */
const OverlayContext = createContext(null);

export function OverlayProvider({ children }) {
    const cardRectRef = useRef(null);
    const triggerRef = useRef(null);
    return (
        <OverlayContext.Provider value={{ cardRectRef, triggerRef }}>
            {children}
        </OverlayContext.Provider>
    );
}

/** Returns { cardRectRef, triggerRef } – write to them before navigating */
export function useOverlayContext() {
    return useContext(OverlayContext);
}
