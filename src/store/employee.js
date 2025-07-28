import { createStore } from 'zustand/vanilla';
import { persist, createJSONStorage } from 'zustand/middleware';
import employeeData from '../../public/assets/employees_dummy.js';

const initialEmployees = employeeData.map((emp) => ({
  ...emp,
  id: emp.id || crypto.randomUUID(),
}));

export const employeeStore = createStore(
  persist(
    (set, get) => ({
      employees: [],
      addEmployee: (employee) =>
        set((state) => ({
          employees: [
            ...state.employees,
            { ...employee, id: crypto.randomUUID() },
          ],
        })),
      removeEmployee: (id) =>
        set((state) => ({
          employees: state.employees.filter((e) => e.id !== id),
        })),
      updateEmployee: (employee) =>
        set((state) => {
          console.log('updateEmployee', employee);
          return {
            employees: state.employees.map((e) =>
              e.id === employee.id ? employee : e
            ),
          };
        }),
      loadEmployees: () => {
        const stored = localStorage.getItem('employee-store');
        if (stored) {
          const parsedData = JSON.parse(stored);
          set({ employees: parsedData.state.employees });
        } else {
          set({ employees: initialEmployees });
        }
      },
    }),
    {
      name: 'employee-store',
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (!localStorage.getItem('employee-store')) {
          state.setState({ employees: initialEmployees });
        }
      },
    }
  )
);
