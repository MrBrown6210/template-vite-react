import create from "zustand";
import { persist } from "zustand/middleware";

// export const useAuth = create(
//   persist(
//     (set, get) => ({
//       auth: {
//         token: "",
//         user: {},
//         x: () => {
//           set({ auth["token"]: "tete" });
//         },
//       },
//     }),
//     {
//       name: "auth-storage",
//     }
//   )
// );
