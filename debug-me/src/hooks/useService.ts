import { useContext } from "react";

export default function useService<T>(type: {new():  T }): T {
    // const context = useContext(MessageContext);
    return new type();
}