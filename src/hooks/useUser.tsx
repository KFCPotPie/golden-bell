import * as React from "react";

const userContext = React.createContext<ReturnType<typeof useUser>>(
    null as any
);

function useUser() {
    const [user, setUser] = React.useState(false);

    return {
        user,
        setUser,
    };
}

type UserProviderProps = {
    children: React.ReactNode;
};

export function UserProvider({ children }: UserProviderProps) {
    const auth = useUser();

    return <userContext.Provider value={auth}>{children}</userContext.Provider>;
}

export default function UserConsumer() {
    return React.useContext(userContext);
}
