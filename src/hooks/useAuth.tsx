import * as React from "react";

const authContext = React.createContext<ReturnType<typeof useAuth>>(
    null as any
);

function useAuth() {
    const [auth, setAuthorization] = React.useState(false);

    const login = (username: string, password: string) => {
        return new Promise<void>((resolve, reject) => {
            setTimeout(() => {
                if (username === "admin" && password === "admin") {
                    setAuthorization(true);
                    // set user data with whatever the api returns, currently just return default user object

                    resolve();
                } else {
                    let err = { message: "Invalid username or password" };
                    reject(err);
                }
            }, 1000);
        });
    };

    const logout = () => {
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                setAuthorization(false);
                resolve();
            }, 1000);
        });
    };

    return {
        auth,
        login,
        logout,
    };
}

type AuthProviderProps = {
    children: React.ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
    const auth = useAuth();

    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export default function AuthConsumer() {
    return React.useContext(authContext);
}
