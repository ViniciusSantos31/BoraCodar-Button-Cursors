export type ButtonType = {
  id: number;
  props: {
    autoFocus?: boolean;
    disabled?: boolean;
    draggable?: boolean;
    variant?: "primary" | "secondary" | "tertiary";
  };
  label: string;
}[];

export const buttons: ButtonType = [
  {
    id: 1,
    props: {
      autoFocus: true,
      variant: "primary",
    },
    label: "Default primary",
  },
  {
    id: 2,
    props: {
      variant: "secondary",
    },
    label: "Default secondary",
  },
  {
    id: 3,
    props: {
      variant: "tertiary",
    },
    label: "Default tertiary",
  },
  {
    id: 4,
    props: {
      disabled: true,
      variant: "primary",
    },
    label: "Disabled primary",
  },
  {
    id: 5,
    props: {
      disabled: true,
      variant: "secondary",
    },
    label: "Disabled secondary",
  },
  {
    id: 6,
    props: {
      disabled: true,
      variant: "tertiary",
    },
    label: "Disabled tertiary",
  },
  {
    id: 7,
    props: {
      draggable: true,
      variant: "primary",
    },
    label: "Draggable primary",
  },
  {
    id: 8,
    props: {
      draggable: true,
      variant: "secondary",
    },
    label: "Draggable secondary",
  },
  {
    id: 9,
    props: {
      draggable: true,
      variant: "tertiary",
    },
    label: "Draggable tertiary",
  },
];
