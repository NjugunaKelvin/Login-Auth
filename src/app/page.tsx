/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="p-10 w-full max-w-lg rounded-lg bg-black 
                      shadow-[8px_8px_16px_#0a0a0a,-8px_-8px_16px_#1a1a1a]">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white mb-3">My Dev Journey</h1>
          <p className="text-lg text-gray-300">Sign in to your account</p>
        </div>
        
        <div className="space-y-4">
          <button
            onClick={() => signIn("google")}
            className="w-full flex items-center justify-center gap-3 py-3.5 px-6 rounded-lg
                      bg-black hover:bg-gray-900 transition-all duration-200
                      shadow-[4px_4px_8px_#0a0a0a,-4px_-4px_8px_#1a1a1a] hover:shadow-[2px_2px_4px_#0a0a0a,-2px_-2px_4px_#1a1a1a]
                      focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          >
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            <span className="text-lg font-medium text-white">Continue with Google</span>
          </button>
          
          <button
            onClick={() => signIn("github")}
            className="w-full flex items-center justify-center gap-3 py-3.5 px-6 rounded-lg
                      bg-black hover:bg-gray-900 transition-all duration-200
                      shadow-[4px_4px_8px_#0a0a0a,-4px_-4px_8px_#1a1a1a] hover:shadow-[2px_2px_4px_#0a0a0a,-2px_-2px_4px_#1a1a1a]
                      focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          >
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.551 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span className="text-lg font-medium text-white">Continue with GitHub</span>
          </button>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-sm text-gray-400">
          By continuing, you agree to our <a href="#" className="text-white hover:underline">Terms</a> and <a href="#" className="text-white hover:underline">Privacy Policy</a>.
        </div>
      </div>
    </div>
  );
}