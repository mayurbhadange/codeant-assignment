import { Database } from "lucide-react";
import { Badge } from "../ui/badge";

export const RepositoryList = ({ searchQuery }: { searchQuery: string }) => {
    const repositories = [
      {
        name: "design-system",
        language: "React",
        size: "7320 KB",
        visibility: "Public",
        updatedAt: "1 day ago",
      },
      {
        name: "codeant-ci-app",
        language: "JavaScript",
        size: "5871 KB",
        visibility: "Private",
        updatedAt: "2 days ago",
      },
      {
        name: "analytics-dashboard",
        language: "Python",
        size: "4521 KB",
        visibility: "Private",
        updatedAt: "5 days ago",
      },
      {
        name: "mobile-app",
        language: "Swift",
        size: "3096 KB",
        visibility: "Public",
        updatedAt: "3 days ago",
      },
      {
        name: "e-commerce-platform",
        language: "Java",
        size: "6210 KB",
        visibility: "Private",
        updatedAt: "6 days ago",
      },
      {
        name: "blog-website",
        language: "HTML/CSS",
        size: "1876 KB",
        visibility: "Public",
        updatedAt: "4 days ago",
      },
      {
        name: "social-network",
        language: "PHP",
        size: "5432 KB",
        visibility: "Private",
        updatedAt: "7 days ago",
      },
    ];
  
    const filteredRepositories = repositories.filter((repo) =>
      repo.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    return (
      <div className="space-y-4">
        {filteredRepositories.map((repo) => (
          <div
            key={repo.name}
            className="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="font-medium text-[20px]">{repo.name}</span>
                <Badge
                  variant={repo.visibility === "Public" ? "secondary" : "outline"}
                  className="text-[#175CD3] border border-[#B2DDFF] bg-[#EFF8FF] rounded-xl"
                >
                  {repo.visibility}
                </Badge>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="text-[#181D27] flex items-center gap-2 text-[14px]">
                  {repo.language}
                  <span className="h-2 w-2 rounded-full bg-[#175CD3]" />
                </div>
                <div className="text-[#181D27] flex justify-center items-center gap-1 text-[14px]">
                  <Database size={13} />
                  <span>{repo.size}</span>
                </div>
                <span className="text-[#181D27] text-[14px]">
                  Updated {repo.updatedAt}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }