import { toast } from "react-hot-toast";

export const notify = {
  success: (message: string): void => {
    toast.success(message);
  },

  error: (message: string): void => {
    toast.error(message);
  },

  info: (message: string): void => {
    toast(message);
  },
};