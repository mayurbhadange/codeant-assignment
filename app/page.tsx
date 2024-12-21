"use client";
import React, { useState } from "react";
import { KeyIcon, ArrowUpIcon } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

interface AuthProvider {
  name: string;
  icon: React.ReactNode;
  href: string;
  className?: string;
}

interface Stat {
  label: string;
  value: string;
}

type AuthType = "SAAS" | "SELF_HOSTED";

// Custom icons for providers
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const BitbucketIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#2684FF">
    <path d="M.778 1.213a.768.768 0 00-.768.892l3.263 19.81c.084.5.515.868 1.022.873H19.95a.772.772 0 00.77-.646l3.27-20.03a.768.768 0 00-.768-.891L.778 1.213zM14.52 15.53H9.522L8.17 8.466h7.561l-1.211 7.064z" />
  </svg>
);

const AzureIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#0078D4">
    <path d="M13.874 5.839c2.439-4.258 7.033-5.839 11.126-5.839-2.848 4.624-2.832 9.877.043 14.481-2.592 3.035-6.826 4.519-10.777 4.519h-14.266l13.874-13.161zm-13.874 18.161h14.266c3.951 0 8.185-1.484 10.777-4.519-2.875-4.604-2.891-9.857-.043-14.481-4.093 0-8.687 1.581-11.126 5.839l-13.874 13.161z" />
  </svg>
);

const GitLabIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#FC6D26">
    <path d="M23.955 13.587l-1.342-4.135-2.664-8.189a.455.455 0 00-.867 0L16.418 9.45H7.582L4.918 1.263a.455.455 0 00-.867 0L1.386 9.45.045 13.587a.924.924 0 00.331 1.023L12 23.054l11.624-8.443a.92.92 0 00.331-1.024" />
  </svg>
);

const AUTHENTICATION_PROVIDERS: Record<AuthType, AuthProvider[]> = {
  SAAS: [
    { name: "GitHub", icon: <GitHubIcon />, href: "/dashboard" },
    { name: "Bitbucket", icon: <BitbucketIcon />, href: "/dashboard" },
    { name: "Azure DevOps", icon: <AzureIcon />, href: "/dashboard" },
    { name: "GitLab", icon: <GitLabIcon />, href: "/dashboard" }
  ],
  SELF_HOSTED: [
    { name: "GitLab", icon: <GitLabIcon />, href: "/dashboard" },
    { name: "SSO", icon: <KeyIcon className="w-5 h-5" />, href: "/dashboard" }
  ]
};

const STATS: Stat[] = [
  { label: "Language Support", value: "30+" },
  { label: "Developers", value: "10K+" },
  { label: "Hours Saved", value: "100K+" }
];

interface AuthButtonProps {
  provider: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const AuthButton: React.FC<AuthButtonProps> = ({ provider, icon, onClick }) => (
  <button
    onClick={onClick}
    type="button"
    className="flex w-full items-center justify-center gap-3 rounded-lg border p-3 hover:bg-gray-50 transition-colors"
    aria-label={`Sign in with ${provider}`}
  >
    <span className="w-5 h-5">{icon}</span>
    <span>Sign in with {provider}</span>
  </button>
);

const StatsCard: React.FC = () => (
  <Card className="w-full max-w-[300px] bg-white rounded-xl shadow-lg">
    <CardHeader className="flex-row gap-2 items-center border-b p-4">
      <img src="/assets/logo.svg" alt="" className="w-6 h-6" aria-hidden="true" />
      <h2 className="font-semibold text-sm">AI to Detect & Autofix Bad Code</h2>
    </CardHeader>
    <CardContent className="p-0">
      <div className="grid grid-cols-3 gap-2 p-4 text-center">
        {STATS.map(({ label, value }) => (
          <div key={label} className="flex flex-col items-center">
            <span className="font-semibold text-sm">{value}</span>
            <span className="text-xs text-gray-600">{label}</span>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

const MetricsCard: React.FC = () => (
  <Card className="w-[200px] bg-white rounded-xl shadow-lg p-4">
    <div className="flex justify-between items-start">
      <img src="/assets/GrapgAuth.png" alt="graphlogo" className="h-10 w-10" />
      <div className="flex flex-col items-end">
        <div className="flex items-center text-blue-600">
          <ArrowUpIcon className="w-4 h-4" />
          <span className="text-sm">14%</span>
        </div>
        <span className="text-xs text-gray-600">This week</span>
      </div>
    </div>
    <div className="mt-3">
      <h3 className="font-semibold text-sm">Issues Fixed</h3>
      <span className="text-2xl font-bold">500K+</span>
    </div>
  </Card>
);

const Auth: React.FC = () => {
  const [authType, setAuthType] = useState<AuthType>("SAAS");

  return (
    <div className="flex min-h-screen w-full">
      {/* Left Section */}
      <div className="hidden md:flex w-1/2 bg-gray-50 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[400px]">
            <StatsCard />
            <div className="absolute right-0 top-[60%]">
              <MetricsCard />
            </div>
            <img
              src="/assets/logoFaded.png"
              alt=""
              className="absolute  -left-20 w-[300px] opacity-20"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-[30rem]">
          <Card className="w-full">
            <CardHeader className="text-center space-y-4 pb-6">
              <div className="flex justify-center items-center gap-2">
                <img src="/assets/logo.svg" alt="CodeAnt AI" className="w-6 h-6" />
                <span className="text-xl">CodeAnt AI</span>
              </div>
              <h1 className="text-2xl font-semibold">Welcome to CodeAnt AI</h1>
              
              <div className="bg-gray-100 rounded-lg p-1">
                <div className="grid grid-cols-2 gap-1">
                  {(Object.keys(AUTHENTICATION_PROVIDERS) as AuthType[]).map((type) => (
                    <button
                      key={type}
                      onClick={() => setAuthType(type)}
                      type="button"
                      className={`p-2 rounded-lg transition-colors ${
                        authType === type ? "bg-blue-500 text-white" : ""
                      }`}
                    >
                      {type === "SAAS" ? "SAAS" : "Self Hosted"}
                    </button>
                  ))}
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <div className="flex flex-col gap-3">
                {AUTHENTICATION_PROVIDERS[authType].map((provider) => (
                  <AuthButton
                    key={provider.name}
                    provider={provider.name}
                    icon={provider.icon}
                    onClick={() => window.location.href = provider.href}
                  />
                ))}
              </div>
            </CardContent>
          </Card>

          <p className="text-center mt-4 text-sm text-gray-600">
            By signing up you agree to the{" "}
            <a href="/privacy" className="font-semibold hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;