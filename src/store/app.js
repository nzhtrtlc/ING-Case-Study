import { createStore } from 'zustand/vanilla';
import { createJSONStorage, persist } from 'zustand/middleware';

export const appStore = createStore(
  persist(
    (set) => ({
      appLang: 'en',
      employeeDisplayMode: 'table',
      setAppLang: (lang) => {
        set({ appLang: lang });
      },
      setEmployeeDisplayMode: (mode) => {
        if (mode === 'table' || mode === 'grid') {
          set({ employeeDisplayMode: mode });
        }
      },
    }),
    {
      name: 'app-store',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
