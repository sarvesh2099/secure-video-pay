import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Lock, Shield, CreditCard, Play } from "lucide-react";

const VideoLocked = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const videoData = {
    title: "Wedding Highlight Reel - Johnson Family",
    creator: "Alex Studio",
    price: 150,
    thumbnail: null
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    navigate("/video/1/unlocked");
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container max-w-2xl py-12">
        <div className="text-center animate-fade-in">
          {/* Video Preview */}
          <div className="relative mb-8 overflow-hidden rounded-2xl bg-gradient-to-br from-muted to-muted/50 shadow-lg">
            <div className="aspect-video flex items-center justify-center relative">
              {/* Blurred overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              
              {/* Lock icon */}
              <div className="relative flex flex-col items-center gap-4 text-muted-foreground">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-background/90 shadow-lg">
                  <Lock className="h-9 w-9" />
                </div>
                <div className="flex items-center gap-2 rounded-full bg-background/90 px-4 py-2 text-sm font-medium shadow-sm">
                  <Play className="h-4 w-4" />
                  Video Locked
                </div>
              </div>
            </div>
          </div>

          {/* Video Info */}
          <h1 className="mb-2 text-2xl font-bold md:text-3xl">
            {videoData.title}
          </h1>
          <p className="mb-8 text-muted-foreground">
            by {videoData.creator}
          </p>

          {/* Payment Card */}
          <div className="rounded-2xl border border-border bg-card p-8 text-left shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-muted-foreground">Video access</span>
              <span className="text-3xl font-bold">${videoData.price}</span>
            </div>

            <Button 
              onClick={handlePayment}
              disabled={isProcessing}
              className="w-full h-14 text-lg"
              variant="success"
            >
              {isProcessing ? (
                "Processing payment..."
              ) : (
                <>
                  <CreditCard className="mr-2 h-5 w-5" />
                  Pay to Unlock
                </>
              )}
            </Button>

            {/* Trust Indicators */}
            <div className="mt-6 flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Shield className="h-4 w-4 text-success" />
                Secure payment
              </div>
              <div className="flex items-center gap-1.5">
                <CreditCard className="h-4 w-4" />
                Powered by Stripe
              </div>
            </div>

            <p className="mt-6 text-center text-sm text-muted-foreground">
              After payment, you'll be able to watch and download the video in full quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoLocked;
