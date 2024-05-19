import { Clerk } from "@clerk/clerk-js";
import { AuthBindings } from "@refinedev/core";


const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const clerk = new Clerk(clerkPubKey);
await clerk.load({
});
const authProvider: AuthBindings = {
  login: async () => {
    return {
      success: true,
      redirectTo: "/",
    };
  },
  register: async () => {
    return {
      success: true,
      redirectTo: "/login",
    };
  },
  forgotPassword: async () => {
    return {
      success: true,
      redirectTo: "/login",
    };
  },
  updatePassword: async ({ password }) => {
    return {
      success: true,
      redirectTo: "/",
    };
  },
  logout: async () => {
    await clerk.signOut();
    return {
      success: true,
      redirectTo: "/",
    };
  },
  onError: async (error) => {
    console.error(error);
    return { error };
  },
  check: async () => {
    try {
      clerk.load();
      const session = clerk.session;
      console.log(session);
      if (!session) {
        return {
          authenticated: false,
          error: {
            message: "Check failed",
            name: "Session not found",
          },
          logout: true,
          redirectTo: "/login",
        };
      }
    } catch (error: any) {
      return {
        authenticated: false,
        error: error || {
          message: "Check failed",
          name: "Not authenticated",
        },
        logout: true,
        redirectTo: "/login",
      };
    }

    return {
      authenticated: true,
    };
  },

  getPermissions: async () => {
    return null;
  },
  getIdentity: async () => {
    const session = clerk.session;
    console.log(session);
    if (session) {
      return {
        name: session.user.firstName,
      };
    }

    return null;
  },
};

export default authProvider;
