import { Button } from "@/components/ui/button";
import { CheckCircle, Download, Play } from "lucide-react";

const VideoUnlocked = () => {
  const videoData = {
    title: "Wedding Highlight Reel - Johnson Family",
    creator: "Alex Studio",
  };

  const handleDownload = () => {
    // Simulate download - in production this would trigger actual file download
    console.log("Downloading video...");
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container max-w-4xl py-12">
        {/* Success Banner */}
        <div className="mb-8 flex items-center gap-3 rounded-xl bg-success/10 border border-success/20 px-6 py-4 animate-fade-in">
          <CheckCircle className="h-6 w-6 text-success" />
          <div>
            <p className="font-medium text-success">Payment successful!</p>
            <p className="text-sm text-muted-foreground">
              You now have full access to watch and download this video.
            </p>
          </div>
        </div>

        {/* Video Player */}
        <div className="animate-fade-in [animation-delay:100ms] opacity-0">
          <div className="relative mb-6 overflow-hidden rounded-2xl bg-foreground shadow-xl">
            <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-muted to-foreground/90">
              {/* Placeholder video player */}
              <div className="flex flex-col items-center gap-4 text-muted">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/90 shadow-lg cursor-pointer transition-transform hover:scale-105">
                  <Play className="h-10 w-10 text-primary-foreground ml-1" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Click to play video
                </p>
              </div>
            </div>
          </div>

          {/* Video Info & Download */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold">{videoData.title}</h1>
              <p className="mt-1 text-muted-foreground">by {videoData.creator}</p>
            </div>

            <Button 
              onClick={handleDownload} 
              size="lg"
              className="sm:flex-shrink-0"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Original
            </Button>
          </div>
        </div>

        {/* Info Card */}
        <div className="mt-8 rounded-xl border border-border bg-card p-6 animate-fade-in [animation-delay:200ms] opacity-0">
          <h2 className="mb-3 font-semibold">Your access</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-success" />
              Stream the video anytime
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-success" />
              Download in original quality
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-success" />
              Access never expires
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VideoUnlocked;
