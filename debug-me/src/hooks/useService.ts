import { useContext } from "react";
import SnackbarContext, { SnackbarContextType } from "../contexts/SnackbarContext";

export default function useService<T>(type: {new(context: SnackbarContextType):  T }): T {
    const context = useContext(SnackbarContext);
    return new type(context);
}