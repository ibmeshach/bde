export const headerLinks = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "About",
    route: "/",
  },
  {
    label: "Explore",
    route: "/",
  },
];

export const headerLinksAdmin = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "About",
    route: "/",
  },
  {
    label: "Explore",
    route: "/",
  },
  {
    label: "Create Event",
    route: "/events/create",
  },
  {
    label: "My Profile",
    route: "/profile",
  },
];

export const eventDefaultValues = {
  title: "",
  description: "",
  location: "",
  imageUrl: "",
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: "",
  price: "",
  isFree: false,
  url: "",
};
