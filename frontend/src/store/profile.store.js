import { create } from 'zustand'

const useUserProfile = create((set) => {
  userFullName: "";
  userEmail: "";
  setUserDetails: (fullName, email) => set((state) => ({ userFullName: fullName, userEmail: email }));
  logoutUser: () => set((state) => ({ userFullName: "", userEmail: "" }));
})
