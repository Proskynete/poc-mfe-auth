import { Actions } from "./actionEnums";

export type RolesAllowed = "superadmin" | "kam" | "growth" | "driver";

const userType = [
  {
    id: 1,
    name: "superadmin",
    role: "superadmin",
  },
  {
    id: 2,
    name: "kam",
    role: "kam",
  },
  {
    id: 3,
    name: "driver",
    role: "driver",
  },
  {
    id: 4,
    name: "growth",
    role: "growth",
  },
];

export const LoginAction = (role: RolesAllowed) => {
  const userFound = userType.find((user) => user.role === role);

  return {
    type: Actions.LOGIN,
    payload: { user: userFound || {} },
  };
};
