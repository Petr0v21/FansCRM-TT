import { useCallback } from "react";

export const useAuthHttp = () => {
  const fetchWithAuth = useCallback(
    async (url: string, input?: RequestInit) => {
      const token = localStorage.getItem("token");

      const headers = new Headers(input?.headers || {});

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      const response = await fetch(url, {
        ...input,
        headers,
      });

      if (!response.ok) {
        const error = await response.text();
        console.error(error);
        return null;
      }

      return response.json();
    },
    []
  );

  return fetchWithAuth;
};
