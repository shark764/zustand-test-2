import create from 'zustand';
import { devtools } from 'zustand/middleware';

export const useUserStore = create()(
  devtools(
    (set) => ({
      // Initial State
      user: {
        name: 'User 1',
        age: 23,
      },

      // Methods to manipulate state
      changeUsersAge: (age) => {
        set((state) => ({
          user: {
            ...state.user,
            age,
          },
        }));
      },
      changeUsersName: (name) => {
        set((state) => ({
          user: {
            ...state.user,
            name,
          },
        }));
      },
    }),
    { name: 'user-store' }
  )
);
