import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import DashboardHeader from "@/components/layout/DashboardHeader";
import { Plus, Copy, Lock, CheckCircle, ExternalLink, Video } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface VideoItem {
  id: string;
  title: string;
  price: number;
  status: "locked" | "paid";
  createdAt: string;
}

const mockVideos: VideoItem[] = [
  {
    id: "1",
    title: "Wedding Highlight Reel - Johnson Family",
    price: 150,
    status: "paid",
    createdAt: "2024-01-15"
  },
  {
    id: "2", 
    title: "Product Demo - TechStart Promo",
    price: 300,
    status: "locked",
    createdAt: "2024-01-18"
  },
  {
    id: "3",
    title: "Music Video Edit - Summer Vibes",
    price: 200,
    status: "locked",
    createdAt: "2024-01-20"
  }
];

const Dashboard = () => {
  const [videos] = useState<VideoItem[]>(mockVideos);
  const { toast } = useToast();

  const copyLink = (id: string) => {
    navigator.clipboard.writeText(`${window.location.origin}/video/${id}`);
    toast({
      title: "Link copied",
      description: "Payment link has been copied to clipboard"
    });
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <DashboardHeader />
      
      <main className="container py-10">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="mt-1 text-muted-foreground">
              Manage your videos and payment links
            </p>
          </div>
          
          <Button asChild size="lg">
            <Link to="/upload">
              <Plus className="mr-2 h-5 w-5" />
              Upload New Video
            </Link>
          </Button>
        </div>

        {videos.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card py-20 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-muted">
              <Video className="h-8 w-8 text-muted-foreground" />
            </div>
            <h2 className="mb-2 text-xl font-semibold">No videos yet</h2>
            <p className="mb-6 text-muted-foreground">
              Upload your first video to start getting paid
            </p>
            <Button asChild>
              <Link to="/upload">
                <Plus className="mr-2 h-4 w-4" />
                Upload Video
              </Link>
            </Button>
          </div>
        ) : (
          <div className="grid gap-4">
            {videos.map((video) => (
              <div 
                key={video.id}
                className="group flex items-center justify-between rounded-xl border border-border bg-card p-5 transition-all hover:shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-muted">
                    <Video className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-medium">{video.title}</h3>
                    <div className="mt-1 flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        ${video.price}
                      </span>
                      <span>•</span>
                      <span>{new Date(video.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Badge 
                    variant={video.status === "paid" ? "default" : "secondary"}
                    className={video.status === "paid" ? "bg-success hover:bg-success" : ""}
                  >
                    {video.status === "paid" ? (
                      <>
                        <CheckCircle className="mr-1.5 h-3.5 w-3.5" />
                        Paid
                      </>
                    ) : (
                      <>
                        <Lock className="mr-1.5 h-3.5 w-3.5" />
                        Locked
                      </>
                    )}
                  </Badge>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => copyLink(video.id)}
                  >
                    <Copy className="mr-2 h-4 w-4" />
                    Copy Link
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    size="icon"
                    asChild
                  >
                    <Link to={`/video/${video.id}`}>
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
