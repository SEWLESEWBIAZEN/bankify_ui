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

    claims: any | null;
    setClaims: (claimsString: string) => void;

    fullName: string | null;
    setFullName: (name: string) => void;

    redirectionUrl:string |null;
    setRedirectionUrl:(url:string | null)=>void;

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

    claims: null, // Initialize claims as an object  
    setClaims: (claimsString) => {
        const parsedClaims: any = claimsString;
        set({ claims: parsedClaims });
    },

    fullName: null,
    setFullName: (name) => set({ fullName: name }),

    redirectionUrl:null,
    setRedirectionUrl:(url:string | null)=>set({redirectionUrl:url})

}))
