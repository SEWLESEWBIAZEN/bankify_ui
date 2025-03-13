import { create } from "zustand"

type pageOptions = string

interface centralStore {
    activePage: pageOptions
    setActivePage: (page: pageOptions) => void

    isSidebarOpen: boolean
    toggleSidebar: () => void
    setIsSidebarOpen: (isOpen: boolean) => void

    accessToken: string | null
    setAccessToken: (token: string) => void
    initializeAccessToken: () => void

    idToken: string | null
    setIdToken: (token: string) => void
    initializeIdToken: () => void

    claims: any | null;
    setClaims: (claimsString: string) => void;

    fullName: string | null;
    setFullName: (name: string) => void;

}

export const useCentralStore = create<centralStore>((set, get) => ({
    activePage: 'DASHBOARD',
    setActivePage: (page) => set({ activePage: page }),

    isSidebarOpen: false,
    toggleSidebar: () => set({ isSidebarOpen: !get().isSidebarOpen }),
    setIsSidebarOpen: (isOpen) => set({ isSidebarOpen: isOpen }),

    accessToken: null,
    setAccessToken: (token) => set({ accessToken: token }),
    initializeAccessToken: () => {
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)accessToken\s*=\s*([^;]*).*$)|^.*$/, "$1") || null
        set({ accessToken: token })
    },

    idToken: null,
    setIdToken: (token) => set({ idToken: token }),
    initializeIdToken: () => {
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)idToken\s*=\s*([^;]*).*$)|^.*$/, "$1") || null
        set({ idToken: token })
    },
    claims: null, // Initialize claims as an object  
    setClaims: (claimsString) => {
        const parsedClaims: any = claimsString;
        set({ claims: parsedClaims });
    },

    fullName: null,
    setFullName: (name) => set({ fullName: name }),
}))
